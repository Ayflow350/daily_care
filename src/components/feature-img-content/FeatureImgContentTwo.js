import React from 'react';
import Image from 'next/image';
import {

  FaCheckCircle,


} from 'react-icons/fa';
import { FaBookOpenReader } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const FeatureImgContentTwo = ({ bgWhite }) => {
  return (
    <section className={`feature-section-two ptb-120 ${
      bgWhite ? 'bg-white' : 'bg-light'
    } `}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading">
              <h4 className="h5 text-primary">Why We Exist</h4>
              <h2>The Core Values that Drive Everything</h2>
              <p>
              Daily Care Support Services empower individuals with disabilities to live independently and contribute to their communities
              </p>
              <ul className="list-unstyled mt-5">
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-primary rounded me-4">
                    <span className="fas text-white">
                  
            <FaBookOpenReader className="fa-lg"/>
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5">Our story</h3>
                    <p>
                    Daily Care Support Services was founded in 2019 to promote the independence of individuals with intellectual and behavioral challenges.
                    . The owners have more than 23 years’ experience in caring for people with behavioral, physical, mental, and developmental challenges. 
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-danger rounded me-4">
                    <span className="fas text-white">
                      <FaRegLightbulb className="fa-lg" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5">Empowering Potential </h3>
                    <p>
                    The philosophy that guides our services is the belief that every individual has the right to develop his or her fullest potential.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-dark rounded me-4">
                    <span className="fas text-white">
                      <CiGlobe className="fa-lg" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5">Individualized and Culturally Responsive Care</h3>
                    <p>
                     We recognize the uniqueness of each individual and tailor our services in a culturally competent manner, focusing on the individual’s strengths, needs, abilities, interests, and desires.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-7">
            <div className="feature-img-wrap position-relative d-flex flex-column align-items-end">
              <ul className="img-overlay-list list-unstyled position-absolute">
                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <FaCheckCircle className="fas fa-2x me-2 text-primary mb-1" />
                  <h6 className="mb-0">Empower Your Potential</h6>
                </li>
                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <FaCheckCircle className="fas fa-2x me-2 text-primary mb-1" />
                  <h6 className="mb-0">Tailor Your Support</h6>
                </li>
                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <FaCheckCircle className="fas fa-2x me-2 text-primary mb-1" />
                  <h6 className="mb-0">Achieve Independence</h6>
                </li>
              </ul>
              <Image
                width={493}
                height={662}
                src="/caress.png"
                alt="feature image"
                className="img-fluid rounded-custom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImgContentTwo;
