import React from 'react';
import Layout from 'src/layout/Layout';
import Footer from 'src/layout/Footer/Footer';
import Navbar from 'src/layout/Header/Navbar';
import HelpCenterSingleDetails from 'src/components/help-center/HelpCenterSingleDetails';



const HelpCenterSingle = () => {
  return (
    <Layout title="Help Center Single" desc="This is help center single">
      <Navbar />
      <HelpCenterSingleDetails />
      <Footer />
    </Layout>
  );
};

export default HelpCenterSingle;
