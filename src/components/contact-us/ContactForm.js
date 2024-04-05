import React from 'react';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <section
      className="contact-us-form pt-60 pb-120 "
      style={{
        background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className=" col-md-8">
            <div className="section-heading">
              <h2>Do you have more questions about our staff and services? </h2>
              <p>
              Feel free to send us a message using the form below. We will get back to you as soon as possible.




              </p>
            </div>
            <form action="#" className="register-form">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="mb-1">
                  FULL NAME  <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="Enter your full name here"
                      required
                      placeholder="Enter your full name here"
                      aria-label="First name"
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
                      id=" Email Address "
                      placeholder="Email Address"
                      aria-label=" Email Address "
                    />
                  </div>
                </div>

                
                <div className="col-12">
                  <label htmlFor="text" className="mb-1">
                  ADDRESS <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      required
                      placeholder="enter  your address here"
                      aria-label="Phone"
                    />
                  </div>
                </div>  
              </div>

              <div className="row">
                



<div className="col-12">
                  <label htmlFor="yourMessage" className="mb-1">
                    Message <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <textarea
                      className="form-control"
                      id="yourMessage"
                      required
                      placeholder="How can we help you?"
                      style={{ height: '120px' }}
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
  );
};

export default ContactForm;
