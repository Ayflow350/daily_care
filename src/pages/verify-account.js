'use client'
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Link from 'next/link';
import Layout from 'src/layout/Layout';

const PasswordReset = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [countdown, setCountdown] = useState(10);
  const [otp, setOtp] = useState('');

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
      const response = await fetch('api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'clintonharry934@gmail.com',
          otp,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setTimeout(() => {
          window.location.href = '/sign-in';
        }, 2000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Error during OTP verification: ' + error.message);
    }
  };

  const handleResendLink = async () => {
    try {
      const response = await fetch('api/resend-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'adebayofolasade631@gmail.com',
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
      toast.error('Error resending OTP: ' + error.message);
    }
  };
  return (
    <Layout title="Password Reset" desc="This is password reset page">
      <section
        className="sign-up-in-section bg-dark ptb-60"
        style={{
          background: "url('/page-header-bg.svg')no-repeat right bottom",
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
                  Don&apos;t worry. Type your email and we will send a password
                  recovery link to your email..
                </p>

                <form onSubmit={handleSubmit} className="mt-5 register-form">
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="email" className="mb-1">
                         OTP <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your otp"
                          id="otp"
                          aria-label="email"
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
                    <div href="/login">
                      <a className="text-decoration-none">Did not receive it?{' '}</a>

                      <button
                  className="border-none"
                  disabled={isDisabled}
                  onClick={handleResendLink}
                >
                  {isDisabled ? `Resend OTP in ${countdown}s` : 'Resend OTP'}
                </button>
                    </div>
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