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
import { Hr } from "@react-email/components";
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

  const borderStyle = {
    borderBottom: "2px solid black", // Use border-bottom for a sleek input design
    width: "200px",
    height: "100px",
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
              <div className="support-article-sidebar sticky-sidebar">
                <div
                  className="nav flex-column nav-pills support-article-tab bg-light rounded-custom p-5"
                  id="v-pills-support"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    data-bs-target="#support-tab-1"
                    data-bs-toggle="pill"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    INSTRUCTIONS TO APPLICATION
                  </button>
                  <button
                    className="nav-link"
                    data-bs-target="#support-tab-2"
                    data-bs-toggle="pill"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    APPLICATION FOR EMPLOYMENT
                  </button>
                  <button
                    className="nav-link"
                    data-bs-target="#support-tab-3"
                    data-bs-toggle="pill"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    PERSONAL INFORMATION
                  </button>
                  <button
                    className="nav-link"
                    data-bs-target="#support-tab-4"
                    data-bs-toggle="pill"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    WORK HISTORY
                  </button>

                  <button
                    className="nav-link"
                    data-bs-target="#support-tab-5"
                    data-bs-toggle="pill"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    SUPPORTING STATEMENTS
                  </button>

                  <button
                    className="nav-link"
                    data-bs-target="#support-tab-6"
                    data-bs-toggle="pill"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    CONFIDENTIAL AGREEMENT
                  </button>
                </div>
                <div className="bg-light p-5 mt-4 rounded-custom quick-support">
                  <Link href="/contact-us">
                    <a className="text-decoration-none text-muted d-flex align-items-center py-2">
                      <div className="quick-support-icon rounded-circle bg-success-soft me-3">
                        <FaRegListAlt />
                      </div>
                      <div className="contact-option-text">Contact Us</div>
                    </a>
                  </Link>
                  <Link href="mailto:info@themetags.com">
                    <a className="text-decoration-none text-muted d-flex align-items-center py-2">
                      <div className="quick-support-icon rounded-circle bg-primary-soft me-3">
                        <FaRegEnvelope />
                      </div>
                      <div className="contact-option-text">Send an Email</div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-8">
              <div className="tab-content" id="v-pills-supportContent">
                {/* Use conditional rendering to display either the FAQ or the form */}
                <div
                  className="tab-pane fade show active"
                  id="support-tab-1"
                  role="tabpanel"
                >
                  {/* Include your FAQ content here */}
                  <div className="support-article-wrap">
                    <h2>INSTRUCTIONS TO APPLICATION</h2>
                    <ul className="support-article-list list-unstyled mt-4">
                      {/* Render FAQ content dynamically */}
                      {helpCenterFaqDetails.map((faq, index) => (
                        <div
                          key={index}
                          className={`tab-pane fade ${
                            index === 0 ? "show active" : ""
                          }`}
                          id={`support-tab-${index + 1}`}
                          role="tabpanel"
                        >
                          {/* Include your FAQ content here */}
                          <div className="support-article-wrap">
                            <ul className="support-article-list list-unstyled mt-4">
                              {faq.listItem.map((item, i) => (
                                <li
                                  key={i}
                                  className="py-4 border-top border-light"
                                >
                                  <a
                                    href={item.href}
                                    className="text-decoration-none d-block text-muted"
                                  >
                                    <h3 className="h5 support-article-title">
                                      {item.header}
                                    </h3>
                                    <p>{item.desc}</p>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="support-tab-2"
                  role="tabpanel"
                >
                  {/* Display the form for the second tab */}
                  <div className="">
                    <ApplyForm />
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="support-tab-3"
                  role="tabpanel"
                >
                  {/* Include content for third tab if needed */}
                  <div className="support-article-wrap">
                    {/* Download form button */}
                    {/* <div className="action-btns text-end me-5 col-lg-2 me-lg-0 d-none d-md-block d-lg-block">
                      <a
                        className="btn btn-primary"
                        href="/Application.docx"
                        download="Application.docx"
                      >
                        <FaDownload className="me-2" /> Download Form
                      </a>
                    </div> */}

                    <ApplyFormTwo />
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="support-tab-4"
                  role="tabpanel"
                >
                  {/* Include content for fourth tab if needed */}
                  <div className="support-article-wrap">
                    <h2>PRESENT AND PAST WORK HISTORY</h2>
                    <p>Upload your completed application form here.</p>
                    {/* Form upload section */}
                    {/* <div className="mt-3">
                    
                      <div className="mb-3">
                        <input type="file" className="form-control" />
                      </div>
                      <button className="btn btn-secondary">
                        Submit Form
                      </button>
                    </div> */}
                    <WorkHistory />
                    <h2>WORK HISTORY</h2>
                    <p>
                      Give details of your work history with the most recent
                      listed first: ONE
                    </p>

                    <WorkHistory />
                    <h2>WORK HISTORY</h2>
                    <p>
                      Give details of your work history with the most recent
                      listed first: TWO
                    </p>

                    <WorkHistory />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="support-tab-5"
                  role="tabpanel"
                >
                  <ul className="support-article-list list-unstyled mt-4">
                    <h2>SUPPORTING STATEMENTS</h2>
                    {/* Render FAQ content dynamically */}
                    {statement.map((faq, index) => (
                      <div
                        key={index}
                        className={`tab-pane fade ${
                          index === 0 ? "show active" : ""
                        }`}
                        id={`support-tab-${index + 1}`}
                        role="tabpanel"
                      >
                        {/* Include your FAQ content here */}
                        <div className="support-article-wrap">
                          <ul className="support-article-list list-unstyled mt-4">
                            <ImageGrid />

                            <Hr />
                            <ImageGrid />
                          </ul>
                        </div>
                      </div>
                    ))}
                  </ul>
                  Signature of applicant: <input className="border-none" />{" "}
                  Date:
                  <input />
                </div>
                <div
                  className="tab-pane fade"
                  id="support-tab-6"
                  role="tabpanel"
                >
                  <Confidential />
                </div>
                <div
                  className="tab-pane fade"
                  id="support-tab-7"
                  role="tabpanel"
                >
                  {/* <ImageGrid /> */}
                  <Release />
                </div>
                <div
                  className="tab-pane fade"
                  id="support-tab-8"
                  role="tabpanel"
                >
                  {/* <ImageGrid /> */}
                  <Conflict />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeForms;
