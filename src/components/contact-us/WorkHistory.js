import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WorkHistory = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // send email
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const { success, error } = await response.json();

      if (success) {
        toast.success('Your inquiry has been submitted!', {
          position: 'top-right',
          closeButton: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          autoClose: 5000 // Close after 5 seconds
        });

        e.target.reset();
      } else if (error) {
        console.error(error);
        toast.error(`Error while submitting your inquiry: ${error}`, {
          position: 'top-right',
          closeButton: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined
        });
      }
    } catch (err) {
      console.error(err);
      toast.error(`Error while submitting your inquiry: ${err}`, {
        position: 'top-right',
        closeButton: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined
      });
    }

    setSubmitting(false);
  };

  return (
    <>
    <section
      className="contact-us-form pt-60 pb-120 "
      style={{
        background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className=" col-md-12">
            
            <form action="#" className="register-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="mb-1">
                  FULL NAME  <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="text" id='firstName' name='firstName' placeholder='Enter first name...' onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <label htmlFor="lastName" className="mb-1">
                Email Address 
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id='email' name='email' placeholder='Enter email...' onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="mb-1">
                  FULL NAME  <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="text" id='firstName' name='firstName' placeholder='Enter first name...' onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <label htmlFor="lastName" className="mb-1">
                Email Address 
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id='email' name='email' placeholder='Enter email...' onChange={handleInputChange}
                    />
                  </div>
                </div>

                
              
              </div>

              

              <div className="row">
                


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
      />
    </div>
  </div>
  <div className="col-sm-3 ">
    <label htmlFor="lastName" className="mb-1">
    Area of Study
    </label>
    <div className="input-group mb-3">
      <input
        type="email"
        className="form-control"
        id="lastName"
        placeholder="Area of Study"
        aria-label=" Area of Study"
      />
    </div>
  </div>
  <div className="col-sm-6 ">
  <label htmlFor="eligibleToWork" className="mb-1">
  Diploma
Received?
  </label>
  <div className="input-group mb-3">
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id="eligibleToWorkYes"
      />
      <label className="form-check-label" htmlFor="eligibleToWorkYes">
        Yes
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id="eligibleToWorkNo"
      />
      <label className="form-check-label" htmlFor="eligibleToWorkNo">
        No
      </label>
    </div>
  </div>
</div>

                <div className="col-12">
                  <label htmlFor="yourMessage" className="mb-1">
                    Message <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <textarea
                      className="form-control"
                 
                      required
                      placeholder="How can we help you?"
                      style={{ height: '120px' }}
                      id='message' name="message" cols="10" rows="10"  onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
            SUBMIT
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