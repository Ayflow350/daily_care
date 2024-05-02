import React, { useState } from "react";
import AnimatedButton from "src/components/common/AnimatedButton";

const VideoPromo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="counter-with-video pt-60 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="cyber-video-img"
              style={{
                background:
                  "url('fish.png')no-repeat center top/cover",
              }}
            >
              <AnimatedButton />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mt-5 mt-lg-0">
              <div className="section-heading mb-5">
                <h5 className="h6 text-primary">Safeguard Your Wellbeing</h5>
                <h2>
                Trusted Daily Care for Independence and Peace of Mind
                </h2>
                <p>         
                
                
                Learn More About Our Services!

Discover how we can help you maintain independence and peace of mind.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="bg-white p-4 cyber-count-box mb-30 mb-lg-0">
                    <h2 className="text-primary">50k+</h2>
                    <h5 className="h-6">Happy Clients Trust Us</h5>
                    <p>
                    Compassionate daily care for you or your loved ones.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="bg-white p-4 cyber-count-box">
                    <h2 className="text-primary">70k+</h2>
                    <h5 className="h-6">Hours of Care Delivered</h5>
                    <p>
                    23 Years of Experience, Exceptional Care.
                    </p>
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

export default VideoPromo;
