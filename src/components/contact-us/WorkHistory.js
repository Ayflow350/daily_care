import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const WorkHistory = () => {
  const [formData, setFormData] = useState({
    employer: "",
    dates: "",
    position: "",
    reason: "",
    startingSalary: "",
    endingSalary: "",
    contactEmployer: null,
    message: "",
  });

  console.log(formData);

  const [submitting, setSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === "true", // Convert the string to a boolean
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000); // Simulate loading

    // Basic form validation
    const requiredFields = ["employer", "dates", "position"];
    for (let field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Field "${field}" is required`, {
          position: "top-right",
          autoClose: 5000,
        });
        return;
      }
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/work-history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data);
      if (response.ok) {
        toast.success("Application submitted successfully!");

        // Reset the form
        setFormData({
          employer: "",
          dates: "",
          position: "",
          reason: "",
          startingSalary: "",
          endingSalary: "",
          contactEmployer: null,
          message: "",
        });
      } else {
        toast.error("Failed to submit application: " + data.message);
      }
    } catch (error) {
      toast.error("Error submitting application: " + error.message);
    } finally {
      setIsLoading(false); // Stop loading spinner once the response is received
    }
  };

  return (
    <>
      <section className="contact-us-form pt-60 pb-120">
        <div className="container  position-relative">
          {isLoading && (
            <div
              className="loading-overlay"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 10,
              }}
            >
              <div style={{ marginLeft: "10px", color: "white" }}>
                <ClipLoader
                  size={100} // Customize size
                  color={"#0000FF"} // Customize color (blue)
                />
              </div>
            </div>
          )}
          <div className="row justify-content-lg-between align-items-center">
            <div className="col-md-12">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="employer" className="mb-1">
                      EMPLOYER AND ADDRESS:
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="employer"
                      name="employer"
                      value={formData.employer}
                      placeholder="Enter employer..."
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="dates" className="mb-1">
                      Dates (month/year):
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="dates"
                      name="dates"
                      value={formData.dates}
                      placeholder="Enter dates..."
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="position" className="mb-1">
                      Position Held and Duties:
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      placeholder="Enter position..."
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="reason" className="mb-1">
                      Reason for Leaving:
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      placeholder="Enter reason..."
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-sm-3">
                    <label htmlFor="startingSalary" className="mb-1">
                      Starting Salary:
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="startingSalary"
                      name="startingSalary"
                      value={formData.startingSalary}
                      placeholder="Enter starting salary..."
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-sm-3">
                    <label htmlFor="endingSalary" className="mb-1">
                      Ending Salary:
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="endingSalary"
                      name="endingSalary"
                      value={formData.endingSalary}
                      placeholder="Enter ending salary..."
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="contactEmployer" className="mb-1">
                      May we contact this employer?
                    </label>
                    <div className="input-group mb-3">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="contactEmployer"
                          id="contactEmployerYes"
                          value="true"
                          checked={formData.contactEmployer === true}
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="contactEmployerYes">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="contactEmployer"
                          id="contactEmployerNo"
                          value="false"
                          checked={formData.contactEmployer === false}
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="contactEmployerNo">No</label>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="mb-1">
                      If No, please indicate reason:
                    </label>
                    <textarea
                      className="form-control"
                      style={{ height: "120px" }}
                      id="message"
                      name="message"
                      value={formData.message}
                      placeholder="If No, indicate reason..."
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary mt-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default WorkHistory;
