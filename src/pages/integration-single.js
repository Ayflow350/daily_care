import React from 'react';
import Layout from 'src/layout/Layout';
import Footer from 'src/layout/Footer/Footer';
import Navbar from 'src/layout/Header/Navbar';
import SupportOne from 'src/components/support/SupportOne';
import PageHeader from 'src/components/common/PageHeader';
import IntegrationDetails from 'src/components/integration/IntegrationDetails';
import RelatedIntegration from 'src/components/integration/RelatedIntegration';


const IntegrationSingle = () => {
  return (
    <Layout title="Integration Single" desc="This is integration single page">
      <Navbar />
      <PageHeader
        title="Connect with Google"
        desc="Objectively fabricate strategic products for high-impact materials."
        integration
      />
      <IntegrationDetails />
      <RelatedIntegration />
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default IntegrationSingle;
