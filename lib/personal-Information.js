import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Section,
    Text,
    Hr,
    Row,
    Column,
  } from "@react-email/components";
  
  const EmailTemplateForApplication = ({
    mrMrs,
    firstName,
    lastName,
    homeAddress,
    correspondenceAddress,
    homePhone,
    workTelephone,
    contactAtWork,
    eligibleToWork,
    workPermitOrVisa,
    highSchoolNameAndAddress,
    highSchoolDateAttended,
    highSchoolAreaOfStudy,
    highSchoolDiploma,
    collegesTrainingSchools,
    collegeDateAttended,
    collegeAreaOfStudy,
    collegeDiploma,
    professionalTrainings,
  }) => (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>New Application Received</Heading>
            <Text style={headerSubtitle}>Here are the details of the application:</Text>
          </Section>
  
          <Section style={content}>
            <Heading style={sectionTitle}>Personal Information</Heading>
            <Text style={paragraph}>
              <strong>Title:</strong> {mrMrs}
            </Text>
            <Text style={paragraph}>
              <strong>First Name:</strong> {firstName}
            </Text>
            <Text style={paragraph}>
              <strong>Last Name:</strong> {lastName}
            </Text>
            <Text style={paragraph}>
              <strong>Home Address:</strong> {homeAddress}
            </Text>
            <Text style={paragraph}>
              <strong>Correspondence Address:</strong> {correspondenceAddress}
            </Text>
            <Text style={paragraph}>
              <strong>Home Phone:</strong> {homePhone}
            </Text>
            <Text style={paragraph}>
              <strong>Work Telephone:</strong> {workTelephone}
            </Text>
            <Text style={paragraph}>
              <strong>Contact at Work:</strong> {contactAtWork ? 'Yes' : 'No'}
            </Text>
            <Text style={paragraph}>
              <strong>Eligible to Work:</strong> {eligibleToWork ? 'Yes' : 'No'}
            </Text>
            <Text style={paragraph}>
              <strong>Work Permit or Visa:</strong> {workPermitOrVisa ? 'Yes' : 'No'}
            </Text>
  
            <Heading style={sectionTitle}>Education and Training</Heading>
            <Text style={paragraph}>
              <strong>High School Name and Address:</strong> {highSchoolNameAndAddress}
            </Text>
            <Text style={paragraph}>
              <strong>Dates Attended (High School):</strong> {highSchoolDateAttended}
            </Text>
            <Text style={paragraph}>
              <strong>Area of Study (High School):</strong> {highSchoolAreaOfStudy}
            </Text>
            <Text style={paragraph}>
              <strong>Diploma Received (High School):</strong> {highSchoolDiploma ? 'Yes' : 'No'}
            </Text>
            <Text style={paragraph}>
              <strong>Colleges/Training Schools:</strong> {collegesTrainingSchools}
            </Text>
            <Text style={paragraph}>
              <strong>Dates Attended (College):</strong> {collegeDateAttended}
            </Text>
            <Text style={paragraph}>
              <strong>Area of Study (College):</strong> {collegeAreaOfStudy}
            </Text>
            <Text style={paragraph}>
              <strong>Diploma Received (College):</strong> {collegeDiploma ? 'Yes' : 'No'}
            </Text>
            <Text style={paragraph}>
              <strong>Professional Trainings/Qualifications:</strong> {professionalTrainings}
            </Text>
          </Section>
  
          <Section style={footer}>
            <Text style={footerText}>
              This email contains information about a new application. 
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default EmailTemplateForApplication;
  
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
    padding: "30px 30px 40px 30px",
  };
  
  const sectionTitle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
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