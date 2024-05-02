import React from 'react';
import Layout from 'src/layout/Layout';
import Footer from 'src/layout/Footer/Footer';
import Navbar from 'src/layout/Header/Navbar';
import PageHeader from 'src/components/common/PageHeader';
import ContactCard from 'src/components/contact-us/ContactCard';
import ContactForm2 from 'src/components/contact-us/ContactForm';

const ContactUs = () => {
  return (
    <Layout title="Contact Us" desc="This is contact us page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Let's Talk About Daily Care!"
        desc="We're here to answer your questions and discuss how our daily care services can support you or your loved ones."
      />
      <ContactCard />
      <ContactForm2 />
      <Footer />
    </Layout>
  );
};

export default ContactUs;
