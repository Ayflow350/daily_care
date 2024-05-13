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

const StackOverflowTipsEmailProps = {
  tips: [
    {
      id: 1,
      description:
        'To find a specific phrase, enter it in quotes: "local storage"',
    },
    {
      id: 1,
      description:
        "To search within specific tag(s), enter them in square brackets: [javascript]",
    },
    {
      id: 1,
      description:
        'Combine them to get even more precise results - [javascript] "local storage" searches for the phrase “local storage” in questions that have the [javascript] tag',
    },
  ],
};

export const StackOverflowTipsEmail = ({}) => (
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
                CONFIDENTIAL AGREEMENT
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
            CONFIDENTIAL AGREEMENT
          </Heading>
          <Text style={paragraph}>
            I agree that except at the request and for the benefit of Daily Care
            Support Services, Inc I will not disclose to anyone or use for my
            own purposes any of Daily Care Support Services, Inc confidential or
            proprietary information, either during or after my employment. I
            understand and agree that Daily Care Support Services, Inc bidding,
            costs, pricing and marketing information and techniques, customer
            names and information, and employee name and information are
            confidential and proprietary to Daily Care Support Services, Inc I
            certify that this application contains no willful misrepresentation
            or falsifications and that this information given by me is true and
            complete to the best of my knowledge and belief. I authorized Daily
            Care Support Services, Inc to contact all sources to verify the
            information on this application. I understand that any
            falsification, misrepresentation, or fraudulent information provided
            by me in connection with my application for employment is sufficient
            grounds for withdrawal of an employment offer or immediate
            discharge.
          </Text>

          <Hr style={divider} />

          <Text style={paragraph}>
            I authorized and requested my former employers, references, and
            educational institutions which have information about me, to give
            Daily Care Support Services, Inc all information and opinions about
            me in their possession and which may lawfully be disclosed. I hereby
            waive written notice of such release of information and opinions,
            and release such former employers, references, and educational
            institutions from any liability or claim relating to such release of
            information and opinions. I also authorized and request federal,
            state, and local governmental agencies to release Daily Care Support
            Services, Inc any information requested, concerning any criminal
            convictions on my record. A photocopy of this signed authorization
            and waiver shall be valid as an original.
          </Text>

          <Text style={title}>If no, please indicate your reason</Text>

          <Hr style={divider} />

          <Heading as="h2" style={title}>
            DECLARATION
          </Heading>
          <Text style={paragraph}>
            By signing below, I, _ _ _, on the date of _ , hereby certify that
            all information included in the above application is true and valid
            to the best of my knowledge. I also understand that
            misrepresentation or falsification of the information provided above
            will result in my immediate disqualification from the selection
            process and dismissal from any position appointed to by the Agency
            after discovery.{" "}
          </Text>

          <Text style={title}>
            Signature of applicant:_________ Date:____________
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
