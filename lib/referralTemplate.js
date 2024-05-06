import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Section,
    Text,
    Link,
  } from "@react-email/components";
  
  const ReferralEmailTemplate = ({ referrerName, referrerEmail, refereeName, refereeEmail, refereePhone }) => (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>New Referral</Heading>
            <Text style={headerSubtitle}>You've received a new referral. Here are the details:</Text>
          </Section>
  
          <Section style={content}>
            <Text style={paragraph}>
              <strong>Referrer:</strong> {referrerName} ({referrerEmail})
            </Text>
            <Text style={paragraph}>
              <strong>Referee:</strong> {refereeName} ({refereeEmail}, {refereePhone})
            </Text>
          </Section>
  
          <Section style={footer}>
            <Text style={footerText}>
              This email contains information about a new referral.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default ReferralEmailTemplate;
  
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
  