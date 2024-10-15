import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate = () => {
  const siteLogo = process.env.NEXT_PUBLIC_DOMAIN + "/logos/coderfpv.png";
  return (
    <Html>
      <Head />
      <Preview>{`You’re on the waitlist for ${process.env.NEXT_PUBLIC_SITE_NAME}`}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            style={img}
            src={process.env.NEXT_PUBLIC_LOGO || siteLogo}
            width="100"
            height="100"
            alt="Logo"
          />
          <Section>
            <Text
              style={text}
            >{`Big welcome and thanks for subscribing ${process.env.NEXT_PUBLIC_SITE_NAME}`}</Text>
            <Text style={text}>
              🚀 The mission is to rengineer the future of flight 
            </Text>
            <Text style={text}>
              🛳 We have got courses and 
            </Text>
            <Text style={text}>Expect a new shipment every Tuesday!</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const img = {
  paddingTop: "40px",
  margin: "0 auto",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "400",
  color: "#404040",
  lineHeight: "26px",
  // padding: "0 40px",
};

const anchor = {
  textDecoration: "underline",
};
