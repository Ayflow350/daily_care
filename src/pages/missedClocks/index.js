import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import Router from 'next/router';
import 'react-time-picker/dist/TimePicker.css';
import Link from 'next/link';
import Image from 'next/image';


import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';


import Layout from 'src/layout/Layout';
import Rating from 'src/components/common/Rating';
import { registerTestimonial, registerTestimonialTarget } from 'src/utils/data';




const missedClock = () => {
  

     // State variables to store form data
  const [formData, setFormData] = useState({
    fullName: '',
    missedClocks: '',
    reasonForMissedClock: '',
    date: new Date(),
    time: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    setTimeout(() => setIsLoading(false), 2000); // Simulate loading
    
    try {
      const response = await axios.post('/api/missed-clock', formData);

      if (response.status === 200) {
        toast.success('Referral email sent successfully!');
        console.log('Form submitted:', formData);
      } else {
        toast.error('An error occurred while sending the referral email.');
      }
    } catch (error) {
      toast.error(`Error: ${error.response?.data?.message || error.message}`);
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false); 
      // Stop loading spinner once the response is received

      router.refresh()
    }
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
        {isLoading && (
          <div
            className="loading-overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10,
            }}
          >
           
            <div style={{ marginLeft: '10px', color: 'white' }}>
            
            <ClipLoader
              size={100} // Customize size
              color={"#0000FF"} // Customize color (blue)
            />
            </div>
          </div>
        )}
        
       


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

                  <form onSubmit={handleSubmit} className="mt-5 register-form">
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
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
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
        <ToastContainer /> 
      </section>
    </Layout>
  );
};

export default missedClock;



