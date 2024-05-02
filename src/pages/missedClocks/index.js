import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import Link from 'next/link';
import Image from 'next/image';

import Layout from 'src/layout/Layout';
import Rating from 'src/components/common/Rating';
import { registerTestimonial, registerTestimonialTarget } from 'src/utils/data';




const Register = () => {

     // State variables to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    missedClocks: '',
    reasonForMissedClock: '',
    date: new Date(),
    time: '12:00',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission
    console.log(formData);
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle date change
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date,
    });
  };

  // Function to handle time change
  const handleTimeChange = (time) => {
    setFormData({
      ...formData,
      time,
    });
  };
  return (
    <Layout title="Sign Up" desc="This is sign up page">
      <section
        className="sign-up-in-section bg-dark ptb-60"
        style={{
          background: "url('/page-header-bg.svg')no-repeat right bottom",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="pricing-content-wrap bg-custom-light rounded-custom shadow-lg">
                <div className="price-feature-col pricing-feature-info text-white left-radius p-5 order-1 order-lg-0">
                  <Link href="/">
                    <a className="mb-5 d-none d-xl-block d-lg-block">
                      <Image
                        width={250}
                        height={100}
                        src="/vgh.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </a>
                  </Link>
                  <div className="customer-testimonial-wrap mt-60">
                    <div className="tab-content" id="nav-tabContent">
                      {registerTestimonial.map((testimonial, i) => (
                        <div
                          key={i + 1}
                          className={`tab-pane fade ${testimonial.active}`}
                          id={testimonial.target}
                          role="tabpanel"
                        >
                          <div className="testimonial-tab-content mb-4">
                            <div className="mb-2">
                              <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
                                <li className="list-inline-item">
                                  <Rating />
                                </li>
                              </ul>
                            </div>
                            <blockquote>
                              <h5>{testimonial.header} </h5>
                              {testimonial.info}
                            </blockquote>
                            <div className="author-info mt-4">
                              <h6 className="mb-0">{testimonial.name} </h6>
                              <span className="small">
                                {testimonial.title}{' '}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <ul
                      className="nav testimonial-tab-list mt-5"
                      id="nav-tab"
                      role="tablist"
                    >
                      {registerTestimonialTarget.map((testimonialTarget, i) => (
                        <li key={i + 1} className="nav-item">
                          <a
                            className={testimonialTarget.active}
                            href={testimonialTarget.target}
                            data-bs-toggle="tab"
                            data-bs-target={testimonialTarget.target}
                            role="tab"
                            aria-selected="true"
                          >
                            <Image
                              src={testimonialTarget.image}
                              className="img-fluid rounded-circle"
                              width={60}
                              height={60}
                              alt="user"
                            />
                            

                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
                <div className="price-feature-col pricing-action-info p-5 right-radius bg-light order-0 order-lg-1">
                  <a
                    href="index.html"
                    className="mb-5 d-block d-xl-none d-lg-none"
                  >
                    <Image
  src="/logo-color.png"
  alt="logo"
  className="img-fluid"
  width={250}
  height={100}
/>
                  </a>
                  <h1 className="h3">Missed Clocks</h1>
                  <p className="text-muted">
                    Get started with your free account today. No credit card
                    needed and no setup fees.
                  </p>

                  <form action="#" className="mt-5 register-form">
                    <div className="row">
                      <div className="col-sm-12">
                        <label htmlFor="name" className="mb-1">
                          Name <span className="text-danger">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            id="name"
                            required
                            aria-label="name"
                          />
                        </div>
                      </div>
                     
                      <div className="col-sm-12">
                      <label htmlFor="name" className="mb-1">
                          Missed Clocks <span className="text-danger">*</span>
                        </label>
                      <select
                    className="form-select"
                    id="missedClocks"
                    name="missedClocks"
                    value={formData.missedClocks}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Missed Clocks</option>
                    <option value="Missed clock in">Missed clock in</option>
                    <option value="Missed clock out">Missed clock out</option>
                    <option value="Missed clock in and out">Missed clock in and out</option>
                  </select>
                      </div>
                      <div className="col-sm-12">
                       
                       
              {formData.missedClocks && (
                <>
                  <div className="col-sm-12">
                  <label htmlFor="name" className="mb-1">
                         Reason Missed Clocks <span className="text-danger">*</span>
                        </label>
                   
                      <select
                        className="form-select"
                        id="reasonForMissedClock"
                        name="reasonForMissedClock"
                        value={formData.reasonForMissedClock}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Reason for Missed Clock</option>
                        <option value="Forgotten Clock in/out">Forgotten Clock in/out</option>
                        <option value="Staff busy with participants">Staff busy with participants</option>
                        <option value="Participant's phone problems">Participants phone problems</option>
                        <option value="ISAs call complete">ISAs call complete</option>
                        <option value="Staff in community with participant">Staff in community with participant</option>
                        <option value="OTP issues">OTP issues</option>
                        <option value="Error clocking in">Error clocking in</option>
                        <option value="Other">Other</option>
                      </select>
                    
                  </div>
                  <div className="col-sm-12">
                  <label htmlFor="name" className="mb-1">
                        Date <span className="text-danger">*</span>
                        </label>
                    <div className="col-sm-9">
                      <DatePicker
                        selected={formData.date}
                        onChange={handleDateChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                  <label htmlFor="name" className="mb-1">
                      Time <span className="text-danger">*</span>
                        </label>
                    <div className="col-sm-9">
                      <TimePicker
                        disableClock
                        value={formData.time}
                        onChange={handleTimeChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </>
              )}
                      </div>
                      <div className="col-12">
                        <div className="form-check d-flex">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            
                            I have read and agree to the{' '}
                            <a href="#" className="text-decoration-none">
                              Terms & Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary mt-4 d-block w-100"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                    
                    
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;



