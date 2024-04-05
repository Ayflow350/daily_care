import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import HeroSectionTen from "@components/hero-section/HeroSectionTen"
import VideoPromo from "@components/promo/VideoPromo";
import BlogFeature from '@components/blogs/BlogFeature';


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
