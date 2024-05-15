// pages/application.js
import React from "react";
import Layout from "src/layout/Layout";
import Footer from "src/layout/Footer/Footer";
import Navbar from "src/layout/Header/Navbar";
import HelpCenterDetails from "src/components/help-center/HelpCenterDetails";
import HelpCenterHeader from "src/components/help-center/HelpCenterHeader";
import ProtectedRoute from "src/components/ProtectedRoute";

const Application = () => {
  return (
    <Layout title="Help Center" desc="This is help center page">
      <Navbar />
      <HelpCenterHeader />
      <HelpCenterDetails />
      <Footer />
    </Layout>
  );
};

export default Application;
