import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import Layout from "src/layout/Layout";
import Rating from "src/components/common/Rating";
import { registerTestimonial, registerTestimonialTarget } from "src/utils/data";
const baseUrl = `https://daily-care-6y11.vercel.app/`;

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleServerResponse = async (response) => {
    try {
      if (response.ok) {
        const data = await response.json();
        toast.success("Registration successful!");
        const redirectUrl = data.redirect;
        if (redirectUrl) {
          router.push(redirectUrl);
        }
        reset();
      } else {
        const errorData = await response.json();
        console.error("Error processing server response:", errorData.message);
        toast.error("Server error: " + errorData.message);
      }
    } catch (error) {
      console.error("Error parsing server response:", error);
      toast.error("Error parsing server response");
    }
  };

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      await handleServerResponse(response);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Submission error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout title="Sign Up" desc="This is the sign-up page">
      <section className="sign-up-in-section bg-dark ptb-60">
        <div className="container position-relative">
          {isLoading && (
            <div className="loading-overlay">
              <div className="loading-content">
                <ClipLoader size={100} color={"#0000FF"} />
              </div>
            </div>
          )}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="pricing-content-wrap bg-custom-light rounded-custom shadow-lg">
                {/* Left Content */}
                <div className="price-feature-col pricing-feature-info text-white left-radius p-5 order-1 order-lg-0">
                  {/* Testimonials */}
                  <div className="customer-testimonial-wrap mt-60">
                    {/* Testimonials Content */}
                    <div className="tab-content" id="nav-tabContent">
                      {registerTestimonial.map((testimonial, i) => (
                        <div
                          key={i}
                          className={`tab-pane fade ${testimonial.active}`}
                          id={testimonial.target}
                          role="tabpanel"
                        >
                          {/* Testimonial Content */}
                          <div className="testimonial-tab-content mb-4">
                            <Rating />
                            <blockquote>
                              <h5>{testimonial.header}</h5>
                              {testimonial.info}
                            </blockquote>
                            <div className="author-info mt-4">
                              <h6>{testimonial.name}</h6>
                              <span className="small">{testimonial.title}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Testimonials Navigation */}
                    <ul
                      className="nav testimonial-tab-list mt-5"
                      id="nav-tab"
                      role="tablist"
                    >
                      {registerTestimonialTarget.map((testimonialTarget, i) => (
                        <li key={i} className="nav-item">
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
                {/* Right Content */}
                <div className="price-feature-col pricing-action-info p-5 right-radius bg-light order-0 order-lg-1">
                  <h1 className="h3">Create an Account</h1>
                  <p className="text-muted">
                    Get started with your free account today.
                  </p>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-5 register-form"
                  >
                    {/* Form Inputs */}
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="name" className="mb-1">
                          Name <span className="text-danger">*</span>
                        </label>
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
                          <small className="text-red-600 text-sm">
                            This field is required
                          </small>
                        )}
                      </div>
                      {/* Other Form Fields */}
                      {/* Submit Button */}

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
                            I have read and agree to the{" "}
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
                    {/* Link to Login */}
                    <p className="text-center text-muted mt-4 mb-0 fw-medium font-monospace">
                      Already have an account?{" "}
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
      </section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </Layout>
  );
};

export default Register;
