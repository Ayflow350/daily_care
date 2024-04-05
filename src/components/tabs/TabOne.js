/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import SectionTitle from '../common/SectionTitle';

const TabOne = () => {
  return (
    <section className="feature-tab-section ptb-120 bg-light">
      <div className="container">
        <div className="row justify-content-center align-content-center">
          <div className="col-md-10 col-lg-6">
          <SectionTitle
              subtitle="Empowering Individuals"
              title="Our Vision & Mission"
              description="Daily Care Support Services is committed to empowering individuals"
              centerAlign
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul
              className="nav justify-content-center feature-tab-list-2 mb-0"
              id="nav-tab"
              role="tablist"
            >

<li className="nav-item">
                <Link href="#!">
                  <a
                    className="nav-link active"
                    to="#tab-1"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-1"
                    role="tab"
                    aria-selected="false"
                  >
                  Our Mission
                  </a>
                </Link>
              </li>
             
              <li className="nav-item">
                <Link href="#!">
                  <a
                    className="nav-link"
                    to="#tab-2"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-2"
                    role="tab"
                    aria-selected="false"
                  >
                    Our Vision
                  </a>
                </Link>
              </li>

             
             
            </ul>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade pt-60 active show"
                id="tab-1"
                role="tabpanel"
              >
                <div className="row justify-content-center align-items-center justify-content-around">
                  <div className="col-lg-5">
                    <div className="feature-tab-info">
                      <h3>Our Mission</h3>
                      <p>
                      Our mission at Daily Care Support Services is to provide customized services in a supportive environment to individuals with special needs. {' '}
                      </p>
                      <p>
                      Daily Care Support Services proposes to serve individuals and their families by fostering an increase in community collaboration through education, training, and advocacy.
                      </p>
                    
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <img
                      src="/eddy.png"
                      alt="feature tab"
                      className="img-fluid mt-4 mt-lg-0 mt-xl-0"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade pt-60" id="tab-2" role="tabpanel">
                <div className="row justify-content-center align-items-center justify-content-around">
                  <div className="col-lg-5">
                    <img
                      src="/fire.png"
                      alt="feature tab"
                      className="img-fluid mb-4 mb-lg-0 mb-xl-0"
                    />
                  </div>
                  <div className="col-lg-5">
                    <div className="feature-tab-info">
                      <h3>Our Vision</h3>
                      <p>
                      Our vision is to improve and promote the full potential of the individuals we serve and their involvement in the community. 
                      </p>
                      <p>
                      We aim to encourage and uphold the human rights of people we serve and their families.{' '}
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabOne;
