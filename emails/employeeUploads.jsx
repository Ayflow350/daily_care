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
                <Text style={textCard}>
                  This week we move from 2 dimensions to three! Maybe you could
                  exercise your <Link style={blueLink}>perspective</Link> in CSS
                  to create a 3D cube. Or, you can try out creating 3D shapes in
                  JavaScript, using <Link style={blueLink}>WebGL</Link> or
                  building a <Link style={blueLink}>Three.js scene</Link>.
                </Text>
              </Section>

              <Section style={yellowCard}>
                <Img
                  src="https://res.cloudinary.com/drczkfgqp/image/upload/v1715475053/11._Emp_Add_Change_Form_Rev_Jan_2020_5_cbdnfj.pdf"
                  alt="Cuboid Shapes"
                  style={cardImage}
                />
                <Text style={textCard}>
                  There's more to cubes than just six square sides. There are
                  variations on the cube that could be fun to play with this
                  week: <Link style={blueLink}>cuboid shapes</Link> are
                  hexahedrons with faces that aren't always squares. And if you
                  want to really push the boundaries of shape, consider the 4
                  dimensional <Link style={blueLink}>tesseract!</Link>
                </Text>
              </Section>

              <Section style={yellowCard}>
                <Img
                  src="https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg"
                  alt="Spherical Cubes"
                  style={cardImage}
                />
                <Text style={textCard}>
                  Here's a mind-bending idea that can combine the round shapes
                  from week one with this week's cube theme:{" "}
                  <Link style={blueLink}>Spherical Cubes</Link> 😳 Solving
                  longstanding mathematical mysteries is probably outside the
                  scope of a CodePen challenge, but you could use front-end
                  tools to explore fitting spheres into cubes, or vice-versa.
                </Text>
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
                <Text style={textCard}>
                  Learn all about{" "}
                  <Link style={blueLink}>How CSS Perspective Works</Link> and
                  how to build a 3D CSS cube from scratch in Amit Sheen's
                  in-depth tutorial for CSS-Tricks. Or, check out stunning
                  examples of WebGL cubes from Matthias Hurrle:{" "}
                  <Link style={blueLink}>Just Ice</Link> and{" "}
                  <Link style={blueLink}>Posing</Link>.
                </Text>
              </Section>

              <Section style={blueCard}>
                <Img
                  src="https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg"
                  alt="Pulsating Tesseract"
                  style={cardImage}
                />
                <Text style={textCard}>
                  Want to go beyond the square cube? Draw inspiration from
                  EntropyReversed's{" "}
                  <Link style={blueLink}>Pulsating Tesseract</Link>, Josetxu's{" "}
                  <Link style={blueLink}>Rainbow Cuboid Loader</Link>, or Ana
                  Tudor's{" "}
                  <Link style={blueLink}>Pure CSS cuboid jellyfish</Link>.
                </Text>
              </Section>

              <Section style={blueCard}>
                <Img
                  src="https://res.cloudinary.com/drczkfgqp/image/upload/v1716299673/ep0zlnyqrgz8s9swgbqg.jpg"
                  alt="Cube Sphere"
                  style={cardImage}
                />
                <Text style={textCard}>
                  Did that spherical cubes concept pique your interest? Explore
                  Ryan Mulligan's <Link style={blueLink}>Cube Sphere</Link>,
                  Munir Safi's{" "}
                  <Link style={blueLink}>
                    3D Sphere to Cube Animation With Virtual Trackball
                  </Link>{" "}
                  and Ana Tudor's{" "}
                  <Link style={blueLink}>Infinitely unpack prism</Link> for more
                  mindbending cube concepts that test the boundaries of how
                  shapes interact with each other.
                </Text>
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

const blueLink = {
  color: "#15c",
  cursor: "pointer",
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

const goToChallenge = {
  margin: "40px 0 120px 0",
  textAlign: "center",
};

const footerButton = {
  fontSize: "26px",
  color: "#15c",
  background: "#222",
  borderRadius: "4px",
  fontWeight: "bold",
  cursor: "pointer",
  padding: "15px 30px",
};

const footer = {
  background: "#fff",
  color: "#505050",
  padding: "0 24px",
  marginBottom: "48px",
};

const footerText = {
  fontSize: "13px",
};

const footerLink = {
  textDecoration: "underline",
  color: "#505050",
  cursor: "pointer",
};

const cardImage = {
  width: "100%",
  height: "auto",
  borderRadius: "10px",
  marginBottom: "10px",
};
