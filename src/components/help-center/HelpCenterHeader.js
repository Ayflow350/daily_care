import React from "react";

const HelpCenterHeader = () => {
  return (
    <section
      className="page-header position-relative overflow-hidden ptb-120 bg-dark"
      style={{
        background: "url('/page-header-bg.svg')no-repeat bottom left",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="text-center">
              <h1 className="display-5 fw-bold">
                Start your application easily!
              </h1>
              <p className="lead">
                We've streamlined the application process: This reduces
                unnecessary steps and makes it easier to complete.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
      </div>
    </section>
  );
};

export default HelpCenterHeader;
