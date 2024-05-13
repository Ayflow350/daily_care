import React, { useRef, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Release = () => {
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
    <>
      <div>
        <div className="col-sm-12">
          <div className="support-article-wrap">
            <h1 className="mb-4 fw-bold">CONFLICT OF INTEREST</h1>
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
              hereby authorized all prior employers, schools, credit bureaus,
              social security Administration. Law enforcement agencies and
              investigative agencies to give Daily Care Support Services, Inc
              all information concerning my previous employment and any
              pertinent information they may have personal or otherwise,
              concerning my qualifications for the position applied for. I
              release to Daily Care Support Services, Inc and all its employees
              form all liability for any damage that may result from furnishing
              information to Daily Care Support Services, Inc I also release to
              Daily Care Support Services, Inc and all its employees from all
              liability for any damage that may result from reliance on the
              information furnished. I understand that if a consumer
              investigative report is requested, I have the right under the Fair
              Credit Reporting Act to request in writing, within a reasonable
              time, a complete and accurate disclosure of the nature and scope
              of the investigation. This written request should be addressed to
              the location where this application is filed.
            </p>
            <div className="column col-16 d-flex justify-between mt-4">
              <p>
                Full Name (Please Print){" "}
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
              </p>
              <p>
                Social Security Number{" "}
                <input
                  type="text"
                  name="fullName"
                  value={formData.socialNumber}
                  onChange={handleInputChange}
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    outline: "none",
                  }}
                  required
                />
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="col-12">
                <label>
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
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

        <ToastContainer />
      </div>
    </>
  );
};

export default Release;
