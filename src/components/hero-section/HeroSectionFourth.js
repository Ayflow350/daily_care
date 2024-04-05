/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import HeroTitle from "../common/HeroTitle";

const HeroSectionFourth = ({ bgDark }) => {
  return (
    <section
      className={`hero-section ptb-120 ${bgDark ? "bg-dark" : "bg-white"}`}
      style={{
        background:
          "url('/shape/dot-dot-wave-shape.svg')no-repeat bottom center",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-xl-5 col-lg-8">
            <div className="hero-content-wrap mt-5 text-center text-xl-start text-lg-start">
              <HeroTitle
                title="Easy Availabilty Of Quality Care to Everyone "
                desc="We make it easy for everyone to access high-quality care. Learn more about our locations"
                  className="col-lg-4"
              />
              <div className="hero-subscribe-form-wrap pt-4 position-relative m-auto m-xl-0 d-none d-md-block d-lg-block d-xl-block">
                <form
                  id="subscribe-form"
                  name="email-form"
                  className="hero-subscribe-form d-block d-lg-flex d-md-flex"
                >
                  
                  <input
                    type="button"
                    value="Explore"
                    className="btn btn-primary mt-3 mt-lg-0 mt-md-0"
                  />
                </form>
                <ul className="nav subscribe-feature-list mt-3">
                  <li className="nav-item">
                    <span className="ms-0">
                      <FaRegCheckCircle className="far me-2 text-primary" />
                    Start Today
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      Experience Quality Care
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mt-4 mt-xl-0">
            <div className="hero-img-wrap position-relative">
              {!bgDark && (
                <ul className="position-absolute animate-element parallax-element shape-service hide-medium">
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/color-shape/image-1.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.02">
                    <img
                      src="/color-shape/feature-2.svg"
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
              )}
              <div className="hero-img-wrap position-relative">
                <div className="hero-screen-wrap">
                  <div className="phone-screen">
                    <img
                      src="/try.jpeg"
                      alt="hero"
                      className="position-relative img-fluid"
                    />
                  </div>
                  <div className="mac-screen">
                    <img
                      src="/try.jpeg"
                      alt="hero "
                      className="position-relative img-fluid rounded-custom"
                    />
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

export default HeroSectionFourth;
