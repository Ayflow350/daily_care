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
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ReleaseOfInformationEmail = ({}) => (
  <Html>
    <Head />
    <Preview>Stack overflow tips for searching</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logo}>
          <Img
            width={246}
            src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1714690065/main_dj2ypu.png`}
          />
        </Section>

        <Section style={header}>
          <Row>
            <Column style={headerContent}>
              <Heading style={headerContentTitle}>
                RELEASE OF INFORMATION
              </Heading>
            </Column>
            <Column style={headerImageContainer}>
              <Img
                style={headerImage}
                width={340}
                src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1715211850/stack-overflow-header_gj0ypu.png`}
              />
            </Column>
          </Row>
        </Section>

        <Section style={content}>
          <Heading as="h2" style={title}>
            RELEASE OF INFORMATION
          </Heading>
          <Text style={paragraph}>
            I hereby authorized all prior employers, schools, credit bureaus,
            social security Administration. Law enforcement agencies and
            investigative agencies to give Daily Care Support Services, Inc all
            information concerning my previous employment and any pertinent
            information they may have personal or otherwise, concerning my
            qualifications for the position applied for. I release to Daily Care
            Support Services, Inc and all its employees form all liability for
            any damage that may result from furnishing information to Daily Care
            Support Services, Inc I also release to Daily Care Support Services,
            Inc and all its employees from all liability for any damage that may
            result from reliance on the information furnished. I understand that
            if a consumer investigative report is requested, I have the right
            under the Fair Credit Reporting Act to request in writing, within a
            reasonable time, a complete and accurate disclosure of the nature
            and scope of the investigation. This written request should be
            addressed to the location where this application is filed.
          </Text>

          <Hr style={divider} />

          <Text style={title}>
            Signature of applicant:_________ Date:____________
          </Text>

          <Text style={title}>
            Full Name:_________ Social Security:____________
          </Text>
        </Section>
      </Container>

      <Section style={footer}>
        <Text style={footerText}>
          You're receiving this email because your Stack Overflow activity
          triggered this tip or reminder.
        </Text>

        <Link href="/" style={footerLink}>
          Unsubscribe from emails like this{" "}
        </Link>
        <Link href="/" style={footerLink}>
          Edit email settings{" "}
        </Link>
        <Link href="/" style={footerLink}>
          Contact us
        </Link>
        <Link href="/" style={footerLink}>
          Privacy
        </Link>

        <Hr style={footerDivider} />

        <Img width={111} src={`${baseUrl}/static/stack-overflow-logo-sm.png`} />
        <Text style={footerAddress}>
          <strong>Stack Overflow</strong>, 110 William Street, 28th Floor, New
          York, NY 10038
        </Text>
        <Text style={footerHeart}>{"<3"}</Text>
      </Section>
    </Body>
  </Html>
);

export default StackOverflowTipsEmail;

const main = {
  backgroundColor: "#f3f3f5",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const headerContent = { padding: "20px 30px 15px" };

const headerContentTitle = {
  color: "#fff",
  fontSize: "27px",
  fontWeight: "bold",
  lineHeight: "27px",
};

const headerContentSubtitle = {
  color: "#fff",
  fontSize: "17px",
};

const headerImageContainer = {
  padding: "30px 10px",
};

const headerImage = {
  maxWidth: "100%",
};

const title = {
  margin: "0 0 15px",
  fontWeight: "bold",
  fontSize: "21px",
  lineHeight: "21px",
  color: "#0c0d0e",
};

const paragraph = {
  fontSize: "15px",
  lineHeight: "21px",
  color: "#3c3f44",
};

const divider = {
  margin: "30px 0",
};

const container = {
  width: "680px",
  maxWidth: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

const footer = {
  width: "680px",
  maxWidth: "100%",
  margin: "32px auto 0 auto",
  padding: "0 30px",
};

const content = {
  padding: "30px 30px 40px 30px",
};

const logo = {
  display: "flex",
  background: "#f3f3f5",
  padding: "20px 30px",
};

const header = {
  borderRadius: "5px 5px 0 0",
  display: "flex",
  flexDireciont: "column",
  backgroundColor: "#2b2d6e",
};

const buttonContainer = {
  marginTop: "24px",
  display: "block",
};

const button = {
  backgroundColor: "#0095ff",
  border: "1px solid #0077cc",
  fontSize: "17px",
  lineHeight: "17px",
  padding: "13px 17px",
  borderRadius: "4px",
  maxWidth: "120px",
  color: "#fff",
};

const footerDivider = {
  ...divider,
  borderColor: "#d6d8db",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
  margin: "0",
};

const footerLink = {
  display: "inline-block",
  color: "#9199a1",
  textDecoration: "underline",
  fontSize: "12px",
  marginRight: "10px",
  marginBottom: "0",
  marginTop: "8px",
};

const footerAddress = {
  margin: "4px 0",
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
};

const footerHeart = {
  borderRadius: "1px",
  border: "1px solid #d6d9dc",
  padding: "4px 6px 3px 6px",
  fontSize: "11px",
  lineHeight: "11px",
  fontFamily: "Consolas,monospace",
  color: "#e06c77",
  maxWidth: "min-content",
  margin: "0 0 32px 0",
};
