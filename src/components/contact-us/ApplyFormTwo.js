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
              <h2>PERSONAL INFORMATION</h2>
              <p>
              Complete the application thoroughly. We'll use this to verify your employment history and background.




              </p>
            </div>
            <form action="#" className="register-form">
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
        placeholder=" lastName"
        aria-label="  lastName"
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
                    />
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <label htmlFor="lastName" className="mb-1">
                  Correspondence Address
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id=" Correspondence Address "
                      placeholder="Correspondence Address"
                      aria-label=" Correspondence Address"
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
                  Work Telephone:
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=" Work Telephone"
                      placeholder=" Work Telephone"
                      aria-label=" Work Telephone"
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
      />
      <label className="form-check-label" htmlFor="contactAtWorkYes">
        Yes
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id="contactAtWorkNo"
      />
      <label className="form-check-label" htmlFor="contactAtWorkNo">
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
      />
      <label className="form-check-label" htmlFor="workPermitOrVisaYes">
        Yes
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id="workPermitOrVisaNo"
      />
      <label className="form-check-label" htmlFor="workPermitOrVisaNo">
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
                 HIGH SCHOOL NAME AND ADDRESS<span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="FULL NAME"
                      required
                      placeholder="High School Name and Address"
                      aria-label="FULL NAME"
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
                  <label htmlFor="text" className="mb-1">
                  Colleges/ Training Schools<span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="Colleges/ Training Schools"
                      required
                      placeholder="Colleges/ Training Schools"
                      aria-label="Colleges/ Training Schools"
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


                
                {/* <div className="col-12">
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
                </div>   */}


              </div>

              <div className="row">



  
              <div className="col-12">
                  <label htmlFor="yourMessage" className="mb-1">
                  Professional trainings/ qualifications with dates and levels obtained <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <textarea
                      className="form-control"
                 
                      required
                      placeholder="Professional trainings/ qualifications with dates and levels obtained"
                      style={{ height: '120px' }}
                      id='message' name="message" cols="10" rows="10"  
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

export default ApplyFormTwo;
