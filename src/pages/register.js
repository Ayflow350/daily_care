import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';
import Layout from 'src/layout/Layout';
import Rating from 'src/components/common/Rating';
import { registerTestimonial, registerTestimonialTarget } from 'src/utils/data';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const router = useRouter();

  const handleServerResponse = async (response) => {
    const data = await response.json(); // Parse server response
    if (response.ok) {
      toast.success("Registration successful!"); // Display success message
  
      const redirectUrl = data.redirect; // Extract redirect URL
      if (redirectUrl) {
        router.push(redirectUrl); // Navigate to the redirect URL
      }
  
      reset(); // Reset the form after success
    } else {
      console.error("Error processing server response:", data.message);
      toast.error("Server error: " + data.message); // Display error message
    }
  };
  
  const onSubmit = async (formData) => {
    setIsLoading(true); // Show loading spinner
    try {
      const response = await fetch(`https://daily-care-6y11.vercel/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      await handleServerResponse(response); // Handle server response
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Submission error: " + error.message); // Handle errors
    } finally {
      setIsLoading(false); // Hide loading spinner
    }
  };
  
  
  return (
    <Layout title="Sign Up" desc="This is the sign-up page">
      <section
        className="sign-up-in-section bg-dark ptb-60"
        style={{ background: "url('/page-header-bg.svg') no-repeat right bottom" }}
      >
        <div className="container position-relative">
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
              size={100} 
              color={"#0000FF"} 
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
                            <img
                              src={testimonialTarget.image}
                              className="img-fluid rounded-circle"
                              width="60"
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
                    <img
                      src="/logo-color.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </a>
                  <h1 className="h3">Create an Account</h1>
                  <p className="text-muted">
                    Get started with your free account today. No credit card
                    needed and no setup fees.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="mt-5 register-form">
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="name" className="mb-1">
                          Name <span className="text-danger">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            {...register("name", { required: true })}
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            id="name"
                            required
                            aria-label="name"
                          />
                           {errors.name && (
          <small className="text-red-600 text-sm ">
            This field is required
          </small>
        )}
                        </div>
                      </div>
                      <div className="col-sm-6 ">
                        <label htmlFor="email" className="mb-1">
                          Email <span className="text-danger">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            {...register("email", { required: true })}
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            id="email"
                            required
                            aria-label="email"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="company" className="mb-1">
                          Phone
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone"
                            id="phone"
                            aria-label="phone"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="password" className="mb-1">
                          Password <span className="text-danger">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                             {...register("password", { required: true })}
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            id="password"
                            required
                            aria-label="Password"
                          />
                           {errors.password && (
          <small className="text-red-600 text-sm ">
            This field is required
          </small>
        )}
                        </div>
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

                     
     
        <button
          type="submit"
          className="btn btn-primary mt-4 d-block w-100"
        >
          Sign Up
        </button>
</div>
                <p className="text-center text-muted mt-4 mb-0 fw-medium font-monospace">
                      Already have an account?{' '}
                      <Link href="/login">
                        <a className="text-decoration-none">Sign in</a>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar
  closeOnClick
  pauseOnHover
  draggable
  pauseOnFocusLoss
/>
      </section>
    </Layout>
  );
};

export default Register;


