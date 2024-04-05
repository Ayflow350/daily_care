/* eslint-disable @next/next/no-img-element */
import React from "react";

import SectionTitle from "../common/SectionTitle";
import { FaFingerprint } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

const FeatureImgFive = () => {
  return (
    <>
      <section className="feature-section ptb-120 ">
        <div className="container">
          <div className="row align-items-lg-center justify-content-between">
            <div className="col-lg-5 mb-7 mb-lg-0">

      
          <div className="">
            <SectionTitle
              subtitle="Quick Support"
              title="Get in Touch Today!"
             
            />
            <div className="row justify-content-between pb-5">
              <div className="col-sm-6 mb-4 mb-md-0 mb-lg-0">
                
                <div className="contact-info">
                 
                  <h3
                   
                    className="read-more text-decoration-none "
                  >
                   
                   (301)3681900
                  </h3>
                </div>
              </div>
             
            </div>
          </div>
         {/* here */}
         
        </div>
  




            <div className="col-lg-6">
              <div className="pr-lg-4 position-relative">
                {/* <!--animated shape start--> */}
                <ul className="position-absolute animate-element parallax-element shape-service z--1 hide-medium">
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/color-shape/image-3.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.02">
                    <img
                      src="/color-shape/feature-1.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-2 z-5"
                    />
                  </li>
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/color-shape/feature-3.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-3"
                    />
                  </li>
                </ul>
                {/* <!--animated shape end--> */}
                <div className="bg-light text-center shadow-sm rounded-custom overflow-hidden pt-5 px-3 px-lg-5 mx-lg-auto">
                  <div className="mb-5">
                    <h3 className="fw-medium h4">
                      We deliver best quality  care 
                    </h3>
                  </div>
                  <div className="position-relative w-75 mx-auto">
                    <img
                      className="position-relative z-2 w-100 h-auto"
                      src="/screen/half-iphone.svg"
                      alt=" Description"
                    />
                    <img
                      className="position-absolute half-screen"
                      src="/screen/app-screen-2.jpg"
                      alt=" Description"
                    />
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

export default FeatureImgFive;
