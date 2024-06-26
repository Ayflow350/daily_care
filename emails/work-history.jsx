import React from "react";
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

// Default tips data
const defaultTips = [
  {
    id: 1,
    description:
      'To find a specific phrase, enter it in quotes: "local storage"',
  },
  {
    id: 2,
    description:
      "To search within specific tag(s), enter them in square brackets: [javascript]",
  },
  {
    id: 3,
    description:
      'Combine them to get even more precise results - [javascript] "local storage" searches for the phrase “local storage” in questions that have the [javascript] tag.',
  },
];

const data = {
  address: "Neque quidem ea quos",
  agree: true,
  applicationDate: "10-Apr-2012",
  applyPosition: "Fuga Laborum Deser",
  city: "Quia dolor eligendi",
  collegeAreaOfStudy: "Sed sunt repudiandae",
  collegeDateAttended: "Cody",
  collegeDiploma: false,
  contactAtWork: false,
  contactEmployer: false,
  correspondenceAddress: "Cillum eaque ipsum",
  dates: "3",
  eligibleToWork: false,
  email: "hujudoqo@mailinator.com",
  employer: "Molestiae voluptatum",
  endingSalary: "Quasi repudiandae it",
  firstName: "Ella",
  fullName: "Gavin Foley",
  highSchoolAreaOfStudy: "Cupiditate quo liber",
  highSchoolDateAttended: "Chadwick",
  highSchoolDiploma: false,
  highSchoolNameAndAddress: "Conan Deleon",
  homeAddress: "Ab commodi est reic",
  homePhone: "+1 (222) 236-3158",
  lastName: "xepafohak@mailinator.com",
  message: "Odit blanditiis id",
  mobile: "+1 (755) 456-4299",
  mrMrs: "Adipisci nihil tenet",
  position: "Cillum sunt sint vo",
  professionalTrainings: "Magnam quis architec",
  reason: "Non ut in voluptatum",
  signatureImage: "",
  startingSalary: "Id ad error voluptas",
  state: "In temporibus quia r",
  workPermitOrVisa: false,
  zipCode: "31181",
};

