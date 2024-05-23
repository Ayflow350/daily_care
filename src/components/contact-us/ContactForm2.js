import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  // Form state
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [refereePhone, setRefereePhone] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://new-backend-xfge.onrender.com/referral",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            referrerName,
            referrerEmail,
            refereeName,
            refereeEmail,
            refereePhone,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Referral sent successfully!");
      } else {
        toast.error("Failed to send referral: " + data.message);
      }
    } catch (error) {
      toast.error("Error sending referral: " + error.message);
    }
  };

  return (
    <section
      className="contact-us-form pt-60 pb-120"
      style={{
        background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className=" col-md-8">
            <div className="section-heading">
              <h2>Help a Friend, Refer Someone Today</h2>
              <p>
                Help someone who needs our services by sending a referral to us.
                Please complete the form below so we can get started.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="register-form">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="referrerName" className="mb-1">
                    Referrer Name <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="referrerName"
                      required
                      placeholder="Referrer Name"
                      aria-label="Referrer Name"
                      value={referrerName}
                      onChange={(e) => setReferrerName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="referrerEmail" className="mb-1">
                    Referrer Email <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="referrerEmail"
                      required
                      placeholder="Referrer Email"
                      aria-label="Referrer Email"
                      value={referrerEmail}
                      onChange={(e) => setReferrerEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="refereeName" className="mb-1">
                    Referee Name <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="refereeName"
                      required
                      placeholder="Referee Name"
                      aria-label="Referee Name"
                      value={refereeName}
                      onChange={(e) => setRefereeName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="refereeEmail" className="mb-1">
                    Referee Email <span className="text-danger">*</span>
                  </label>
                  <div class="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="refereeEmail"
                      required
                      placeholder="Referee Email"
                      aria-label="Referee Email"
                      value={refereeEmail}
                      onChange={(e) => setRefereeEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="refereePhone" className="mb-1">
                    Referee Phone
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="refereePhone"
                      placeholder="Referee Phone"
                      aria-label="Referee Phone"
                      value={refereePhone}
                      onChange={(e) => setRefereePhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Send Your Referrals
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </section>
  );
};

export default ContactForm;
