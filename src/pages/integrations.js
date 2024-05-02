import React from 'react';

import Layout from 'src/layout/Layout';
import Footer from 'src/layout/Footer/Footer';
import Navbar from 'src/layout/Header/Navbar';
import Promo from 'src/components/promo/Promo';
import PageHeader from 'src/components/common/PageHeader';
import SupportOne from 'src/components/support/SupportOne';
import IntegrationFeature from 'src/components/integration/IntegrationFeature';


const Integrations = () => {
  return (
    <Layout title="Integrations" desc="This is integrations page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Our Featured Integrations"
        desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
      />
      <IntegrationFeature />
      <Promo bgWhite />
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default Integrations;
