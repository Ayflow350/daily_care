import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const ApplyFormTwo = () => {
  const [mrMrs, setMrMrs] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [correspondenceAddress, setCorrespondenceAddress] = useState("");
  const [homePhone, setHomePhone] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000); // Simulate loading
    try {
      const response = await fetch("/api/personal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mrMrs,
          firstName,
          lastName,
          homeAddress,
          correspondenceAddress,
          homePhone,
          workTelephone,
          contactAtWork,
          eligibleToWork,
          workPermitOrVisa,
          highSchoolNameAndAddress,
          highSchoolDateAttended,
          highSchoolAreaOfStudy,
          highSchoolDiploma,
          collegesTrainingSchools,
          collegeDateAttended,
          collegeAreaOfStudy,
          collegeDiploma,
          professionalTrainings,
        }),
      });

      const data = await response.json();
      console.log("Response:", data);
      if (response.ok) {
        toast.success("Application submitted successfully!");
      } else {
        toast.error("Failed to submit application: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Error submitting application: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section
      className="contact-us-form pt-60 pb-120 "
      style={{
        background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="container position-relative">
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
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </section>
  );
};

export default ApplyFormTwo;
