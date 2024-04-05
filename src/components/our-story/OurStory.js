/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const OurStory = () => {
  return (
    <section
      className="our-story-section pt-60 pb-120"
      style={{
        background: "url('/shape/dot-dot-wave-shape.svg')no-repeat left bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 col-md-12 order-lg-1">
            <div className="section-heading sticky-sidebar">
              <h4 className="h5 text-primary">Our Vision</h4>
              <h2>Empowering Individuals and Building Community</h2>
              <p>
              Our vision is to improve and promote the full potential of the individuals we serve and their involvement in the community. We aim to encourage and uphold the human rights of people we serve and their families.{' '}
              </p>
              <div className="mt-4">
                <h6 className="mb-3">We Are Awarded By-</h6>
                <img
                  src="/awards-01.svg"
                  alt="awards"
                  className="me-4 img-fluid"
                />
                <img src="/awards-02.svg" alt="awards" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-0">
            <div className="story-grid-wrapper position-relative">
              <ul className="position-absolute animate-element parallax-element shape-service d-none d-lg-block">
                <li className="layer" data-depth="0.02">
                  <Image
                    width={129}
                    height={72}
                    src="/color-shape/image-2.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-2 z-5"
                  />
                </li>
                <li className="layer" data-depth="0.03">
                  <Image
                    width={129}
                    height={72}
                    src="/color-shape/feature-3.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-3"
                  />
                </li>
              </ul>

              
               
             
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <Image
                  width={636}
                  height={492}
                  layout="responsive"
                  src="/edden.jpeg"
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
             
               
               
               
               
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
