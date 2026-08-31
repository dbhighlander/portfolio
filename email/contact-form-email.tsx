import React from "react";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};
import {
  Button,
  Html,
  Head,
  Body,
  Preview,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "react-email";
export default function ContactFormEmail({
  message,
  senderEmail,
  
}: ContactFormEmailProps) {
 
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Body style={{ backgroundColor: "rgb(243, 244, 246)", color: "black" }}>
        <Container>
          <Section
            style={{
              background: "white",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              margin: "1rem 2.5rem",
              padding: "2.5rem",
              borderRadius: "16px",
              lineHeight: "2rem",
            }}
          >
            <Heading>
              You received the following message from the contact form
            </Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>The sender's email is {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
