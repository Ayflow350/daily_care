import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import {MdOutlineHealthAndSafety  } from "react-icons/md";
import { FaCheckCircle, FaFingerprint } from "react-icons/fa";

const FeatureImgContentOne = () => {
  return (
    <>
      <section className="why-choose-us ptb-120">
        <div className="container">
          <div className="row justify-content-lg-between align-items-center">
            <div className="col-lg-5 col-12">
              <div className="why-choose-content">
                <div className="icon-box rounded-custom bg-primary shadow-sm d-inline-block">
                  <span className="fas text-white">
                  <MdOutlineHealthAndSafety />
                  </span>
                  {/* add an health stuff here */}
                </div>
                <h2>At the Heart of Care</h2>
                <p>
                Promoting tailored support for seniors, disabled children, and community development while providing respite care. Implementing optimization strategies to enhance personal support services efficiently.
                </p>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Individualized Care
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Community Connections
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Respite Solutions
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Fostering Independence
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Showcasing success
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                   Trustworthy Care
                  </li>
                </ul>
                <a
                  href="/about-us"
                  className="read-more-link text-decoration-none"
                >
                  Know More About Us{" "}
                  <span className="far ms-2 mb-1">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <Image
                  width={636}
                  height={464}
                  layout="responsive"
                  src="/gti.png"
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image-feature pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-12 order-lg-1">
              <div className="feature-img-content">
                <div className="icon-box rounded-custom bg-dark shadow-sm d-inline-block">
                  <span className="fal text-white">
                    <FaFingerprint />
                  </span>
                </div>
                <h2>Personalized Care </h2>
                <p>
                At Daily Care Support Services, we assist clients residing in Anne Arundel, Harford, Howard, Baltimore County, and Baltimore City in fostering and relishing social connections through active involvement in the community.
                </p>
                <p>
                By delivering the necessary care, we foster deeper bonds between our clients and their loved ones. Through tailored support and assistance, our goal is to enhance the well-being of every individual entrusted to our care
                </p>

                <a
                  href="Location"
                  className="read-more-link text-decoration-none d-block mt-4"
                >
                  Know More Areas we cover{" "}
                  <span className="far ms-2 mb-1">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-0">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <Image
                  width={636}
                  height={492}
                  layout="responsive"
                  src="/neeew.png"
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgContentOne;
