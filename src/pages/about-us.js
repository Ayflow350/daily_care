import React from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import OurStory from "@components/our-story/OurStory";
import HeroSectionTwo from "@components/hero-section/HeroSectionTwo";
import FeatureImgContentTwo from "@components/feature-img-content/FeatureImgContentTwo";

import TabOne from "@components/tabs/TabOne";


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