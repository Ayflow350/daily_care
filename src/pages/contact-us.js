import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import ContactCard from '@components/contact-us/ContactCard';
import ContactForm2 from '@components/contact-us/ContactForm';

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
