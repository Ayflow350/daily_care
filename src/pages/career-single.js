import React from 'react';

import Layout from 'src/layout/Layout';
import Footer from 'src/layout/Footer/Footer';
import Navbar from 'src/layout/Header/Navbar';
import JobDetails from 'src/components/career/JobDetails';
import RelatedJob from 'src/components/career/RelatedJob';
import SupportOne from 'src/components/support/SupportOne';
import CareerSingleHeader from 'src/components/career/CareerSingleHeader';

const CareerSingle = () => {
  return (
    <Layout title="Career Single" desc="This is career single page">
      <Navbar classOption="navbar-light" />
      <CareerSingleHeader />
      <JobDetails />
      
      <Footer footerLight />
    </Layout>
  );
};

export default CareerSingle;
