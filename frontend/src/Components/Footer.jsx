import React from "react";
import {
  FooterContainer,
  Background,
  FooterContent,
  LeftSection,
  LogoWrapper,
  LogoImg,
  BrandName,
  BrandText,
  RightSection,
  ContactItem,
  ContactText,
  BottomBar,
} from "./Footer.styles";

// React Icons
import { GrLocation } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";

// Assets
import logo from "../assets/logo2.svg"; // replace with your logo
import bgImage from "../assets/background5.png"; // replace with your background

const Footer = () => {
  return (
    <FooterContainer>
      <Background bg={bgImage} />

      <FooterContent>
        {/* Left Section */}
        <LeftSection>
          <LogoWrapper>
            <LogoImg src={logo} alt="Bravo Education" />
          </LogoWrapper>
          
        </LeftSection>

        {/* Right Section */}
        <RightSection>
          <ContactItem>
            <GrLocation className="icon" />
            <ContactText>
              Mannathara building, near <br/> Karothukuzhi hospital aluva
            </ContactText>
          </ContactItem>

          <ContactItem>
            <BsInstagram className="icon" />
            <ContactText>dummy</ContactText>
          </ContactItem>

          <ContactItem>
            <LuMail className="icon" />
            <ContactText>Bravoeducation@gmail.com</ContactText>
          </ContactItem>

          <ContactItem>
            <FaPhone className="icon" />
            <ContactText>
              +91 9946153913 <br /> +91 8075838706
            </ContactText>
          </ContactItem>
        </RightSection>
      </FooterContent>

      {/* Bottom Bar */}
      <BottomBar>
        © Copyright 2024, Designed by{" "}
        <span className="highlight">Tungston Labs.</span>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
