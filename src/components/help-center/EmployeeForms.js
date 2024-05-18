import React, { useRef, useState } from "react";
import Link from "next/link";
import { FaRegEnvelope, FaRegListAlt, FaDownload } from "react-icons/fa";
import { helpCenterFaqDetails, statement } from "../../utils/data";
import ApplyForm from "src/components/contact-us/ApplyForm";
import ApplyFormTwo from "src/components/contact-us/ApplyFormTwo";
import WorkHistory from "src/components/contact-us/WorkHistory";
import SignatureCanvas from "react-signature-canvas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Conflict from "@components/statement/Conflict";
import Release from "@components/statement/Release";

import ImageGrid from "@components/ImageGrid";
import Confidential from "@components/statement/Confidential";

const EmployeeForms = () => {
  // Define your form component for the second tab
  const ApplicationForm = () => {
    // Implement your form component here
    return <form>{/* Your form fields go here */}</form>;
  };

  const sigCanvas = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    agree: false,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const clearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      toast.error("You must agree to the terms.");
      return;
    }

    const signature = sigCanvas.current.toDataURL(); // Convert the drawn signature to a data URL
    const data = {
      fullName: formData.fullName,
      agree: formData.agree,
      signature,
    };

    setSubmitting(true);

    console.log(data);

    try {
      await axios.post("/api/send-signature", data);
      toast.success("Signature submitted successfully!");

      // Send email with formData and signature (using hypothetical email service)
      await axios.post("/api/send-email", {
        to: "admin@example.com", // Admin email
        subject: "New Agreement Signature",
        body: `I, ${formData.fullName}, acknowledge that I have read the company policy. I hereby declare that neither I,
        nor any other business to which I may be associated, nor, to the
        best of my knowledge, any member of my immediate family has any
        conflict between our personal affairs or interests and the proper
        performance of my responsibilities for the company that would
        constitute a violation of that company policy. If I terminate my
        employment with Daily Care Support Services, I will not work for any
        patient I have worked for with Daily Care Support Services for a
        period of two years or pay a fine of $2500.00. All assignments are
        considered Per Diem, there are no full or part time positions with
        Daily Care Support Services, Inc. due to the demands of the
        patients, and change in the patients' condition and needs.
        Furthermore, I declare that during my employment, I shall continue
        to maintain my affairs in accordance with the requirements of said
        policy.`,
        signature,
      });

      clearSignature(); // Clear the signature after submission
      setFormData({ fullName: "", agree: false });
    } catch (error) {
      toast.error("Error submitting signature.");
      console.error(error);
    }

    setSubmitting(false);
  };

  return (
    <>
      <section className="support-content ptb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-4 d-none d-md-block d-lg-block">
              <div className="support-article-sidebar sticky-sidebar"></div>
            </div>
            <div className="col-lg-7 col-md-8">
              <h2>Employee Applications</h2>
              <ImageGrid />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeForms;
