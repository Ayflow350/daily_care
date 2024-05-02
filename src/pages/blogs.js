import React from 'react';

import Layout from 'src/layout/Layout';
import Footer from 'src/layout/Footer/Footer';
import Navbar from 'src/layout/Header/Navbar';
import BlogFeature from 'src/components/blogs/BlogFeature';
import PageHeader from 'src/components/common/PageHeader';

const Blogs = () => {
  return (
    <Layout title="Blog" desc="This is blog page">
      <Navbar />
     
      <BlogFeature />
      <Footer />
    </Layout>
  );
};

export default Blogs;
