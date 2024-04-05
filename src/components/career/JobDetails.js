import React from 'react';
import Image from 'next/image';

import JobOverview from './JobOverview';

const JobDetails = () => {
  return (
    <section className="job-details ptb-120">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-8 pe-5">
            <div className="job-details-wrap">
              <h2>Job Details</h2>
              <p>
              Individuals with developmental disabilities who reside in their homes. This includes direct care of program individuals
and implementation of individual plans (IP) and behavior plans (BP). Direct Support Professionals are required to
perform all duties in accordance with State of Maryland regulations and DCS (Daily Care Support) policies and
procedures
              </p>
              <div className="job-details-info mt-5">
                <h3 className="h5">QUALIFICATION:</h3>
                <ul className="content-list list-unstyled">
                  <li>
                  High school graduate or GED equivalent (With the exception of family member)
                  </li>
                  <li>
                  Proficient in the English Language
                  </li>
                  <li>
                  Good verbal and written skills
                  </li>
                  <li>
                  Current First Aid and CPR
                  </li>
                 
                 
                
                </ul>
              </div>

              {/* <div className="job-details-info mt-5">
                <h3 className="h5">Job Responsibilities</h3>
                <ul className="content-list list-unstyled">
                  <li>
                    Be involved in every step of the product design cycle from
                    discovery and user acceptance testing.
                  </li>
                  <li>
                    Work with BAs, product managers and tech teams to lead the
                    Product Design
                  </li>
                  <li>
                    Maintain quality of the design process and ensure that when
                    designs are translated into code they accurately.
                  </li>
                  <li>
                    Accurately estimate design tickets during planning sessions.
                  </li>
                  <li>
                    Contribute to sketching sessions involving
                    non-designersCreate, and pattern libraries.
                  </li>
                 
                </ul>
              </div> */}
            
              <div className="job-details-info mt-5">
              <h3 className="h5 mt-5">ESSENTIAL DUTIES AND RESPONSIBILITIES:</h3>
                <h3 className="h5">Training</h3>
                <ul className="content-list list-unstyled">
                  <li>
                  Completes and maintains all required State mandated trainings such as Medication Technician
Training Program (MTTP), CPR / First Aid, Behavioral Principles and Strategies (BPS) and all
State Developmental Disability Administration (DDA) CORE trainings within 90 days of
employment.
                  </li>
                  <li>
                  Attends meetings and training sessions as required by DDA and DCS,
                  </li>
                  <li>
                  Completes annual trainings related to consumers’ IP, BP, and related plans.
                  </li>
                  
                </ul>
              </div>


              
              <div className="job-details-info mt-5">
                <h3 className="h5">Daily Programing</h3>
                <ul className="content-list list-unstyled">
                  <li>
                  Provides transportation to and from activities,
                  </li>
                  <li>
                  Assists in the implementation of individual plans for individuals and behavioral plan goals,
                  </li>
                  <li>
                  Assists individuals in the pursuit of recreational, social and community activities based on their
preferences and individual plans,
                  </li>
                  <li>
                  Assists and encourages individuals in the establishment of social networks,
                  </li>
                  <li>
                  Promotes participation and involvement in community outings.
                  </li>
                 
                </ul>
              </div>


              
              <div className="job-details-info mt-5">
                <h3 className="h5">Job Requirements</h3>
                <ul className="content-list list-unstyled">
                  <li>
                  Valid driver’s license and clear
driving record.
                  </li>
                  <li>
                  Ability to drive company vehicles.
                  </li>
                  <li>
                  One to two years’ experience working with people with developmental
disabilities.
                  </li>
                  <li>
                  Ability to lift/push/pull 50lbs.
                  </li>
                  <li>
                  Ability to work on holidays and during inclement

weather.
                  </li>
                </ul>
              </div>

              {/* <div className="job-details-info mt-5">
                <h3 className="h5">Skill & Experience</h3>
                <ul className="content-list list-unstyled">
                  <li>
                    You have at least 3 years’ experience working as a Product
                    Designer.
                  </li>
                  <li>
                    You have experience using Sketch and InVision or Framer X
                  </li>
                  <li>
                    You have some previous experience working in an agile
                    environment – Think two-week sprints.
                  </li>
                  <li>
                    You are familiar using Jira and Confluence in your workflow
                  </li>
                </ul>
              </div> */}

              <Image
                width={820}
                height={554}
                src="/base 1.png"
                className="img-fluid mt-5 rounded-custom"
                alt="apply"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <JobOverview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
