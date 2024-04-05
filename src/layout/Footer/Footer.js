import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FaFacebook, FaGithub, FaDribbble, FaTwitter } from 'react-icons/fa';

import {
  footerPrimaryPages,
  footerPages,
  footerTemplate,
} from '../../utils/data';
import Rating from '../../components/common/Rating';

const Footer = ({ footerLight, style, footerGradient }) => {
  return (
    <>
      <footer className='footer-section'>
          <div
          className={`footer-top ptb-120 ${footerLight ? 'footer-light' : 'bg-dark'} ${
            footerGradient ? 'bg-gradient' : ''
          }  text-white`}
          style={style}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                <div className="footer-single-col">
                  <div className="footer-single-col mb-4">
                    {footerLight ? (
                      <Image
                        width={113}
                        height={36}
                        src="/main.png"
                        alt="logo"
                        className="img-fluid logo-white"
                      />
                    ) : (
                      <Image
                        width={203}
                        height={96}
                        src="/vgh.png"
                        alt="logo"
                        className="img-fluid logo-color"
                      />
                    )}
                  </div>
                 
                  
                 
                </div>
              </div>
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerPrimaryPages.map((primaryPage, i) => (
                          <li key={i + 1}>
                            <Link href={primaryPage.href}>
                              <a className="text-decoration-none">
                                {' '}
                                {primaryPage.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                    
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerTemplate.map((template, i) => (
                          <li key={i + 1}>
                            <Link href={template.href}>
                              <a className="text-decoration-none">
                                {' '}
                                {template.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          

          <div
            className={`footer-bottom ${
              footerLight ? 'footer-light' : 'bg-dark'
            } ${footerGradient ? 'bg-gradient' : ''} text-white py-4`}
          >
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-7 col-lg-7">
                  <div className="copyright-text">
                    <p className="mb-lg-0 mb-md-0">
                      &copy; 2023 Dailyy services Rights Reserved.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
