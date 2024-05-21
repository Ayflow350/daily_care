import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignatureCanvas from "react-signature-canvas";
import { ClipLoader } from "react-spinners";

const ApplyForm = () => {
  // Form state
  const [applicationDate, setApplicationDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [homePhone, setHomePhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [applyPosition, setApplyPosition] = useState("");
  const [position, setPosition] = useState("");
  const [mrMrs, setMrMrs] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [correspondenceAddress, setCorrespondenceAddress] = useState("");
  const [workTelephone, setWorkTelephone] = useState("");
  const [contactAtWork, setContactAtWork] = useState(false);
  const [eligibleToWork, setEligibleToWork] = useState(false);
  const [workPermitOrVisa, setWorkPermitOrVisa] = useState(false);
  const [highSchoolNameAndAddress, setHighSchoolNameAndAddress] = useState("");
  const [highSchoolDateAttended, setHighSchoolDateAttended] = useState("");
  const [highSchoolAreaOfStudy, setHighSchoolAreaOfStudy] = useState("");
  const [highSchoolDiploma, setHighSchoolDiploma] = useState(false);
  const [collegesTrainingSchools, setCollegesTrainingSchools] = useState("");
  const [collegeDateAttended, setCollegeDateAttended] = useState("");
  const [collegeAreaOfStudy, setCollegeAreaOfStudy] = useState("");
  const [collegeDiploma, setCollegeDiploma] = useState(false);
  const [professionalTrainings, setProfessionalTrainings] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const signatureCanvasRef = useRef(null);
  const [signatureImage, setSignatureImage] = useState("");

  const [formData, setFormData] = useState({
    employer: "",
    dates: "",
    position: "",
    reason: "",
    startingSalary: "",
    endingSalary: "",
    contactEmployer: null,
    message: "",
    fullName: "",
    agree: false,
  });

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === "true", // Convert the string to a boolean
    });
  };

  const clearSignature = () => {
    signatureCanvasRef.current.clear();
  };

  const saveDeclarationSignature = () => {
    const signature = signatureCanvasRef.current.toDataURL();
    setSignatureImage(signature);
    console.log("Declaration Signature Image:", signature);
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

    try {
      const response = await fetch("/api/sendfirst-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applicationDate,
          fullName,
          mrMrs,
          firstName,
          lastName,
          email,
          homePhone,
          homeAddress,
          correspondenceAddress,
          workPermitOrVisa,
          highSchoolNameAndAddress,
          highSchoolDateAttended,
          highSchoolAreaOfStudy,
          highSchoolDiploma,
          collegeDateAttended,
          collegeAreaOfStudy,
          collegeDiploma,
          professionalTrainings,
          contactAtWork,
          eligibleToWork,
          applyPosition,
          mobile,
          address,
          city,
          state,
          zipCode,
          position,
          signatureImage,
          ...formData, // Include other form data
        }),
      });

      console.log("Received application:", {
        applicationDate,
        fullName,
        mrMrs,
        firstName,
        lastName,
        email,
        homePhone,
        homeAddress,
        correspondenceAddress,
        workPermitOrVisa,
        highSchoolNameAndAddress,
        applyPosition,
        highSchoolDateAttended,
        highSchoolAreaOfStudy,
        highSchoolDiploma,
        collegeDateAttended,
        collegeAreaOfStudy,
        collegeDiploma,
        professionalTrainings,
        contactAtWork,
        eligibleToWork,
        mobile,
        address,
        city,
        state,
        zipCode,
        position,
        signatureImage,
        ...formData, // Log other form data
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        toast.success("Application submitted successfully!");
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
    <section
      className="contact-us-form pt-60 pb-120"
      style={{
        background: "url('/shape/contact-us-bg.svg') no-repeat center bottom",
      }}
    >
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
            <div className="section-heading">
              <h2>Please Fill Out Completely</h2>
              <p>
                Complete the application thoroughly. We'll use this to verify
                your employment history and background.
              </p>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="applicationDate" className="mb-1">
                  DATE OF APPLICATION <span className="text-danger">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="applicationDate"
                    required
                    placeholder="Date"
                    value={applicationDate}
                    onChange={(e) => setApplicationDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label htmlFor="email" className="mb-1">
                  Email Address <span className="text-danger">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="fullName" className="mb-1">
                  FULL NAME <span className="text-danger">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    required
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="homePhone" className="mb-1">
                  HOME PHONE <span className="text-danger">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="homePhone"
                    required
                    placeholder="Home Phone"
                    value={homePhone}
                    onChange={(e) => setHomePhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label htmlFor="mobile" className="mb-1">
                  Mobile Phone
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    placeholder="Mobile Phone"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="address" className="mb-1">
                  Address <span className="text-danger">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    required
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="city" className="mb-1">
                  City <span className="text-danger">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    required
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-3">
                <label htmlFor="state" className="mb-1">
                  State
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-3">
                <label htmlFor="zipCode" className="mb-1">
                  ZIP CODE
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    placeholder="ZIP CODE"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label htmlFor="position" className="mb-1">
                  Position Applied For <span className="text-danger">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="position"
                    required
                    placeholder="Position Applied For"
                    value={applyPosition}
                    onChange={(e) => setApplyPosition(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-lg-between align-items-center">
              <div className=" col-md-12">
                <div className="section-heading">
                  <h2>PERSONAL INFORMATION</h2>
                  <p>
                    Complete the application thoroughly. We'll use this to
                    verify your employment history and background.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="register-form">
                  <div className="row">
                    <div className="col-sm-3">
                      <label htmlFor="status" className="mb-1">
                        Mr/Mrs <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="Mr/Mrs"
                          required
                          placeholder="Mr/Mrs"
                          aria-label="Mr/Mrs"
                          value={mrMrs}
                          onChange={(e) => setMrMrs(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 ">
                      <label htmlFor="firstName" className="mb-1">
                        FIRSTNAME:
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="firstName"
                          aria-label="  firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 ">
                      <label htmlFor="lastName" className="mb-1">
                        LASTNAME:
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="lastName"
                          placeholder="lastName"
                          aria-label="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="mb-1">
                        Home Address: <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="Home Address"
                          required
                          placeholder="Home Address"
                          aria-label="Home Address"
                          value={homeAddress}
                          onChange={(e) => setHomeAddress(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 ">
                      <label htmlFor="lastName" className="mb-1">
                        Correspondence Address
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="Correspondence Address"
                          className="form-control"
                          id=" Correspondence Address "
                          placeholder="Correspondence Address"
                          aria-label=" Correspondence Address"
                          value={correspondenceAddress}
                          onChange={(e) =>
                            setCorrespondenceAddress(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="mb-1">
                        HOME PHONE <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="HOME PHONE"
                          required
                          placeholder="HOME PHONE"
                          aria-label="HOME PHONE"
                          value={homePhone}
                          onChange={(e) => setHomePhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 ">
                      <label htmlFor="lastName" className="mb-1">
                        Work Telephone:
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id=" Work Telephone"
                          placeholder=" Work Telephone"
                          aria-label=" Work Telephone"
                          value={workTelephone}
                          onChange={(e) => setWorkTelephone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-sm-3">
                      <label htmlFor="contactAtWork" className="mb-1">
                        May we contact you at work?
                      </label>
                      <div className="input-group mb-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="contactAtWorkYes"
                            checked={contactAtWork}
                            onChange={(e) => setContactAtWork(e.target.checked)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="contactAtWorkYes"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="contactAtWorkNo"
                            checked={!contactAtWork}
                            onChange={(e) =>
                              setContactAtWork(!e.target.checked)
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="contactAtWorkNo"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-3 ">
                      <label htmlFor="eligibleToWork" className="mb-1">
                        Are you eligible to work in the U.S?
                      </label>
                      <div className="input-group mb-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="eligibleToWorkYes"
                            checked={eligibleToWork}
                            onChange={(e) =>
                              setEligibleToWork(e.target.checked)
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="eligibleToWorkYes"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="eligibleToWorkNo"
                            checked={!eligibleToWork}
                            onChange={(e) =>
                              setEligibleToWork(!e.target.checked)
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="eligibleToWorkNo"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="workPermitOrVisa" className="mb-1">
                        Do you have a work permit or a right to work Visa?
                      </label>
                      <div className="input-group mb-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="workPermitOrVisaYes"
                            checked={workPermitOrVisa}
                            onChange={(e) =>
                              setWorkPermitOrVisa(e.target.checked)
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="workPermitOrVisaYes"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="workPermitOrVisaNo"
                            checked={!workPermitOrVisa}
                            onChange={(e) =>
                              setWorkPermitOrVisa(!e.target.checked)
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="workPermitOrVisaNo"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="section-heading mt-5">
                      <h2>EDUCATION AND TRAINING</h2>
                    </div>

                    <div className="col-12">
                      <label htmlFor="text" className="mb-1">
                        HIGH SCHOOL NAME AND ADDRESS
                        <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="FULL NAME"
                          required
                          placeholder="High School Name and Address"
                          aria-label="FULL NAME"
                          value={highSchoolNameAndAddress}
                          onChange={(e) =>
                            setHighSchoolNameAndAddress(e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="col-sm-3 ">
                      <label htmlFor="firstName" className="mb-1">
                        Date Attended
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="Dates
        Attended"
                          aria-label=" Dates
        Attended"
                          value={highSchoolDateAttended}
                          onChange={(e) =>
                            setHighSchoolDateAttended(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 ">
                      <label htmlFor="lastName" className="mb-1">
                        Area of Study
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="area"
                          placeholder="Area of Study"
                          aria-label=" Area of Study"
                          value={highSchoolAreaOfStudy}
                          onChange={(e) =>
                            setHighSchoolAreaOfStudy(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 ">
                      <label htmlFor="eligibleToWork" className="mb-1">
                        Diploma Received?
                      </label>
                      <div className="input-group mb-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="highSchoolDiplomaYes"
                            checked={highSchoolDiploma}
                            onChange={(e) =>
                              setHighSchoolDiploma(e.target.checked)
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="highSchoolDiplomaYes"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="highSchoolDiplomaNo"
                            checked={!highSchoolDiploma}
                            onChange={(e) =>
                              setHighSchoolDiploma(!e.target.checked)
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="highSchoolDiplomaNo"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="text" className="mb-1">
                        Colleges/ Training Schools
                        <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="Colleges/ Training Schools"
                          required
                          placeholder="Colleges/ Training Schools"
                          aria-label="Colleges/ Training Schools"
                          value={collegesTrainingSchools}
                          onChange={(e) =>
                            setCollegesTrainingSchools(e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="col-sm-3 ">
                      <label htmlFor="firstName" className="mb-1">
                        Date Attended
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="Dates
        Attended"
                          aria-label=" Dates
        Attended"
                          value={collegeDateAttended}
                          onChange={(e) =>
                            setCollegeDateAttended(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 ">
                      <label htmlFor="lastName" className="mb-1">
                        Area of Study
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="area"
                          placeholder="Area of Study"
                          aria-label=" Area of Study"
                          value={collegeAreaOfStudy}
                          onChange={(e) =>
                            setCollegeAreaOfStudy(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 ">
                      <label htmlFor="eligibleToWork" className="mb-1">
                        Diploma Received?
                      </label>
                      <div className="input-group mb-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="collegeDiplomaYes"
                            checked={collegeDiploma}
                            onChange={(e) =>
                              setCollegeDiploma(e.target.checked)
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="collegeDiplomaYes"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="collegeDiplomaNo"
                            checked={!collegeDiploma}
                            onChange={(e) =>
                              setCollegeDiploma(!e.target.checked)
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="collegeDiplomaNo"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="yourMessage" className="mb-1">
                        Professional trainings/ qualifications with dates and
                        levels obtained <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <textarea
                          className="form-control"
                          required
                          placeholder="Professional trainings/ qualifications with dates and levels obtained"
                          style={{ height: "120px" }}
                          id="message"
                          name="message"
                          cols="10"
                          rows="10"
                          value={collegeDateAttended}
                          onChange={(e) =>
                            setProfessionalTrainings(e.target.value)
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-lg-between align-items-center">
                    <div className=" col-md-12">
                      <div className="section-heading">
                        <h2>WORK HISTORY</h2>
                        <p>
                          Complete the application thoroughly. We'll use this to
                          verify your employment history and background.
                        </p>
                      </div>

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
                    </div>
                  </div>

                  <div className="col-sm-12 pt-60">
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
                        acknowledge that I have read the company policy
                        statement concerning conflict of interest. I hereby
                        declare that neither I, nor any other business to which
                        I may be associated, nor, to the best of my knowledge,
                        any member of my immediate family has any conflict
                        between our personal affairs or interests and the proper
                        performance of my responsibilities for the company that
                        would constitute a violation of that company policy. If
                        I terminate my employment with Daily Care Support
                        Services, I will not work for any patient I have worked
                        for with Daily Care Support Services for a period of two
                        years or pay a fine of $2500.00. All assignments are
                        considered Per Diem, there are no full or part time
                        positions with Daily Care Support Services, Inc. due to
                        the demands of the patients, and change in the patients'
                        condition and needs. Furthermore, I declare that during
                        my employment, I shall continue to maintain my affairs
                        in accordance with the requirements of said policy.
                      </p>

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
                            type="button"
                            className="btn btn-primary ml-5"
                            style={{ marginRight: "1rem" }}
                          >
                            Clear Signature
                          </button>
                          <button
                            type="button"
                            onClick={saveDeclarationSignature}
                            className="btn btn-primary"
                          >
                            Save Signature
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className=" col-sm-12  pt-60">
                      <div className="support-article-wrap ">
                        <h1 className=" mb-4 fw-bold">
                          READ CAREFULLY AND SIGN BELOW IF YOU AGREE TO THESE
                          TERMS OF EMPLOYMENT
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
                          agree that except at the request and for the benefit
                          of Daily Care Support Services, Inc I will not
                          disclose to anyone or use for my own purposes any of
                          Daily Care Support Services, Inc confidential or
                          proprietary information, either during or after my
                          employment. I understand and agree that Daily Care
                          Support Services, Inc bidding, costs, pricing and
                          marketing information and techniques, customer names
                          and information, and employee name and information are
                          confidential and proprietary to Daily Care Support
                          Services, Inc
                        </p>
                        <p>
                          I certify that this application contains no willful
                          misrepresentation or falsifications and that this
                          information given by me is true and complete to the
                          best of my knowledge and belief. I authorized Daily
                          Care Support Services, Inc to contact all sources to
                          verify the information on this application. I
                          understand that any falsification, misrepresentation,
                          or fraudulent information provided by me in connection
                          with my application for employment is sufficient
                          grounds for withdrawal of an employment offer or
                          immediate discharge.
                        </p>

                        <p>
                          I authorized and requested my former employers,
                          references, and educational institutions which have
                          information about me, to give Daily Care Support
                          Services, Inc all information and opinions about me in
                          their possession and which may lawfully be disclosed.
                          I hereby waive written notice of such release of
                          information and opinions, and release such former
                          employers, references, and educational institutions
                          from any liability or claim relating to such release
                          of information and opinions. I also authorized and
                          request federal, state, and local governmental
                          agencies to release Daily Care Support Services, Inc
                          any information requested, concerning any criminal
                          convictions on my record. A photocopy of this signed
                          authorization and waiver shall be valid as an
                          original.
                        </p>
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
                                type="button"
                                className="btn btn-primary ml-5"
                                style={{ marginRight: "1rem" }}
                              >
                                Clear Signature
                              </button>
                              <button
                                type="button"
                                onClick={saveDeclarationSignature}
                                className="btn btn-primary"
                              >
                                Save Signature
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary mt-4 col-sm-12 mt-60"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </section>
  );
};

export default ApplyForm;
