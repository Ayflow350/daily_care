import React from "react";
import Layout from "src/layout/Layout";
import Footer from "src/layout/Footer/Footer";
import Navbar from "src/layout/Header/Navbar";
import Promo from "src/components/promo/Promo";
import HeroSectionFourth from "src/components/hero-section/HeroSectionFourth";
import OurOffice from "src/components/our-office/OurOffice";


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
