import React from 'react';
import Link from 'next/link';
import { BiCommentDetail } from 'react-icons/bi';
import { FaRegEnvelope, FaRegListAlt } from 'react-icons/fa';

const HelpCenterSingleDetails = () => {
  return (
    <section className="support-content ptb-120">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-4 d-none d-md-block d-lg-block">
            <div className="support-article-sidebar sticky-sidebar">
              <Link href="/help-center">
                <a className="btn btn-primary mb-4 btn-sm">
                  <i className="far fa-angle-left me-2"></i> Go Back
                </a>
              </Link>
              <div className="nav flex-column nav-pills support-article-tab bg-light rounded-custom p-5">
                <h5>Related Support Articles</h5>
                <Link href="/help-center-single">
                  <a className="text-muted text-decoration-none py-2 d-block">
                    Can retailers opt-out of participation at any time?
                  </a>
                </Link>
                <Link href="/help-center-single">
                  <a className="text-muted text-decoration-none py-2 d-block">
                    How long does enforcement take after a MAP violation attempt
                    is made?
                  </a>
                </Link>
                <Link href="/help-center-single">
                  <a className="text-muted text-decoration-none py-2 d-block">
                    After retailer acceptance, how long does it take for
                    enforcement href occur?
                  </a>
                </Link>
                <Link href="/help-center-single">
                  <a className="text-muted text-decoration-none py-2 d-block">
                    What is the monthly cost of your app?
                  </a>
                </Link>
                <Link href="/help-center-single">
                  <a className="text-muted text-decoration-none py-2 d-block">
                    Do you offer refunds for the subscriptions?
                  </a>
                </Link>
                <Link href="/help-center-single">
                  <a className="text-muted text-decoration-none py-2 d-block">
                    Are notifications sent when MAP violation attempts occur?
                  </a>
                </Link>
              </div>
              <div className="bg-light p-5 mt-4 rounded-custom quick-support">
                <Link href="/contact-us">
                  <a className="text-decoration-none text-muted d-flex align-items-center py-2">
                    <div className="quick-support-icon rounded-circle bg-success-soft me-3">
                      <i className="far text-success">
                        <FaRegListAlt />
                      </i>
                    </div>
                    <div className="contact-option-text">
                      Quick Support Form
                    </div>
                  </a>
                </Link>
                <Link href="mailto:info@themetags.com">
                  <a className="text-decoration-none text-muted d-flex align-items-center py-2">
                    <div className="quick-support-icon rounded-circle bg-primary-soft me-3">
                      <i className="far text-primary">
                        <FaRegEnvelope />
                      </i>
                    </div>
                    <div className="contact-option-text">
                      info@themetags.com
                    </div>
                  </a>
                </Link>
                <Link href="#!">
                  <a className="text-decoration-none text-muted d-flex align-items-center py-2">
                    <div className="quick-support-icon rounded-circle bg-danger-soft me-3">
                      <i className="far text-danger">
                        <BiCommentDetail />
                      </i>
                    </div>
                    <div className="contact-option-text">Live Support Chat</div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HelpCenterSingleDetails;
