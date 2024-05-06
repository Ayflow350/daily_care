import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Text,
    Section,
    Hr,
  } from "@react-email/components";
  import * as React from "react";
  
  const ApplicationEmailTemplate = ({
    applicationDate,
    email,
    fullName,
    homePhone,
    mobile,
    address,
    city,
    state,
    zipCode,
    position,
  }) => (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>New Job Application</Heading>
            <Text style={headerSubtitle}>
              You've received a new job application.
             
        
            </Text>
            <Text style={headerSubtitle}>
            Here are the details from {email}
            </Text>
          </Section>
  
          <Section style={content}>
            <Text style={paragraph}>
              <strong>Date of Application:</strong> {applicationDate}
            </Text>
            <Text style={paragraph}>
              <strong>Full Name:</strong> {fullName}
            </Text>
            <Text style={paragraph}>
              <strong>Email Address:</strong> {email}
            </Text>
            <Text style={paragraph}>
              <strong>Home Phone:</strong> {homePhone}
            </Text>
            <Text style={paragraph}>
              <strong>Mobile Phone:</strong> {mobile}
            </Text>
            <Text style={paragraph}>
              <strong>Address:</strong> {address}, 
            </Text>
            <Text style={paragraph}>
              <strong>zipCode:</strong>{zipCode}
            </Text>
            <Text style={paragraph}>
              <strong>state:</strong>{state}
            </Text>
            <Text style={paragraph}>
              <strong>state:</strong>{city}
            </Text>
            <Text style={paragraph}>
              <strong>Position Applied For:</strong> {position}
            </Text>
          </Section>
  
          <Section style={footer}>
            <Text style={footerText}>
              This email contains information about a new job application.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default ApplicationEmailTemplate;
  
  const main = {
    backgroundColor: "#f3f3f5",
    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  };
  
  const container = {
    width: "680px",
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: "#ffffff",
  };
  
  const header = {
    padding: "20px 30px",
    backgroundColor: "#2b2d6e",
    color: "#fff",
  };
  
  const headerTitle = {
    fontSize: "24px",
    fontWeight: "bold",
  };
  
  const headerSubtitle = {
    fontSize: "16px",
  };
  
  const content = {
    padding: "30px",
  };
  
  const paragraph = {
    fontSize: "15px",
    lineHeight: "21px",
    color: "#3c3f44",
  };
  
  const footer = {
    padding: "20px 30px",
    backgroundColor: "#f3f3f5",
  };
  
  const footerText = {
    fontSize: "12px",
    color: "#9199a1",
  };
  