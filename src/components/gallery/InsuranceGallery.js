import { insuranceGallery } from "@utils/data";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import dynamic from "next/dynamic";

const InsuranceGallery = () => {
  const [isOpen, setOpen] = useState(false);
  const swiperRef = useRef();

  return (
    <section className="ins-gallery mt-5">
   <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">Our services </h4>
              <h2> Compassionate  Caregivers</h2>
              <p>
              Our team of qualified and compassionate caregivers provide personalized care that fosters independence and dignity.
              </p>
            </div>
          </div>
        </div>
     
          
      <div className="ins-gallery-center-slider overflow-hidden">
        <div className="ins-gallery-slider swiper overflow-visible mt-5">
          <>
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={15}
              loop={true}
              centeredSlides={true}
              navigation={{
                nextEl: ".review-swiper-button-next",
                prevEl: ".review-swiper-button-prev",
              }}
              modules={[Navigation]}
              breakpoints={{
                375: {
                  slidesPerView: 1,
                },
                414: {
                  slidesPerView: 1,
                },
                660: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                991: {
                  slidesPerView: 2,
                },
                1140: {
                  slidesPerView: 3,
                },
                1680: {
                  slidesPerView: 3,
                },
                1920: {
                  slidesPerView: 3,
                },
              }}
              className="swiper-wrapper"
            >
              {insuranceGallery.map((item, i) => (
                <SwiperSlide
                  key={i + 1}
                  className="ins-gallery-slide-single position-relative"
                >
                  <img src={item.url} alt="gallery" className="img-fluid" />
                  <a
                    href="/services"
                    className="ins-btn ins-primary-btn position-absolute"
                  >
                   {item.Name}
                    <span className="ms-1">
                      <svg
                        width="22"
                        height="9"
                        viewBox="0 0 22 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.776428 4.55017L15.7133 4.55017"
                          stroke="white"
                          strokeWidth="1.49369"
                        />
                        <path
                          d="M21.6888 4.54934L15.7141 7.99887L15.7141 1.09981L21.6888 4.54934Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
         
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            className="swiper-btn-prev swiper-control"
            role="button"
          >
            <FaAngleLeft className="mb-1" />
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            className="swiper-btn-next swiper-control"
            role="button"
          >
            <FaAngleRight className="mb-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(InsuranceGallery), { ssr: false });
