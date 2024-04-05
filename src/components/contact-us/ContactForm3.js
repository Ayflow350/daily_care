import React from 'react';
import Image from 'next/image';

const ContactForm = () => {
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
              Help someone who needs our services by sending a referral to us. Please complete the form below so we can get started.


              </p>
            </div>
            <form action="#" className="register-form">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="mb-1">
                    Name of Referrer <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      required
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <label htmlFor="lastName" className="mb-1">
                Email Address Of Referrer
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="lastName"
                      placeholder="Email Address"
                      aria-label="Last name"
                    />
                  </div>
                </div>

                
                <div className="col-12">
                  <label htmlFor="text" className="mb-1">
                    Name <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      required
                      placeholder="Text"
                      aria-label="Phone"
                    />
                  </div>
                </div>  
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="mb-1">
                    Email Adress  <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      required
                      placeholder="Email Address"
                      aria-label="First name"
                    />
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <label htmlFor="lastName" className="mb-1">
               Phone
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="lastName"
                      placeholder="Phone"
                      aria-label="Last name"
                    />
                  </div>
                </div>

{/*                 
                <div className="col-12">
                  <label htmlFor="phone" className="mb-1">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      required
                      placeholder="Phone"
                      aria-label="Phone"
                    />
                  </div>
                </div>   */}
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Send your refferrals
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactForm;