/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { blogFeatureData } from '../../utils/data';

const BlogFeature = () => {
  return (
    <section className="masonary-blog-section ptb-120">
      <div className="container">
      
      <div className="section-heading text-center">
              <h3 className="h5 text-primary">Our services </h3>
              <h2>We strive to offer you personalized care and support.</h2>
              <p>At Daily Care Support Services, our primary objective is to ensure that our clients' comprehensive needs are addressed through tailored services. Our team of professionals provides personalized support to tackle challenges and assist individuals with developmental disabilities. We work closely with our clients as they progress towards improved health and well-being.
</p>
       
            </div>
            
                
      <div className="row">
          {blogFeatureData.map((blog, i) => (
            <div key={i + 1} className="col-lg-4 col-md-6">
              <div className="single-article rounded-custom my-3">
                <Link href={`/services/${blog.id}`}>
                  <a className="article-img">
                    <Image
                      width={414}
                      height={224}
                      src={blog.image}
                      alt="article"
                    />
                  </a>
                </Link>
                <div className="article-content p-4">
                  <div className="article-category mb-4 d-block">
                    <a
                      href="#!"
                      className={`d-inline-block text-dark badge ${blog.class}`}
                    >
                      {blog.type}
                    </a>
                  </div>
                  <Link href="/blog-single">
                    <a>
                      <h2 className="h5 article-title limit-2-line-text">
                        {blog.header}
                      </h2>
                    </a>
                  </Link>
                  <p className="limit-2-line-text">{blog.info}</p>

                  <a href="#!">
                    <div className="d-flex align-items-center pt-4">
                     
                      
                    </div>
                  </a>
                </div>
              </div>
             
            </div>
          ))}
        </div>



       

       
      </div>
    </section>
  );
};

export default BlogFeature;
