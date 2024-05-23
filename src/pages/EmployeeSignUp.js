// /* eslint-disable @next/next/no-img-element */
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import Layout from "src/layout/Layout";
// import Rating from "src/components/common/Rating";
// import { registerTestimonial, registerTestimonialTarget } from "src/utils/data";

// const Register = () => {
//   const router = useRouter();
//   const bee = "EMPLOYEE";
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const [loading, setLoading] = useState(false);

//   const handleServerResponse = async (response) => {
//     try {
//       if (response.ok) {
//         const data = await response.json(); // Parse server response
//         toast.success("Registration successful!"); // Display success message
//         const redirectUrl = data.redirect; // Extract redirect URL
//         if (redirectUrl) {
//           router.push(redirectUrl); // Navigate to the redirect URL
//         }
//         reset(); // Reset the form after success
//       } else {
//         const errorData = await response.json(); // Parse error response
//         console.error("Error processing server response:", errorData.message);
//         toast.error("Server error: " + errorData.message); // Display error message
//       }
//     } catch (error) {
//       console.error("Error parsing server response:", error);
//       toast.error("Error parsing server response"); // Display error message
//     }
//   };

//   async function onSubmit(data) {
//     try {
//       data.role = bee;
//       console.log(data);
//       setLoading(true);

//       const response = await fetch(`http://localhost:8080/users`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const responseData = await response.json();

//       if (response.ok) {
//         setLoading(false);
//         toast.success("User Created Successfully");
//         reset();
//         await handleServerResponse(response); // Handle server response
//       } else {
//         setLoading(false);
//         if (response.status === 409) {
//           setEmailErr("User with this Email already exists");
//           toast.error("User with this Email already exists");
//         } else {
//           // Handle other errors
//           console.error("Server Error:", responseData.message);
//           toast.error("Oops Something Went wrong");
//         }
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error("Network Error:", error);
//       toast.error("Something Went wrong, Please Try Again");
//     }
//   }

//   return (
//     <Layout title="Sign Up" desc="This is sign up page">
//       <section
//         className="sign-up-in-section bg-dark ptb-60"
//         style={{
//           background: "url('/page-header-bg.svg')no-repeat right bottom",
//         }}
//       >
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-10 col-12">
//               <div className="pricing-content-wrap bg-custom-light rounded-custom shadow-lg">
//                 <div className="price-feature-col pricing-feature-info text-white left-radius p-5 order-1 order-lg-0">
//                   <Link href="/">
//                     <a className="mb-5 d-none d-xl-block d-lg-block">
//                       <Image
//                         width={250}
//                         height={100}
//                         src="/vgh.png"
//                         alt="logo"
//                         className="img-fluid"
//                       />
//                     </a>
//                   </Link>
//                   <div className="customer-testimonial-wrap mt-60">
//                     <div className="tab-content" id="nav-tabContent">
//                       {registerTestimonial.map((testimonial, i) => (
//                         <div
//                           key={i + 1}
//                           className={`tab-pane fade ${testimonial.active}`}
//                           id={testimonial.target}
//                           role="tabpanel"
//                         >
//                           <div className="testimonial-tab-content mb-4">
//                             <div className="mb-2">
//                               <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
//                                 <li className="list-inline-item">
//                                   <Rating />
//                                 </li>
//                               </ul>
//                             </div>
//                             <blockquote>
//                               <h5>{testimonial.header} </h5>
//                               {testimonial.info}
//                             </blockquote>
//                             <div className="author-info mt-4">
//                               <h6 className="mb-0">{testimonial.name} </h6>
//                               <span className="small">
//                                 {testimonial.title}{" "}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                     <ul
//                       className="nav testimonial-tab-list mt-5"
//                       id="nav-tab"
//                       role="tablist"
//                     >
//                       {registerTestimonialTarget.map((testimonialTarget, i) => (
//                         <li key={i + 1} className="nav-item">
//                           <a
//                             className={testimonialTarget.active}
//                             href={testimonialTarget.target}
//                             data-bs-toggle="tab"
//                             data-bs-target={testimonialTarget.target}
//                             role="tab"
//                             aria-selected="true"
//                           >
//                             <img
//                               src={testimonialTarget.image}
//                               className="img-fluid rounded-circle"
//                               width="60"
//                               alt="user"
//                             />
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="price-feature-col pricing-action-info p-5 right-radius bg-light order-0 order-lg-1">
//                   <a
//                     href="index.html"
//                     className="mb-5 d-block d-xl-none d-lg-none"
//                   >
//                     <img
//                       src="/logo-color.png"
//                       alt="logo"
//                       className="img-fluid"
//                     />
//                   </a>
//                   <h1 className="h3">Create an Account</h1>
//                   <p className="text-muted">
//                     Get started with your free account today. No credit card
//                     needed and no setup fees.
//                   </p>

