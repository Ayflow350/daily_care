import React from 'react';
import Link from 'next/link';

const HeroSectionTwo = () => {
  return (
    <section
      className="about-header-section ptb-120 position-relative overflow-hidden bg-dark"
      style={{
        background: "url('/page-header-bg.svg')no-repeat center right",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading-wrap d-flex justify-content-between z-5 position-relative">
              <div className="about-content-left">
                <div className="about-info mb-5">
                  <h1 className="fw-bold display-5">
                  Creating  personalized care around the unique needs and desires


                 
                  </h1>
                  <p className="lead">
                  Daily Care Support Services provides personalized care for a richer life.{' '}
                  </p>
                  
                </div>
                <img src="/about1.jpeg" alt="about" className="img-fluid about-img-first mt-5 rounded-custom shadow"/>
              </div>
              <div className="about-content-right">
              <img src="/babe.jpeg" alt="about" className="img-fluid mb-5 rounded-custom shadow"/>
              <img src="/blade.jpeg" alt="about" className="rounded-custom about-img-last shadow"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"></div>
    </section>
  );
};

export default HeroSectionTwo;
