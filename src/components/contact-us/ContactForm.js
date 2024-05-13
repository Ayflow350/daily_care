import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';

const ContactForm = () => {

  const customToastStyle = {
    backgroundColor: '#007AFF', // Blue background
    color: 'white',          // White text
  };
  const [formData, setFormData] = useState({
    firstName: '',
    address: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
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
    } finally {
      setIsLoading(false); // Stop loading spinner once the response is received
    }
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

      {isLoading && (
          <div
            className="loading-overlay"
            style={{
              position: 'fixed',
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
        <div className="row justify-content-lg-between align-items-center">
          <div className=" col-md-8">
            <div className="section-heading">
              <h2>Do you have more questions about our staff and services? </h2>
              <p>
              Feel free to send us a message using the form below. We will get back to you as soon as possible.




              </p>
            </div>
            <form  className="register-form" onSubmit={handleSubmit}>
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

                
                <div className="col-12">
                  <label htmlFor="text" className="mb-1">
                  ADDRESS <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                     className="form-control"
                      type="text"
                      id='address' name='address' placeholder='Enter Address' onChange={handleInputChange}
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
    <ToastContainer   toastStyle={customToastStyle} />
   </>
  );
};

export default ContactForm;


