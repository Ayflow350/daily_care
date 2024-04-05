import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';


import PageHeader from '@components/common/PageHeader';
import SupportOne from '@components/support/SupportOne';



const BlogSingle = () => {
  return (
    <Layout title="Blog Single" desc="This is blog single page">
      <Navbar classOption="navbar-light" />
      <PageHeader title="Why customer retention is the ultimate growth strategy" />
    
   
 
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default BlogSingle;
