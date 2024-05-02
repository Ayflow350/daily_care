import React from 'react';
import Link from 'next/link';
import { FaRegEnvelope, FaRegListAlt, FaDownload } from 'react-icons/fa';

import { helpCenterFaqDetails, statements } from '../../utils/data';
import ApplyForm from 'src/components/contact-us/ApplyForm';
import ApplyFormTwo from 'src/components/contact-us/ApplyFormTwo';
import WorkHistory from 'src/components/contact-us/WorkHistory';

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
                  PERSONAL INFORMATION
                  </button>
                  <button className="nav-link" data-bs-target="#support-tab-4" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
               
                WORK HISTORY
                  </button>

                  <button className="nav-link" data-bs-target="#support-tab-5" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                  SUPPORTING STATEMENTS
                  </button>

                  <button className="nav-link" data-bs-target="#support-tab-6" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                  CONFIDENTIAL AGREEMENT
                  </button>
                  <button className="nav-link" data-bs-target="#support-tab-7" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                  RELEASE OF INFORMATION
                  </button>


                  <button className="nav-link" data-bs-target="#support-tab-8" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                
                  CONFLICT OF INTEREST
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
                

                    {/* Download form button */}
                    {/* <div className="action-btns text-end me-5 col-lg-2 me-lg-0 d-none d-md-block d-lg-block">
                      <a
                        className="btn btn-primary"
                        href="/Application.docx"
                        download="Application.docx"
                      >
                        <FaDownload className="me-2" /> Download Form
                      </a>
                    </div> */}

<ApplyFormTwo/>
                  </div>
                </div>

                <div className="tab-pane fade" id="support-tab-4" role="tabpanel">
                  {/* Include content for fourth tab if needed */}
                  <div className="support-article-wrap">
                    <h2>WORK HISTORY</h2>
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
                   <WorkHistory/>

                   <WorkHistory/>

                   <WorkHistory/>
                  </div>

                  
                </div>
                <div  className="tab-pane fade" id="support-tab-5" role="tabpanel">
                <ul className="support-article-list list-unstyled mt-4">
                <h2>SUPPORTING STATEMENTS</h2>
                      {/* Render FAQ content dynamically */}
                      {statements.map((faq, index) => (
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
                    Signature of applicant: <input className='border-none'/> Date:<input/> 
                  </div>
                  <div  className="tab-pane fade" id="support-tab-6" role="tabpanel">
              <div className=" col-sm-12 ">
            <div className="support-article-wrap ">
              <h1 className=" mb-4 fw-bold">
              READ CAREFULLY AND SIGN BELOW IF YOU AGREE TO THESE TERMS OF EMPLOYMENT
              </h1>
              <h3 className="h5"></h3>
              <p>
              I agree that except at the request and for the benefit of Daily Care Support Services, Inc I will not disclose to
anyone or use for my own purposes any of Daily Care Support Services, Inc confidential or proprietary
information, either during or after my employment. I understand and agree that Daily Care Support Services, Inc
bidding, costs, pricing and marketing information and techniques, customer names and information, and
employee name and information are confidential and proprietary to Daily Care Support Services, Inc
              </p>
              <p>
              I certify that this application contains no willful misrepresentation or falsifications and that this information
given by me is true and complete to the best of my knowledge and belief. I authorized Daily Care Support
Services, Inc to contact all sources to verify the information on this application. I understand that any
falsification, misrepresentation, or fraudulent information provided by me in connection with my
application for employment is sufficient grounds for withdrawal of an employment offer or immediate
discharge.
              </p>

            
              <p>
              I authorized and requested my former employers, references, and educational institutions which have
information about me, to give Daily Care Support Services, Inc all information and opinions about me in their
possession and which may lawfully be disclosed. I hereby waive written notice of such release of information
and opinions, and release such former employers, references, and educational institutions from any liability or
claim relating to such release of information and opinions. I also authorized and request federal, state, and
local governmental agencies to release Daily Care Support Services, Inc any information requested,
concerning any criminal convictions on my record. A photocopy of this signed authorization and waiver shall
be valid as an original.
              </p>
              <p>
              Signature of applicant: <input className='border-none'/> Date:<input/> 
              </p>
             </div>
            
            </div>
            </div>
            <div  className="tab-pane fade" id="support-tab-7" role="tabpanel">
            <div className=" col-sm-12 ">
            <div className="support-article-wrap ">
              <h1 className=" mb-4 fw-bold">
              RELEASE OF INFORMATION
              </h1>
              <h3 className="h5"></h3>
              <p>
              I hereby authorized all prior employers, schools, credit bureaus, social security Administration. Law
enforcement agencies and investigative agencies to give Daily Care Support Services, Inc all information
concerning my previous employment and any pertinent information they may have personal or otherwise,
concerning my qualifications for the position applied for. I release to Daily Care Support Services, Inc and all
its employees form all liability for any damage that may result from furnishing information to Daily Care
Support Services, Inc I also release to Daily Care Support Services, Inc and all its employees from all liability
for any damage that may result from reliance on the information furnished. I understand that if a consumer
investigative report is requested, I have the right under the Fair Credit Reporting Act to request in writing,
within a reasonable time, a complete and accurate disclosure of the nature and scope of the investigation.
This written request should be addressed to the location where this application is filed.
              </p>
            

            
             
              <p>
              Signature of applicant: <input className='border-none'/> Date:<input/> 
              </p>
             </div>
            
            </div>
            
              </div>
              <div  className="tab-pane fade" id="support-tab-8" role="tabpanel">
            <div className=" col-sm-12 ">
            <div className="support-article-wrap ">
              <h1 className=" mb-4 fw-bold">
              CONFLICT OF INTEREST
              </h1>
              <h3 className="h5"></h3>
              <p>
              I acknowledge that I have read the company policy statement concerning conflict of interest and I
hereby declare that neither I, nor any other business to which I may be associated, nor, to the best
of my knowledge, any member of my immediate family has any conflict between our personal
affairs or interests and the proper performance of my responsibilities for the company that would
constitute a violation of that company policy. If I terminate my employment with Daily Care
Support Services, I will not work for any patient I have worked for with Daily Care Support Services
for a period of two years or pay a fine of $2500.00. All assignments are considered Per Diem, there
are no full or part time positions with Daily Care Support Services, Inc. due to the demands of the
patients, and change in patient’s condition and needs. Furthermore, I declare that during my
employment, I shall continue to maintain my affairs in accordance with the requirements of said
policy.
              </p>
            

            
             
              <p>
              Signature of applicant: <input className='border-none'/> Date:<input/> 
              </p>
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










