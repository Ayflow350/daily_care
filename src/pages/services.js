import React from "react";
import Layout from "src/layout/Layout";
import Footer from "src/layout/Footer/Footer";
import Navbar from "src/layout/Header/Navbar";
import HeroSectionTen from "src/components/hero-section/HeroSectionTen"
import VideoPromo from "src/components/promo/VideoPromo";
import BlogFeature from 'src/components/blogs/BlogFeature';


const services = () => {
  return (
    <Layout title="Services" desc="this is services page  ">
      <Navbar classOption="navbar-light" />
      <HeroSectionTen />
      {/* <VideoPromo /> */}
      
      <BlogFeature/>

    <Footer footerGradient />
    </Layout>
  );
};

export default services;
