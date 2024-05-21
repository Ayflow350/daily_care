import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Column,
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

export const CodepenChallengersEmail = () => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Section style={section}>
          <Row>
            <Column style={ideas}>
              <Text style={ideasTitle}>IDEAS!</Text>

              <Section style={yellowCard}>
                <Img
                  src="https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg"
                  alt="3D Cube"
                  style={cardImage}
                />
                <Text style={textCard}>CJIS</Text>
                <Link
                  href={`https://res.cloudinary.com/drczkfgqp/image/upload/v1715475053/11._Emp_Add_Change_Form_Rev_Jan_2020_5_cbdnfj.pdf`}
                  target="_blank"
                >
                  Download PDF
                </Link>
              </Section>

              <Section style={yellowCard}>
                <Img
                  src="https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg"
                  alt="3D Cube"
                  style={cardImage}
                />
                <Text style={textCard}>TaxPayer Identification</Text>
                <Link
                  href={`https://res.cloudinary.com/drczkfgqp/image/upload/v1715475053/11._Emp_Add_Change_Form_Rev_Jan_2020_5_cbdnfj.pdf`}
                  target="_blank"
                >
                  Download PDF
                </Link>
              </Section>

              <Section style={yellowCard}>
                <Img
                  src="https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg"
                  alt="Spherical Cubes"
                  style={cardImage}
                />
                <Text style={textCard}>Payroll</Text>
                <Link
                  href={`https://res.cloudinary.com/drczkfgqp/image/upload/v1715475053/11._Emp_Add_Change_Form_Rev_Jan_2020_5_cbdnfj.pdf`}
                  target="_blank"
                >
                  Download PDF
                </Link>
              </Section>
            </Column>
            <Column style={resources}>
              <Text style={resourcesTitle}>RESOURCES!</Text>

              <Section style={blueCard}>
                <Img
                  src="https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg"
                  alt="CSS Perspective"
                  style={cardImage}
                />
                <Text style={textCard}>Employment Eligibility</Text>
                <Link
                  href={`https://res.cloudinary.com/drczkfgqp/image/upload/v1715475053/11._Emp_Add_Change_Form_Rev_Jan_2020_5_cbdnfj.pdf`}
                  target="_blank"
                >
                  Download PDF
                </Link>
              </Section>

              <Section style={blueCard}>
                <Img
                  src="https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg"
                  alt="Pulsating Tesseract"
                  style={cardImage}
                />
                <Text style={textCard}>Physical Examination</Text>
                <Link
                  href={`https://res.cloudinary.com/drczkfgqp/image/upload/v1715475053/11._Emp_Add_Change_Form_Rev_Jan_2020_5_cbdnfj.pdf`}
                  target="_blank"
                >
                  Download PDF
                </Link>
              </Section>

              <Section style={blueCard}>
                <Img
                  src="https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg"
                  alt="Pulsating Tesseract"
                  style={cardImage}
                />
                <Text style={textCard}>Employee withholding cert</Text>
                <Link
                  href={`https://res.cloudinary.com/drczkfgqp/image/upload/v1715475053/11._Emp_Add_Change_Form_Rev_Jan_2020_5_cbdnfj.pdf`}
                  target="_blank"
                >
                  Download PDF
                </Link>
              </Section>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default CodepenChallengersEmail;

const main = {
  fontFamily: '"Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif',
  backgroundColor: "#505050",
  margin: "0",
};

const container = {
  margin: "0 auto",
  width: "648px",
  maxWidth: "100%",
  position: "relative",
};

const section = {
  margin: "0",
  background: "#fff",
  padding: "0 24px",
};

const resourcesTitle = {
  fontWeight: "900",
  lineHeight: "1.1",
  marginTop: "-40px",
  fontSize: "18px",
};

const ideasTitle = {
  fontWeight: "900",
  lineHeight: "1.1",
  fontSize: "18px",
};

const ideas = {
  width: "50%",
  paddingRight: "10px",
};

const resources = {
  width: "50%",
  paddingLeft: "10px",
};

const card = {
  padding: "20px",
  margin: "0 0 20px 0",
  borderRadius: "10px",
  fontSize: "36px",
  textAlign: "center",
};

const yellowCard = {
  ...card,
  background: "#fff4c8",
  border: "1px solid #f4d247",
};

const blueCard = {
  ...card,
  background: "#d9f6ff",
  border: "1px solid #92bfd0",
};

const textCard = {
  fontSize: "13px",
  textAlign: "left",
};

const cardImage = {
  width: "100%",
  height: "auto",
  borderRadius: "10px",
  marginBottom: "10px",
};
