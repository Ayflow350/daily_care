"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// Use this to get the router
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Link from "next/link";
import Layout from "src/layout/Layout";

const PasswordReset = () => {
  const router = useRouter(); // Get the router object
  const [isDisabled, setIsDisabled] = useState(true);
  const [countdown, setCountdown] = useState(10);
  const [otp, setOtp] = useState("");

  // Get the pathname from the router
  const pathname = router.asPath; // The current full path including query strings

  // Extract and decode the email from the pathname
  const pathSegments = pathname.split("/");
  const encodedEmail = pathSegments[pathSegments.length - 1]; // Last segment should be the email
  const email = decodeURIComponent(encodedEmail); // Decode the email address
  console.log(email);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else {
      setIsDisabled(false);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://new-backend-xfge.onrender.com/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email, // Include the email extracted from the pathname
            otp,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setTimeout(() => {
          router.push("/login"); // Use the router to navigate
        }, 2000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error during OTP verification: " + error.message);
    }
  };

  const handleResendLink = async () => {
    try {
      const response = await fetch("/api/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email, // Include the extracted email
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setCountdown(20);
        setIsDisabled(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error resending OTP: " + error.message);
    }
  };

  return (
    <Layout title="Password Reset" desc="This is the password reset page">
      <section
        className="sign-up-in-section bg-dark ptb-60"
        style={{
          background: "url('/page-header-bg.svg') no-repeat right bottom",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-8 col-12">
              <Link href="/">
                <a className="mb-4 d-block text-center">
                  <Image
                    width={150}
                    height={70}
                    src="/vgh.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </Link>
              <div className="register-wrap p-5 bg-light shadow rounded-custom">
                <h1 className="fw-bold h3">Verify Your Account</h1>
                <p className="text-muted">
                  Enter your OTP to verify your account.
                </p>

                <form onSubmit={handleSubmit} className="mt-5 register-form">
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="otp" className="mb-1">
                        OTP <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your OTP"
                          id="otp"
                          aria-label="otp"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary mt-3 d-block w-100"
                        disabled={isDisabled}
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                  <p className="font-monospace fw-medium text-center mt-3 pt-4 mb-0">
                    <span>Did not receive the OTP?</span>
                    <button
                      className="border-none"
                      disabled={isDisabled}
                      onClick={handleResendLink}
                    >
                      {isDisabled
                        ? `Resend OTP in ${countdown}s`
                        : "Resend OTP"}
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </section>
    </Layout>
  );
};

export default PasswordReset;
