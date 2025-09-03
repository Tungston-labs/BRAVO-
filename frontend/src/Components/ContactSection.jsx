
import React from "react";
import {
  SectionContainer,
  ContentWrapper,
  LeftContent,
  Title,
  Description,
  FormBox,
  Input,
  TextArea,
  Button,
} from "./ContactSection.styles";

const ContactSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        {/* Left Side */}
        <LeftContent>
          <Title>Ready to Get Started ?</Title>
          <Description>
            We’re excited to welcome you to the Bravo family! <br />
            Start your French journey today with our free trial class, explore
            your ideal course, and let’s learn the language of opportunity
            together.
          </Description>
        </LeftContent>

        {/* Right Side - Form */}
        <FormBox>
          <Input type="text" placeholder="Full Name:" />
          <Input type="email" placeholder="Email Address:" />
          <Input type="tel" placeholder="Phone number" />
          <Input type="text" placeholder="Service of Interest:" />
          <TextArea placeholder="Your Message/Query:" rows="4" />
          <Button type="submit">Submit</Button>
        </FormBox>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ContactSection;
