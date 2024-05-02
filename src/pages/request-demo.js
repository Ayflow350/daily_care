import React from "react";

import Layout from "src/layout/Layout";
import Navbar from "src/layout/Header/Navbar";
import FooterShort from "src/layout/Footer/FooterShort";
import SingleServiceRegister from "src/components/services/SingleServiceRegister";

const RequestDemo = () => {
  return (
    <Layout title="Request Demo" desc="This is request demo page">
      <Navbar navDark />
      <SingleServiceRegister />

      <FooterShort />
    </Layout>
  );
};

export default RequestDemo;
