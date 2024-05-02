import React from 'react';
import Layout from 'src/layout/Layout';
import Footer from 'src/layout/Footer/Footer';
import Navbar from 'src/layout/Header/Navbar';
import PageHeader from 'src/components/common/PageHeader';
import SupportOne from 'src/components/support/SupportOne';
import CareerPromo from 'src/components/career/CareerPromo';
import CareerFeature from 'src/components/career/CareerFeature';



const Career = () => {
  return (
    <Layout title="Career" desc="This is career page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Career"
        desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
      />
      <CareerFeature />
      <CareerPromo />
      {/* <OpenJobs />
      <CareerPromo />
      <CtaTwo /> */}
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default Career;
