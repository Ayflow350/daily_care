import React from 'react';
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
} from '@react-email/components';



// React functional component for the email
const ApplicationEmailTemplate = (
    
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
) => {


  return (
    <Html>
      <Head />
      <Preview>Stack Overflow tips for searching</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Section style={styles.logo}>
            <Img width={346} src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1714690065/main_dj2ypu.png`} />
          </Section>

          <Section style={styles.header}>
            <Row>
              <Column style={styles.headerContent}>
                <Heading style={styles.headerContentTitle}>Referral for Daily Care Support Services</Heading>
               
              </Column>
              <Column style={styles.headerImageContainer}>
                <Img style={styles.headerImage} width={340} src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1715211850/stack-overflow-header_gj0ypu.png`} />
              </Column>
            </Row>
          </Section>

          <Section style={styles.content}>
            <Heading as="h2" style={styles.title}>Searching for solutions</Heading>
            <Text style={styles.paragraph}>
              With more than 18 million questions, it's possible that someone has already provided a solution to the problem you're facing.
            </Text>

            <Hr style={styles.divider} />

            <Section style={styles.content}>
                  <Text style={styles.paragraph}>
                      <strong>Date of Application:</strong> {applicationDate}
                  </Text>
                  <Text style={styles.paragraph}>
                      <strong>Full Name:</strong> {fullName}
                  </Text>
                  <Text style={styles.paragraph}>
                      <strong>Email Address:</strong> {email}
                  </Text>
                  <Text style={styles.paragraph}>
                      <strong>Home Phone:</strong> {homePhone}
                  </Text>
                  <Text style={styles.paragraph}>
                      <strong>Mobile Phone:</strong> {mobile}
                  </Text>
                  <Text style={styles.paragraph}>
                      <strong>Address:</strong> {address}, {city}, {state}, {zipCode}
                  </Text>
                  <Text style={styles.paragraph}>
                      <strong>Position Applied For:</strong> {position}
                  </Text>
              </Section>

            

           

           
           
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              You're receiving this email because your Stack Overflow activity triggered this tip or reminder.
            </Text>

            <Link href="/" style={styles.footerLink}>Unsubscribe from emails like this</Link>
            <Link href="/" style={styles.footerLink}>Edit email settings</Link>
            <Link href="/" style={styles.footerLink}>Contact us</Link>
            <Link href="/" style={styles.footerLink}>Privacy</Link>

            <Hr style={styles.footerDivider} />

            {/* <Img width={111} src={`${baseUrl}/static/stack-overflow-logo-sm.png`} /> */}
            <Text style={styles.footerAddress}>
              <strong>Stack Overflow</strong>, 110 William Street, 28th Floor, New York, NY 10038
            </Text>
            <Text style={styles.footerHeart}>{"<3"}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ApplicationEmailTemplate;

// Styles for the email component
const styles = {
  main: {
    backgroundColor: "#f3f3f5",
    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  },
  container: {
    width: "680px",
    maxWidth: "100%",
    margin: "0 auto",
   
    backgroundColor: "#ffffff",
  },
  logo: {
    display: "flex",
    background: "#f3f3f5",
    padding: "20px 30px",
  },
  header: {
    borderRadius: "5px 5px 0 0",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#2b2d6e",
  },
  headerContent: {
    padding: "20px 30px 15px",
  },
  headerContentTitle: {
    color: "#fff",
    fontSize: "27px",
    fontWeight: "bold",
    lineHeight: "27px",
  },
  headerContentSubtitle: {
    color: "#fff",
    fontSize: "17px",
  },
  headerImageContainer: {
    padding: "30px 10px",
  },
  headerImage: {
    maxWidth: "100%",
  },

 content: {
    padding: "20px 30px",
  },
  
 
  title: {
    margin: "0 0 15px",
    fontWeight: "bold",
    fontSize: "21px",
    lineHeight: "21px",
    color: "#0c0d0e",
  },
  paragraph: {
    fontSize: "15px",
    lineHeight: "21px",
    color: "#3c3f44",
  },
  divider: {
    margin: "30px 0",
  },
  buttonContainer: {
    marginTop: "24px",
    display: "block",
  },
  button: {
    backgroundColor: "#0095ff",
    border: "1px solid #0077cc",
    fontSize: "17px",
    lineHeight: "17px",
    padding: "13px 17px",
    borderRadius: "4px",
    maxWidth: "120px",
    color: "#fff",
  },
  footer: {
    width: "680px",
    maxWidth: "100%",
    margin: "32px auto 0 auto",
    padding: "0 30px",
  },
 
  footerText: {
    fontSize: "12px",
    lineHeight: "15px",
    color: "#9199a1",
    margin: "0",
  },
  footerLink: {
    display: "inline-block",
    color: "#9199a1",
    textDecoration: "underline",
    fontSize: "12px",
    marginRight: "10px",
    marginBottom: "0",
    marginTop: "8px",
  },
  footerAddress: {
    margin: "4px 0",
    fontSize: "12px",
    lineHeight: "15px",
    color: "#9199a1",
  },
  footerHeart: {
    borderRadius: "1px",
    border: "1px solid #d6d9dc",
    padding: "4px 6px 3px 6px",
    fontSize: "11px",
    lineHeight: "11px",
    fontFamily: "Consolas, monospace",
    color: "#e06c77",
    maxWidth: "min-content",
    margin: "0 0 32px 0",
  },
};