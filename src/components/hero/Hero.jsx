import React from 'react';

const Hero = () => {
  // Your HTML content with embedded CSS styles
  const htmlContent = `
    <div class='full'>
      

   

      <div class="carousel">
        <div class="list">
          <div class="item">
            <img src="/dert.jpeg" alt="Image 1" width="1500" height="1000" />
            <div class="content">
            
              <div class="topic">DAILY CARE</div>
              <div class="title">Support Services</div>
             
              <div class="des">
              At Daily Care Support Services, our mission is to facilitate social connections and strengthen relationships for our clients through active community involvement. By providing the necessary care and support, we strive to enhance the lives of each individual under our care.
              </div>
              <div class="buttons">
                <button '>
                <a href='/about-us'>
                Learn More
                </a>
                </button>
               
              </div>
            </div>
          </div>
          <!-- Repeat the same structure for other carousel items -->
        </div>
<div class="arrows">
          <button id="prev"></button>
          <button id="next"></button>
        </div>
        <div class="time"></div>
      </div>
    </div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Hero;