// React functional component for the email
const ApplicationEmailTemplate = (
  {
    //   employer,
    //   dates,
    //   position,
    //   reason,
    //   startingSalary,
    //   endingSalary,
    //   contactEmployer,
    //   message,
  }
) => {
  return (
    <Html>
      <Head />
      <Preview>Stack Overflow tips for searching</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Section style={styles.logo}>
            <Img
              width={346}
              src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1714690065/main_dj2ypu.png`}
            />
          </Section>

          <Section style={styles.header}>
            <Row>
              <Column style={styles.headerContent}>
                <Heading style={styles.headerContentTitle}>
                  Referral for Daily Care Support Services
                </Heading>
              </Column>
              <Column style={styles.headerImageContainer}>
                <Img
                  style={styles.headerImage}
                  width={340}
                  src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1715211850/stack-overflow-header_gj0ypu.png`}
                />
              </Column>
            </Row>
          </Section>

          <Section style={styles.content}>
            <Heading as="h2" style={styles.title}>
              Hey!! 🥰 You've received a referral from
              {/* {refreeal name} */}
            </Heading>
            <Text style={styles.paragraph}>
              With Daily Care Services' extensive network of caregivers, we can
              connect you with the ideal person to meet your specific needs.
            </Text>

            <Container style={container}>
              <Section style={section}>
                <>
                  <Column style={ideas}>
                    <Section style={yellowCard}>
                      <b style={subtitle}>mrMrs</b>
                      <Text style={textCard}>{data.mrMrs}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>firstName</b>
                      <Text style={textCard}>{data.firstName}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>lastName</b>
                      <Text style={textCard}>{data.lastName}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>homePhone</b>
                      <Text style={textCard}>{data.homePhone}</Text>
                    </Section>
                  </Column>

                  <Column style={ideas}>
                    <Section style={yellowCard}>
                      <b style={subtitle}>homePhone</b>
                      <Text style={textCard}>{data.homePhone}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>Ending Salary</b>
                      <Text style={textCard}>{data.correspondenceAddress}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>May we contact at work</b>
                      <Text style={textCard}>{data.contactAtWork}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>Eligibilty to work in the us:</b>
                      <Text style={textCard}>{data.eligibleToWork}</Text>
                    </Section>
                  </Column>
                </>
              </Section>
            </Container>
          </Section>

          <Section style={styles.content}>
            <Heading as="h2" style={styles.title}>
              Hey!! 🥰 You've received a referral from
              {/* {refreeal name} */}
            </Heading>
            <Text style={styles.paragraph}>
              With Daily Care Services' extensive network of caregivers, we can
              connect you with the ideal person to meet your specific needs.
            </Text>

            <Container style={container}>
              <Section style={section}>
                <>
                  <Column style={ideas}>
                    <Section style={yellowCard}>
                      <b style={subtitle}>Application:</b>
                      <Text style={textCard}>{data.applicationDate}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>Email Address</b>
                      <Text style={textCard}>{data.email}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>Full Name</b>
                      <Text style={textCard}>{data.fullName}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>Reason for leaving</b>
                      <Text style={textCard}>{data.reason}</Text>
                    </Section>
                  </Column>

                  <Column style={ideas}>
                    <Section style={yellowCard}>
                      <b style={subtitle}>Contacting employer</b>
                      <Text style={textCard}>{data.contactEmployer}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>City</b>
                      <Text style={textCard}>{data.city}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>State</b>
                      <Text style={textCard}>{data.state}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>Zip code</b>
                      <Text style={textCard}>{data.zipCode}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>Position</b>
                      <Text style={textCard}>{data.position}</Text>
                    </Section>
                  </Column>
                </>
              </Section>
            </Container>
          </Section>

          <Section style={styles.content}>
            <Heading as="h2" style={styles.title}>
              Hey!! 🥰 You've received a referral from
              {/* {refreeal name} */}
            </Heading>
            <Text style={styles.paragraph}>
              With Daily Care Services' extensive network of caregivers, we can
              connect you with the ideal person to meet your specific needs.
            </Text>

            <Container style={container}>
              <Section style={section}>
                <>
                  <Column style={ideas}>
                    <Section style={yellowCard}>
                      <b style={subtitle}>highSchoolNameAndAddress</b>
                      <Text style={textCard}>
                        {data.highSchoolNameAndAddress}
                      </Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>highSchoolDateAttended</b>
                      <Text style={textCard}>
                        {data.highSchoolDateAttended}
                      </Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>highSchoolAreaOfStudy</b>
                      <Text style={textCard}>{data.highSchoolAreaOfStudy}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>highSchoolDiploma</b>
                      <Text style={textCard}>{data.highSchoolDiploma}</Text>
                    </Section>
                  </Column>

                  <Column style={ideas}>
                    <Section style={yellowCard}>
                      <b style={subtitle}>collegeAreaOfStudy</b>
                      <Text style={textCard}>{data.collegeAreaOfStudy}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>collegeDateAttended</b>
                      <Text style={textCard}>{data.collegeDateAttended}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>collegeDiploma</b>
                      <Text style={textCard}>{data.collegeDiploma}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>collegeDateAttended</b>
                      <Text style={textCard}>{data.collegeDateAttended}</Text>
                    </Section>
                  </Column>
                </>
              </Section>
            </Container>
          </Section>
          <Section style={styles.content}>
            <Heading as="h2" style={styles.title}>
              Hey!! 🥰 You've received a referral from
              {/* {refreeal name} */}
            </Heading>
            <Text style={styles.paragraph}>
              With Daily Care Services' extensive network of caregivers, we can
              connect you with the ideal person to meet your specific needs.
            </Text>

            <Container style={container}>
              <Section style={section}>
                <>
                  <Column style={ideas}>
                    <Section style={yellowCard}>
                      <b style={subtitle}>EMPLOYER AND ADDRESS:</b>
                      <Text style={textCard}>{data.employer}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>Dates (month/year)</b>
                      <Text style={textCard}>{data.dates}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>Postion Held</b>
                      <Text style={textCard}>{data.position}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>Reason for leaving</b>
                      <Text style={textCard}>{data.reason}</Text>
                    </Section>
                  </Column>

                  <Column style={ideas}>
                    <Section style={yellowCard}>
                      <b style={subtitle}>Contacting employer</b>
                      <Text style={textCard}>{data.startingSalary}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>Ending Salary</b>
                      <Text style={textCard}>{data.endingSalary}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>May we contact this employer?</b>
                      <Text style={textCard}>{data.contactEmployer}</Text>
                    </Section>

                    <Section style={yellowCard}>
                      <b style={subtitle}>If No, please indicate reason:</b>
                      <Text style={textCard}>{data.message}</Text>
                    </Section>
                  </Column>
                </>
              </Section>
            </Container>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              You're receiving this email because your Stack Overflow activity
              triggered this tip or reminder.
            </Text>

            <Link href="/" style={styles.footerLink}>
              Unsubscribe from emails like this
            </Link>
            <Link href="/" style={styles.footerLink}>
              Edit email settings
            </Link>
            <Link href="/" style={styles.footerLink}>
              Contact us
            </Link>
            <Link href="/" style={styles.footerLink}>
              Privacy
            </Link>

            <Hr style={styles.footerDivider} />

            {/* <Img width={111} src={`${baseUrl}/static/stack-overflow-logo-sm.png`} /> */}
            <Text style={styles.footerAddress}>
              <strong>Stack Overflow</strong>, 110 William Street, 28th Floor,
              New York, NY 10038
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
    padding: "30px 30px 40px 30px",
  },
  title: {
    margin: "0 0 15px",
    fontWeight: "bold",
    fontSize: "21px",
    lineHeight: "21px",
    color: "#0c0d0e",
  },

  subtitle: {
    margin: "0 0 15px",
    fontWeight: "bold",
    fontSize: "16px",
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

const container = {
  width: "648px",
  maxWidth: "100%",
  position: "relative",
  alignItems: "center",
};
const section = {
  background: "#2A2D6E",
  padding: "24px 24px",
};
const subtitle = {
  fontSize: "16px",
  textAlign: "left",
};

const ideas = {
  width: "50%",
  paddingRight: "10px",
};

const card = {
  padding: "20px",
  margin: "0 0 20px 0",
  borderRadius: "10px",
  fontSize: "12px",
};

const yellowCard = {
  ...card,
  background: "#fff",
};

const textCard = {
  fontSize: "13px",
  textAlign: "left",
  marginTop: "0",
};
