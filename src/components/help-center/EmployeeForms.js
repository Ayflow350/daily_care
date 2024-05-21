import React, { useRef, useState } from "react";
import Link from "next/link";
import { FaRegEnvelope, FaRegListAlt, FaDownload } from "react-icons/fa";
import { helpCenterFaqDetails, statement } from "../../utils/data";
import ApplyForm from "src/components/contact-us/ApplyForm";
import ApplyFormTwo from "src/components/contact-us/ApplyFormTwo";
import WorkHistory from "src/components/contact-us/WorkHistory";
import SignatureCanvas from "react-signature-canvas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Conflict from "src/components/statement/Conflict";
import Release from "src/components/statement/Release";

import ImageGrid from "src/components/ImageGrid";
import Confidential from "src/components/statement/Confidential";
import { Hr } from "@react-email/components";
const EmployeeForms = () => {
  return (
    <>
      <section className="support-content ptb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-4 d-none d-md-block d-lg-block">
              <div className="support-article-sidebar sticky-sidebar">
                <div
                  className="nav flex-column nav-pills support-article-tab bg-light rounded-custom p-5"
                  id="v-pills-support"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    data-bs-target="#support-tab-1"
                    data-bs-toggle="pill"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    DOWNLOAD AND UPLOAD DOCUMENTS
                  </button>
                  <button
                    className="nav-link"
                    data-bs-target="#support-tab-2"
                    data-bs-toggle="pill"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    UPLOAD DRIVERS LICENSE
                  </button>
                  <button
                    className="nav-link"
                    data-bs-target="#support-tab-3"
                    data-bs-toggle="pill"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    PERSONAL INFORMATION
                  </button>
                </div>
                <div className="bg-light p-5 mt-4 rounded-custom quick-support">
                  <Link href="/contact-us">
                    <a className="text-decoration-none text-muted d-flex align-items-center py-2">
                      <div className="quick-support-icon rounded-circle bg-success-soft me-3">
                        <FaRegListAlt />
                      </div>
                      <div className="contact-option-text">Contact Us</div>
                    </a>
                  </Link>
                  <Link href="mailto:info@themetags.com">
                    <a className="text-decoration-none text-muted d-flex align-items-center py-2">
                      <div className="quick-support-icon rounded-circle bg-primary-soft me-3">
                        <FaRegEnvelope />
                      </div>
                      <div className="contact-option-text">Send an Email</div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-8">
              <div className="tab-content" id="v-pills-supportContent">
                {/* Use conditional rendering to display either the FAQ or the form */}
                <div
                  className="tab-pane fade show active"
                  id="support-tab-1"
                  role="tabpanel"
                >
                  {/* Include your FAQ content here */}
                  <div className="support-article-wrap">
                    <ImageGrid />
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="support-tab-2"
                  role="tabpanel"
                >
                  {/* Display the form for the second tab */}
                  <div className="">
                    <ApplyForm />
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="support-tab-3"
                  role="tabpanel"
                >
                  {/* Include content for third tab if needed */}
                  <div className="support-article-wrap">
                    <ApplyFormTwo />
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="support-tab-4"
                  role="tabpanel"
                >
                  {/* Include content for fourth tab if needed */}
                  <div className="support-article-wrap">
                    <h2>PRESENT AND PAST WORK HISTORY</h2>
                    <p>Upload your completed application form here.</p>
                    {/* Form upload section */}
                    {/* <div className="mt-3">
                    
                      <div className="mb-3">
                        <input type="file" className="form-control" />
                      </div>
                      <button className="btn btn-secondary">
                        Submit Form
                      </button>
                    </div> */}
                    <WorkHistory />
                    <h2>WORK HISTORY</h2>
                    <p>
                      Give details of your work history with the most recent
                      listed first: ONE
                    </p>

                    <WorkHistory />
                    <h2>WORK HISTORY</h2>
                    <p>
                      Give details of your work history with the most recent
                      listed first: TWO
                    </p>

                    <WorkHistory />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="support-tab-5"
                  role="tabpanel"
                >
                  <ul className="support-article-list list-unstyled mt-4">
                    <h2>SUPPORTING STATEMENTS</h2>
                    {/* Render FAQ content dynamically */}
                    {statement.map((faq, index) => (
                      <div
                        key={index}
                        className={`tab-pane fade ${
                          index === 0 ? "show active" : ""
                        }`}
                        id={`support-tab-${index + 1}`}
                        role="tabpanel"
                      >
                        {/* Include your FAQ content here */}
                        <div className="support-article-wrap">
                          <ul className="support-article-list list-unstyled mt-4">
                            <ImageGrid />

                            <Hr />
                            <ImageGrid />
                          </ul>
                        </div>
                      </div>
                    ))}
                  </ul>
                  Signature of applicant: <input className="border-none" />{" "}
                  Date:
                  <input />
                </div>
                <div
                  className="tab-pane fade"
                  id="support-tab-6"
                  role="tabpanel"
                >
                  <Confidential />
                </div>
                <div
                  className="tab-pane fade"
                  id="support-tab-7"
                  role="tabpanel"
                >
                  {/* <ImageGrid /> */}
                  <Release />
                </div>
                <div
                  className="tab-pane fade"
                  id="support-tab-8"
                  role="tabpanel"
                >
                  {/* <ImageGrid /> */}
                  <Conflict />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeForms;