//                   <form
//                     onSubmit={handleSubmit(onSubmit)}
//                     className="mt-5 register-form"
//                   >
//                     <div className="row">
//                       <div className="col-sm-6">
//                         <label htmlFor="name" className="mb-1">
//                           Name <span className="text-danger">*</span>
//                         </label>
//                         <div className="input-group mb-3">
//                           <input
//                             {...register("name", { required: true })}
//                             type="text"
//                             className="form-control"
//                             placeholder="Name"
//                             id="name"
//                             required
//                             aria-label="name"
//                           />
//                           {errors.name && (
//                             <small className="text-red-600 text-sm ">
//                               This field is required
//                             </small>
//                           )}
//                         </div>
//                       </div>
//                       <div className="col-sm-6 ">
//                         <label htmlFor="email" className="mb-1">
//                           Email <span className="text-danger">*</span>
//                         </label>
//                         <div className="input-group mb-3">
//                           <input
//                             {...register("email", { required: true })}
//                             type="email"
//                             className="form-control"
//                             placeholder="Email"
//                             id="email"
//                             required
//                             aria-label="email"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-sm-12">
//                         <label htmlFor="company" className="mb-1">
//                           Phone
//                         </label>
//                         <div className="input-group mb-3">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Phone"
//                             id="phone"
//                             aria-label="phone"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-sm-12">
//                         <label htmlFor="password" className="mb-1">
//                           Password <span className="text-danger">*</span>
//                         </label>
//                         <div className="input-group mb-3">
//                           <input
//                             {...register("password", { required: true })}
//                             type="password"
//                             className="form-control"
//                             placeholder="Password"
//                             id="password"
//                             required
//                             aria-label="Password"
//                           />
//                           {errors.password && (
//                             <small className="text-red-600 text-sm ">
//                               This field is required
//                             </small>
//                           )}
//                         </div>
//                       </div>
//                       <div className="col-12">
//                         <div className="form-check d-flex">
//                           <input
//                             className="form-check-input me-2"
//                             type="checkbox"
//                             value=""
//                             id="flexCheckChecked"
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor="flexCheckChecked"
//                           >
//                             I have read and agree to the{" "}
//                             <a href="#" className="text-decoration-none">
//                               Terms & Conditions
//                             </a>
//                           </label>
//                         </div>
//                       </div>

//                       {loading ? (
//                         <button
//                           disabled
//                           type="button"
//                           className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
//                         >
//                           <svg
//                             aria-hidden="true"
//                             role="status"
//                             className="inline w-4 h-4 mr-3 text-white animate-spin"
//                             viewBox="0 0 100 101"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                               fill="#E5E7EB"
//                             />
//                             <path
//                               d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                               fill="currentColor"
//                             />
//                           </svg>
//                           Creating please wait...
//                         </button>
//                       ) : (
//                         <button
//                           type="submit"
//                           className="btn btn-primary mt-4 d-block w-100"
//                         >
//                           Sign Up
//                         </button>
//                       )}
//                     </div>

//                     <p className="text-center text-muted mt-4 mb-0 fw-medium font-monospace">
//                       Already have an account?{" "}
//                       <Link href="/login">
//                         <a className="text-decoration-none">Sign in</a>
//                       </Link>
//                     </p>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Register;
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
const baseUrl = process.env.API_URL;

const Register = () => {
  const bee = "EMPLOYEE";
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const handleServerResponse = async (response) => {
    try {
      if (response.ok) {
        const data = await response.json(); // Parse server response
        toast.success("Registration successful!"); // Display success message
        const redirectUrl = data.redirect; // Extract redirect URL
        if (redirectUrl) {
          router.push(redirectUrl); // Navigate to the redirect URL
        }
        reset(); // Reset the form after success
      } else {
        const errorData = await response.json(); // Parse error response
        console.error("Error processing server response:", errorData.message);
        toast.error("Server error: " + errorData.message); // Display error message
      }
    } catch (error) {
      console.error("Error parsing server response:", error);
      toast.error("Error parsing server response"); // Display error message
    }
  };

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      formData.role = bee; // Ensure the role is set to EMPLOYEE
      const response = await fetch(
        `https://new-backend-xfge.onrender.com/Users`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

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
              <div style={{ marginLeft: "10px", color: "white" }}>
                <ClipLoader size={100} color={"#0000FF"} />
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
                                {testimonial.title}{" "}
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
                    Get started with your free account today.
                  </p>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-5 register-form"
                  >
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
