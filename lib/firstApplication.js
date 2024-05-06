import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
  Section,
  Hr,
  Img,
} from "@react-email/components";
import * as React from "react";

const ApplicationEmailTemplate = ({
  companyLogo,
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
                  {companyLogo && (
                      <Img src={companyLogo} alt="Company Logo" style={logoStyle} />
                  )}
                  <Heading style={headerTitle}>New Job Application</Heading>
                  <Text style={headerSubtitle}>
                      You've received a new job application.
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
                      <strong>Address:</strong> {address}, {city}, {state}, {zipCode}
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
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue, Helvetica, Arial, sans-serif",
};

const container = {
  width: "600px",
  maxWidth: "100%",
  margin: "0 auto",
  backgroundColor: "#f0f8ff", // Sky blue shade
};

const header = {
  padding: "20px 30px",
  backgroundColor: "#87ceeb", // Sky blue shade
  textAlign: "center",
};

const logoStyle = {
  width: "150px",
  marginBottom: "10px",
};

const headerTitle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#ffffff",
};

const headerSubtitle = {
  fontSize: "16px",
  color: "#ffffff",
};

const content = {
  padding: "20px 30px",
};

const paragraph = {
  fontSize: "15px",
  lineHeight: "21px",
  color: "#333333",
};

const footer = {
  padding: "20px 30px",
  backgroundColor: "#87ceeb",
  textAlign: "center",
};

const footerText = {
  fontSize: "12px",
  color: "#ffffff",
};
