import React from 'react';
import Layout from 'src/layout/Layout';
import Footer from 'src/layout/Footer/Footer';
import Navbar from 'src/layout/Header/Navbar';


import PageHeader from 'src/components/common/PageHeader';
import SupportOne from 'src/components/support/SupportOne';



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
