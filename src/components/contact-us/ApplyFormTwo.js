import React from 'react';
import Image from 'next/image';

const ApplyFormTwo = () => {
  return (
    <section
      className="contact-us-form pt-60 pb-120 "
      style={{
        background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className=" col-md-12">
            <div className="section-heading">
              <h2>Please Fill Out Completely</h2>
              <p>
              Complete the application thoroughly. We'll use this to verify your employment history and background.




              </p>
            </div>
            <form action="#" className="register-form">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="mb-1">
                  DATE OF APPLICATION <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="DATE"
                      required
                      placeholder="Date"
                      aria-label="DATE"
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
                  FULL NAME <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="FULL NAME"
                      required
                      placeholder="FULL NAME"
                      aria-label="FULL NAME"
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
                    />
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <label htmlFor="lastName" className="mb-1">
                Mobile:
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id=" Mobile"
                      placeholder=" Mobile"
                      aria-label="  Mobile"
                    />
                  </div>
                </div>
                
                <div className="col-12">
                  <label htmlFor="text" className="mb-1">
                  ADDRESS<span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=" ADDRESS"
                      required
                      placeholder="ADDRESS"
                      aria-label="ADDRESS"
                    />
                  </div>
                </div>  
              </div>

              <div className="row">


<div className="col-sm-6">
    <label htmlFor="firstName" className="mb-1">
 CITY <span className="text-danger">*</span>
    </label>
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        id="CITY"
        required
        placeholder="CITY"
        aria-label="CITY"
      />
    </div>
  </div>
  <div className="col-sm-3 ">
    <label htmlFor="lastName" className="mb-1">
 STATE:
    </label>
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        id="STATE"
        placeholder="STATE"
        aria-label="  STATE"
      />
    </div>
  </div>
  <div className="col-sm-3 ">
    <label htmlFor="lastName" className="mb-1">
ZIP CODE:
    </label>
    <div className="input-group mb-3">
      <input
        type="email"
        className="form-control"
        id="ZIP CODE"
        placeholder=" ZIP CODE"
        aria-label="  ZIP CODE"
      />
    </div>
  </div>
  
  <div className="col-12">
    <label htmlFor="text" className="mb-1">
    POSITION APPLIED FOR<span className="text-danger">*</span>
    </label>
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        id="  POSITION APPLIED FOR"
        required
        placeholder=" POSITION APPLIED FOR"
        aria-label=" POSITION APPLIED FOR"
      />
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

export default ApplyFormTwo;
