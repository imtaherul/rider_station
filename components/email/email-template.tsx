import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { MoveHorizontal } from "lucide-react";
import * as React from "react";

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  service: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  company,
  city,
  service,
  message,
}) => (
  <Html>
    <Head />
    <Preview>Get your order summary, estimated delivery date and more</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={messagecss}>
          <Heading style={global.heading}>Rider Station Support</Heading>
          <Text style={global.paragraphWithBold}>
            Hi {firstName} {lastName},
          </Text>
          <Text style={{ ...global.text }}>
            Thank you for contacting us! We have received your message and our
            team will get back to you as soon as possible. We strive to respond
            within 24-48 hours.
          </Text>
        </Section>
        <Hr style={global.hr} />

        <Section style={menu.container}>
          <Row style={menu.content}>
            <Text style={menu.title}>Copy of your Message:</Text>
            <Text style={{ ...global.text }}>Email: {email}</Text>
            <Text style={{ ...global.text }}>phoneNumber: {phone}</Text>
            <Text style={{ ...global.text }}>Company: {company}</Text>
            <Text style={{ ...global.text }}>City: {city}</Text>
            <Text style={{ ...global.text }}>Subject: {service}</Text>
            <Text style={{ ...global.text }}>Message: {message}</Text>
          </Row>
          <Hr style={global.hr} />
          <Row style={menu.content}>
            <Text style={menu.title}>Get Help</Text>
            <Text style={global.paragraphWithBold}>
              If your inquiry is urgent, you can also reach us whatsapp or call.
              We appreciate your interest and look forward to assisting you!
            </Text>
          </Row>
          <Hr style={global.hr} />
          <Row style={menu.tel}>
            <Column align="center">
              <Text style={{ ...menu.text, marginBottom: "0" }}>
                +966581577537
              </Text>
            </Column>
            <Column align="center">
              <Text
                style={{
                  ...menu.text,
                  marginBottom: "0",

                  paddingLeft: "2",
                  paddingRight: "2",
                }}
              >
                :
              </Text>
            </Column>
            <Column align="center">
              <Text
                style={{
                  ...menu.text,
                  marginBottom: "0",
                }}
              >
                10am - 08pm (GMT+3)
              </Text>
            </Column>
          </Row>
        </Section>
        <Hr style={global.hr} />
        <Section style={paddingY}>
          <Row>
            <Text style={global.heading}>riderstation.com</Text>
          </Row>
          <Row style={categories.container}>
            <Column align="center">
              <Link href="/" style={categories.text}>
                Rider
              </Link>
            </Column>
            <Column align="center">
              <Text
                style={{
                  ...menu.text,
                  marginBottom: "0",
                  paddingLeft: "2",
                  paddingRight: "2",
                }}
              >
                -
              </Text>
            </Column>
            <Column align="center">
              <Link href="/" style={categories.text}>
                Manpower
              </Link>
            </Column>
            <Column align="center">
              <Text
                style={{
                  ...menu.text,
                  marginBottom: "0",
                  paddingLeft: "2",
                  paddingRight: "2",
                }}
              >
                -
              </Text>
            </Column>
            <Column align="center">
              <Link href="/" style={categories.text}>
                Logistics
              </Link>
            </Column>
            <Column align="center">
              <Text
                style={{
                  ...menu.text,
                  marginBottom: "0",
                  paddingLeft: "2",
                  paddingRight: "2",
                }}
              >
                -
              </Text>
            </Column>
            <Column align="center">
              <Link href="/" style={categories.text}>
                Success
              </Link>
            </Column>
          </Row>
        </Section>
        <Hr style={{ ...global.hr, marginTop: "12px" }} />
        <Section style={paddingY}>
          <Row style={footer.policy}>
            <Column>
              <Text style={footer.text}>Web Version</Text>
            </Column>
            <Column>
              <Text style={footer.text}>Privacy Policy</Text>
            </Column>
          </Row>
          <Row>
            <Text style={footer.text}>
              © 2025 Rider Station company litmited. All Rights Reserved.
            </Text>
          </Row>
          <Row>
            <Text style={footer.text}>
              Istanbul street, Al sulai Riyadh 14327 SA.
            </Text>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  } as React.CSSProperties,
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

// const track = {
//   container: {
//     padding: "22px 40px",
//     backgroundColor: "#F7F7F7",
//   },
//   number: {
//     margin: "12px 0 0 0",
//     fontWeight: 500,
//     lineHeight: "1.4",
//     color: "#6F6F6F",
//   },
// };

const messagecss = {
  padding: "40px 74px",
  textAlign: "center",
} as React.CSSProperties;

// const adressTitle = {
//   ...paragraph,
//   fontSize: "15px",
//   fontWeight: "bold",
// };

// const recomendationsText = {
//   margin: "0",
//   fontSize: "15px",
//   lineHeight: "1",
//   paddingLeft: "10px",
//   paddingRight: "10px",
// };

// const recomendations = {
//   container: {
//     padding: "20px 0",
//   },
//   product: {
//     verticalAlign: "top",
//     textAlign: "left" as const,
//     paddingLeft: "2px",
//     paddingRight: "2px",
//   },
//   title: { ...recomendationsText, paddingTop: "12px", fontWeight: "500" },
//   text: {
//     ...recomendationsText,
//     paddingTop: "4px",
//     color: "#747474",
//   },
// };

const menu = {
  container: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "20px",
    backgroundColor: "#F7F7F7",
  },
  content: {
    ...paddingY,
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  title: {
    paddingLeft: "20px",
    paddingRight: "20px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "13.5px",
    marginTop: 0,
    fontWeight: 500,
    color: "#000",
  },
  tel: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "32px",
    paddingBottom: "22px",
  },
};

const categories = {
  container: {
    width: "370px",
    margin: "auto",
    paddingTop: "12px",
  },
  text: {
    fontWeight: "500",
    color: "#000",
    paddingRight: "2px",
  },
};

const footer = {
  policy: {
    width: "166px",
    margin: "auto",
  },
  text: {
    margin: "0",
    color: "#AFAFAF",
    fontSize: "13px",
    textAlign: "center",
  } as React.CSSProperties,
};
