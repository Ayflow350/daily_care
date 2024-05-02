import React from "react";
import Layout from "src/layout/Layout";
import Navbar from "src/layout/Header/Navbar";
import Footer from "src/layout/Footer/Footer";
import OurStory from "src/components/our-story/OurStory";
import HeroSectionTwo from "src/components/hero-section/HeroSectionTwo";
import FeatureImgContentTwo from "src/components/feature-img-content/FeatureImgContentTwo";

import TabOne from "src/components/tabs/TabOne";


const AboutUs = () => {
  return (
    <Layout title="About Us" desc="this is about us page">
      <Navbar classOption="navbar-light" />
      
      <FeatureImgContentTwo />
    
     <TabOne/>
     <Footer footerLight />
    </Layout>
  );
};

export default AboutUs;
