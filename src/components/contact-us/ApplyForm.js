import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyForm = () => {
  // Form state
  const [applicationDate, setApplicationDate] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [homePhone, setHomePhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendfirst-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          applicationDate,
          fullName,
          email,
          homePhone,
          mobile,
          address,
          city,
          state,
          zipCode,
          position,
        }),
      });

      console.log('Received application:', {
        applicationDate,
        fullName,
        email,
        homePhone,
        mobile,
        address,
        city,
        state,
        zipCode,
        position,
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        toast.success('Application submitted successfully!');
        
      } else {
        toast.error('Failed to submit application: ' + data.message);
      }
    } catch (error) {
      toast.error('Error submitting application: ' + error.message);
    }
  };

  return (
    <section
      className="contact-us-form pt-60 pb-120"
      style={{
        background: "url('/shape/contact-us-bg.svg') no-repeat center bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Please Fill Out Completely</h2>
              <p>
                Complete the application thoroughly. We'll use this to verify your employment history and background.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="register-form">
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
                      onChange ={(e) => setZipCode(e.target.value)}
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
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </section>
  );
};

export default ApplyForm;

