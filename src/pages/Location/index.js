import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Promo from "@components/promo/Promo";
import HeroSectionFourth from "@components/hero-section/HeroSectionFourth";
import OurOffice from "@components/our-office/OurOffice";


const DesktopAppHome = () => {
  return (
    <Layout>
      <Navbar />
      <OurOffice/>
      <Footer footerGradient />
    </Layout>
  );
};

export default DesktopAppHome;
