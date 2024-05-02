import React from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Layout from "src/layout/Layout";

const Login = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.ok) {
      router.push("/Application"); // Redirect to a protected route
    } else {
      console.error("Sign-in failed:", result.error);
      // Optionally, you can display an error message to the user
    }
  };

  return (
    <Layout title="Login" desc="This is a login page">
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
                      >
                        Submit
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
        </div>
      </section>
    </Layout>
  );
};

export default Login;

