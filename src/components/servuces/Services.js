import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';


import {
  serviceOne,
  serviceTwo,
  serviceThree,
} from '../../utils/data';


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
            <div className="row d-flex">  {/* Added d-flex class to the row */}
              <div>
                <h1>We serve individuals with:</h1>
              </div>
              <div className="col-md-12 col-lg-15 mt-4 mt-md-0 mt-lg-0">
                <div className="row ">
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0 mr-auto">
                    <div className="footer-single-col">
             <ul className="list-styled footer-nav-list mb-lg-0">
                        {serviceOne.map((primaryPage, i) => (
                          <li key={i + 1}>
                            <>  {/* Wrap link around the anchor tag */}
                              <a className="text-decoration-none">
                                {' '}
                                {primaryPage.title}
                              </a>
                            </>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0 mr-auto">  {/* Added mr-auto class to each column */}
                    <div className="footer-single-col">
                      
                      <ul className="list-styled footer-nav-list mb-lg-0">
                        {serviceTwo.map((page, i) => (
                          <li key={i + 1}>
                            < >  {/* Wrap link around the anchor tag */}
                              <a className="text-decoration-none">
                                {' '}
                                {page.title}
                              </a>
                            </>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0 mr-auto">  {/* Added mr-auto class to each column */}
                    <div className="footer-single-col">
                      <ul className="list-styled footer-nav-list mb-lg-0">
                        {serviceThree.map((template, i) => (
                          <li key={i + 1}>
                            <>  {/* Wrap link around the anchor tag */}
                              <a className="text-decoration-none">
                                {' '}
                                {template.title}
                              </a>
                            </>
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
          

           
         
        </footer>
    </>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
