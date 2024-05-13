import React, { useRef, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Confidential = () => {
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

  const signatureCanvasRef = useRef(null);

  const clearSignature = () => {
    signatureCanvasRef.current.clear();
  };

  const saveSignature = () => {
    const signatureImage = signatureCanvasRef.current.toDataURL();
    console.log("Signature Image:", signatureImage);
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
      signatureImage,
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
    <div>
      <div className=" col-sm-12 ">
        <div className="support-article-wrap ">
          <h1 className=" mb-4 fw-bold">
            READ CAREFULLY AND SIGN BELOW IF YOU AGREE TO THESE TERMS OF
            EMPLOYMENT
          </h1>
          <h3 className="h5"></h3>
          <p>
            I{" "}
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              style={{
                border: "none",
                borderBottom: "2px solid black",
                outline: "none",
              }}
              required
            />
            agree that except at the request and for the benefit of Daily Care
            Support Services, Inc I will not disclose to anyone or use for my
            own purposes any of Daily Care Support Services, Inc confidential or
            proprietary information, either during or after my employment. I
            understand and agree that Daily Care Support Services, Inc bidding,
            costs, pricing and marketing information and techniques, customer
            names and information, and employee name and information are
            confidential and proprietary to Daily Care Support Services, Inc
          </p>
          <p>
            I certify that this application contains no willful
            misrepresentation or falsifications and that this information given
            by me is true and complete to the best of my knowledge and belief. I
            authorized Daily Care Support Services, Inc to contact all sources
            to verify the information on this application. I understand that any
            falsification, misrepresentation, or fraudulent information provided
            by me in connection with my application for employment is sufficient
            grounds for withdrawal of an employment offer or immediate
            discharge.
          </p>

          <p>
            I authorized and requested my former employers, references, and
            educational institutions which have information about me, to give
            Daily Care Support Services, Inc all information and opinions about
            me in their possession and which may lawfully be disclosed. I hereby
            waive written notice of such release of information and opinions,
            and release such former employers, references, and educational
            institutions from any liability or claim relating to such release of
            information and opinions. I also authorized and request federal,
            state, and local governmental agencies to release Daily Care Support
            Services, Inc any information requested, concerning any criminal
            convictions on my record. A photocopy of this signed authorization
            and waiver shall be valid as an original.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="col-12">
              <label>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  I have read and agree to the{" "}
                  <a href="#" className="text-decoration-none">
                    Terms & Conditions
                  </a>
                </label>
              </label>
              <input
                className="form-check-input me-2"
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <SignatureCanvas
                ref={signatureCanvasRef}
                penColor="black"
                canvasProps={{
                  width: 500,
                  height: 200,
                  className: "signature-canvas",
                }}
              />
              <p>Draw you signature above</p>
              <div className="column col-16 d-flex justify-between mt-4">
                <button
                  onClick={clearSignature}
                  className="btn btn-primary ml-5"
                  style={{ marginRight: "1rem" }}
                >
                  Clear Signature
                </button>
                <button onClick={saveSignature} className="btn btn-primary">
                  Save Signature
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Confidential;
