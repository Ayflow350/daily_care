import React from 'react';

import Layout from 'src/layout/Layout';
import Footer from 'src/layout/Footer/Footer';
import Navbar from 'src/layout/Header/Navbar';
import PageHeader from 'src/components/common/PageHeader';
import SingleServicePromo from 'src/components/services/SingleServicePromo';
import SingleServiceRegister from 'src/components/services/SingleServiceRegister';
import SingleServiceFeature from 'src/components/services/SingleServiceFeature';
import SingleServiceFeatureTwo from 'src/components/services/SingleServiceFeatureTwo';



const SingleService = () => {
  return (
    <Layout title="Services" desc="This is services single page">
      <Navbar />
      <PageHeader
        title="Quality Software Services"
        desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
      />
      <SingleServiceFeature />
      <SingleServiceFeatureTwo />
      <SingleServicePromo />
      <SingleServiceRegister />
      <Footer footerLight />
    </Layout>
  );
};

export default SingleService;
