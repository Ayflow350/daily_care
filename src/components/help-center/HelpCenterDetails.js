import React from 'react';
import Link from 'next/link';
import { FaRegEnvelope, FaRegListAlt, FaDownload } from 'react-icons/fa';

import { helpCenterFaqDetails } from '../../utils/data';
import ApplyForm from '@components/contact-us/ApplyForm';

const HelpCenterDetails = () => {
  // Define your form component for the second tab
  const ApplicationForm = () => {
    // Implement your form component here
    return (
      <form>
        {/* Your form fields go here */}
      </form>
    );
  };

  return (
    <>
      <section className="support-content ptb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-4 d-none d-md-block d-lg-block">
              <div className="support-article-sidebar sticky-sidebar">
                <div className="nav flex-column nav-pills support-article-tab bg-light rounded-custom p-5" id="v-pills-support" role="tablist" aria-orientation="vertical">
                  <button className="nav-link active" data-bs-target="#support-tab-1" data-bs-toggle="pill" type="button" role="tab" aria-selected="true">
                    INSTRUCTIONS TO APPLICATION
                  </button>
                  <button className="nav-link" data-bs-target="#support-tab-2" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                    APPLICATION FOR EMPLOYMENT
                  </button>
                  <button className="nav-link" data-bs-target="#support-tab-3" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                    DOWNLOAD APPLICATION FORM 
                  </button>
                  <button className="nav-link" data-bs-target="#support-tab-4" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                 UPLOAD FILLED APPLICATION
                  </button>
                </div>
                <div className="bg-light p-5 mt-4 rounded-custom quick-support">
                  <Link href="/contact-us">
                    <a className="text-decoration-none text-muted d-flex align-items-center py-2">
                      <div className="quick-support-icon rounded-circle bg-success-soft me-3">
                        <FaRegListAlt />
                      </div>
                      <div className="contact-option-text">
                        Contact Us
                      </div>
                    </a>
                  </Link>
                  <Link href="mailto:info@themetags.com">
                    <a className="text-decoration-none text-muted d-flex align-items-center py-2">
                      <div className="quick-support-icon rounded-circle bg-primary-soft me-3">
                        <FaRegEnvelope />
                      </div>
                      <div className="contact-option-text">
                        Send an Email
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-8">
              <div className="tab-content" id="v-pills-supportContent">
                {/* Use conditional rendering to display either the FAQ or the form */}
                <div className="tab-pane fade show active" id="support-tab-1" role="tabpanel">
                  {/* Include your FAQ content here */}
                  <div className="support-article-wrap">
                    <h2>INSTRUCTIONS TO APPLICATION</h2>
                    <ul className="support-article-list list-unstyled mt-4">
                      {/* Render FAQ content dynamically */}
                      {helpCenterFaqDetails.map((faq, index) => (
                        <div key={index} className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} id={`support-tab-${index + 1}`} role="tabpanel">
                          {/* Include your FAQ content here */}
                          <div className="support-article-wrap">
                            <ul className="support-article-list list-unstyled mt-4">
                              {faq.listItem.map((item, i) => (
                                <li key={i} className="py-4 border-top border-light">
                                  <a href={item.href} className="text-decoration-none d-block text-muted">
                                    <h3 className="h5 support-article-title">{item.header}</h3>
                                    <p>{item.desc}</p>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="tab-pane fade" id="support-tab-2" role="tabpanel">
                  {/* Display the form for the second tab */}
                  <div className="">
                    <ApplyForm/>
                  </div>
                </div>
                
                <div className="tab-pane fade" id="support-tab-3" role="tabpanel">
                  {/* Include content for third tab if needed */}
                  <div className="support-article-wrap">
                    <h2>APPLICATION FORM 2</h2>
                    <p>Download the form below for Application Form 2. After downloading, fill it out online and upload it. Thank you.</p>

                    {/* Download form button */}
                    <div className="action-btns text-end me-5 col-lg-2 me-lg-0 d-none d-md-block d-lg-block">
                      <a
                        className="btn btn-primary"
                        href="/Application.docx"
                        download="Application.docx"
                      >
                        <FaDownload className="me-2" /> Download Form
                      </a>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="support-tab-4" role="tabpanel">
                  {/* Include content for fourth tab if needed */}
                  <div className="support-article-wrap">
                    <h2>UPLOAD FILLED APPLICATION</h2>
                    <p>Upload your completed application form here.</p>
                    {/* Form upload section */}
                    <div className="mt-3">
                    
                      <div className="mb-3">
                        <input type="file" className="form-control" />
                      </div>
                      <button className="btn btn-secondary">
                        Submit Form
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpCenterDetails;










