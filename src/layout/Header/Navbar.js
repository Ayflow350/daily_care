import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

import OffCanvasMenu from './OffCanvasMenu';
import {
  navHomeOne,
  navHomeTwo,
  navCompanyLinks,
  navCompanyPage,
} from '../../utils/data';

import dynamic from 'next/dynamic';

const Navbar = ({ navDark, insurance, classOption }) => {


  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector('.main-header');
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`main-header ${
        navDark ? 'position-absolute' : ''
      } w-100 ${classOption} ${
        insurance && 'ins-header main-header w-100 z-10'
      }`}
    >
      <nav
        className={`navbar navbar-expand-xl z-50 ${
          navDark ? 'navbar-dark' : 'navbar-light'
        } sticky-header ${scroll > headerTop ? 'affix' : ''}`}
      >
        <div className="container d-flex align-items-center justify-content-lg-between position-relative">
          <div className='col-5'>

          <Link href="/">
            <a className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
              {scroll > headerTop || !navDark ? (
                <Image
                  width={123}
                  height={36}
                  src="/main.png"
                  alt="logo"
                  className="img-fluid logo-color"
                />
              ) : (
                <Image
                  width={113}
                  height={36}
                  src="/logo-white.png"
                  alt="logo"
                  className="img-fluid logo-white"
                />
              )}
            </a>
          </Link>
          </div>
        
          <button
            className="navbar-toggler position-absolute right-0 border-0"
            id="#offcanvasWithBackdrop"
            role="button"
          >
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <HiMenu />
            </span>
          </button>
          <div className="clearfix"></div>

          <div className="collapse navbar-collapse justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="/"
                  role="button"
              
                  aria-expanded="false"
                >
                  Home
                </a>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-full">
                   
                   
                  </div>
                </div>
              </li>
              <li>
                <Link href="about-us">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li>
                <Link href="services">
                  <a className="nav-link">Services</a>
                </Link>
              </li>

              <li>
                <Link href="career-single">
                  <a className="nav-link">Careers</a>
                </Link>
              </li>
              <li className="nav-item">
             
              <Link href="/contact-us">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                
                  aria-expanded="false"
                >
                  Contact Us
                </a>
                </Link>
              </li>

              
            </ul>
          </div>

          <div className="action-btns text-end me-5 col-7 me-lg-0 d-none d-md-block d-lg-block">
           
            {/* <Link href="login
            ">
              <a
                className={
                  insurance ? 'ins-btn ins-primary-btn' : 'btn btn-primary'
                }
                href="/login"
              >
              Employee
              </a>
            </Link> */}
            <li className="nav-item dropdown">
                <a
                   className={
                    insurance ? 'ins-btn ins-primary-btn' : 'btn btn-primary'
                  }
                  
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Employee
                </a>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-full">
                    <div className="dropdown-grid-item">
                      <h6 className="drop-heading">Useful Links</h6>
                      {navCompanyLinks.map((navLink, i) => (
                        <div key={i + 1}>
                          <Link href={navLink.href}>
                            <a className="dropdown-link px-0">
                              <span className="me-2">{navLink.icon}</span>
                              <span className="drop-title mb-0">
                                {navLink.title}{' '}
                              </span>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                  
                  </div>
                </div>
              </li>
          </div>

          <div
            className="offcanvas offcanvas-end d-xl-none"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
          >
            <div className="offcanvas-header d-flex align-items-center mt-4">
              <Link href="/">
                <a className="d-flex align-items-center mb-md-0 text-decoration-none">
                  <Image
                    width={121}
                    height={36}
                    src="/logo-color.png"
                    alt="logo"
                    className="img-fluid ps-2"
                  />
                </a>
              </Link>
              <button
                type="button"
                className="close-btn text-danger"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <HiOutlineX />
              </button>
            </div>

            <OffCanvasMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
