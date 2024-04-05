import React from 'react';

const OurOffice = () => {
  return (
    <section className="office-address-section ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading text-center">
              
              <h2>Located Central Region Maryland</h2>
              <p>
              We provide assistance to individuals across Maryland, with a focus on the central region, including but not limited to:{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0">
            <div
              className="rounded-custom border d-block office-address overflow-hidden z-2"
              style={{
                background:
                  "url('/-11.jpeg')no-repeat center center / cover",
              }}
            >
              <div className="office-content text-center p-4">
                <span className="office-overlay"></span>
                <div className="office-info">
                  <h5>Anne Arundel</h5>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0">
            <div
              className="rounded-custom border d-block office-address overflow-hidden z-2"
              style={{
                background:
                  "url('/-12.jpeg')no-repeat center center / cover",
              }}
            >
              <div className="office-content text-center p-4">
                <span className="office-overlay"></span>
                <div className="office-info">
                  <h5>Harford</h5>
                
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0">
            <div
              className="rounded-custom border d-block office-address overflow-hidden z-2"
              style={{
                background:
                  "url('/-13.jpeg')no-repeat center center / cover",
              }}
            >
              <div className="office-content text-center p-4">
                <span className="office-overlay"></span>
                <div className="office-info">
                  <h5>Howard</h5>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0">
            <div
              className="rounded-custom border d-block office-address overflow-hidden z-2"
              style={{
                background:
                  "url('/-14.jpeg')no-repeat center center / cover",
              }}
            >
              <div className="office-content text-center p-4">
                <span className="office-overlay"></span>
                <div className="office-info">
                  <h5>Montgomery County</h5>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;