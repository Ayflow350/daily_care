import React from 'react'
import {useRouter} from 'next/router'
import { blogFeatureData } from 'src/utils/data';

import Footer from "src/layout/Footer/Footer";

const ServiceId= (props) => {
   const router = useRouter()
  const serviceId = router.query['id'];

  // console.log({params})
  console.log({serviceId})

  const serviceDetails =  blogFeatureData.find((blog) => blog.id === serviceId);
  console.log(serviceDetails)

  // if(loading) return <div>Loading...</div>
  return (
    <div>
      
  
     


    <div>


    <div className='full'>
          <div className="carousel">
            <div className="list">
              <div className="item">
                <img src={serviceDetails?.image} alt="Image 1" width="1500" height="1000" />
                <div className="content">
                  <div className="author"></div>
                  <div className="topic">DAILY CARE</div>
                  <div className="title">{serviceDetails?.type}</div>
                 </div>
              </div>
              {/* Repeat the same structure for other carousel items */}
            </div>
       
          </div>
          
        </div>

        <section className="pt-80">
        <div className="container">
      
      <div className="section-heading text-center">
             
              <h2>{serviceDetails?.type}</h2>
             
       
            </div>
            </div>
          </section>
          <div className='container pb-80'>
          <p>
              {serviceDetails?.info1}
              </p>

              <p>
              {serviceDetails?.info2}
              </p>

              <p>To know more about our staff, do not hesitate to <span>
                <a href=' /contact-us'>
                send us a message.
                  </a>
                  
                </span></p>
          </div>
          
        </div>

        <Footer footerGradient />
</div>




  )
}

export default ServiceId


