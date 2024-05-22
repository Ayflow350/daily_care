import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Layout from "src/layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setIsLoading(true); // Show loading spinner

    try {
      const response = await fetch(
        "https://new-backend-xfge.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      setIsLoading(false); // Hide loading spinner

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      if (data.success) {
        toast.success("Login successful!");

        // Store the token in localStorage
        localStorage.setItem("token", data.token);

        setTimeout(() => {
          router.push("/applications"); // Redirect to a protected route
        }, 2000); // Adjust the delay as needed
      } else {
        toast.error("Sign-in failed: " + (data.message || "Login failed")); // Display error message
      }
    } catch (err) {
      setIsLoading(false); // Ensure spinner is hidden on error
      toast.error("Sign-in failed: " + err.message); // Display error message
    }
  };

  return (
    <Layout title="Login" desc="This is a login page">
      <section
        className="sign-up-in-section bg-dark ptb-60"
        style={{
          background: "url('/page-header-bg.svg') no-repeat right bottom",
        }}
      >
        <div className="container position-relative">
          {isLoading && (
            <div
              className="loading-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 10,
              }}
            >
              <ClipLoader size={100} color={"#0000FF"} />
            </div>
          )}
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-8 col-12">
              <Link href="/">
                <a className="mb-5 d-xl-block d-lg-block text-center">
                  <Image
                    width={170}
                    height={80}
                    src="/vgh.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </Link>
              <div className="register-wrap p-5 bg-light shadow rounded-custom">
                <h1 className="h3">Welcome Back!</h1>
                <p className="text-muted">
                  Please log in to access your account.
                </p>

                <form onSubmit={handleSubmit} className="mt-4 register-form">
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="email" className="mb-1">
                        Email <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          id="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="password" className="mb-1">
                        Password <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          id="password"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary mt-3 d-block w-100"
                        disabled={isLoading}
                      >
                        {isLoading ? "Loading..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </form>

                <p className="font-monospace fw-medium text-center text-muted mt-3 pt-4 mb-0">
                  Don't have an account?{" "}
                  <Link href="/register">
                    <a className="text-decoration-none">Sign up Today</a>
                  </Link>
                  <br />
                  <Link href="/password-reset">
                    <a className="text-decoration-none">Forgot password?</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </section>
    </Layout>
  );
};

export default Login;
