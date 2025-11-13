import React from "react";
import {
  FooterContainer,
  Background,
  FooterContent,
  LeftSection,
  LogoWrapper,
  LogoImg,
  RightSection,
  ContactItem,
  ContactText,
  BottomBar,
} from "./Footer.styles";

import { GrLocation } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";

import logo from "../assets/logo2.svg";
import bgImage from "../assets/background5.png";

const Footer = () => {
  const handleCopy = (number) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(number);
      alert(`Phone number ${number} copied to clipboard!`);
    }
  };

  return (
    <FooterContainer>
      <Background bg={bgImage} />

      <FooterContent>
        <LeftSection>
          <LogoWrapper>
            <LogoImg src={logo} alt="Bravo Education" />
          </LogoWrapper>
        </LeftSection>

        <RightSection>
          <ContactItem
            as="a"
            href="https://www.google.com/maps?q=Mannathara+building,+near+Karothukuzhi+hospital,+Aluva,+Ernakulam"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <GrLocation className="icon" />
            <ContactText>
              Mannathara building, near <br /> Karothukuzhi hospital
              <br /> Aluva, Ernakulam
            </ContactText>
          </ContactItem>

          <ContactItem
            as="a"
            href="https://www.instagram.com/bravoeducation_aluva?igsh=aW9nZ2Iydnl6cWhp"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <BsInstagram className="icon" />
            <ContactText>bravoeducation_aluva</ContactText>
          </ContactItem>

          <ContactItem
            as="a"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Bravoeducation.aluva@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <LuMail className="icon" />
            <ContactText>Bravoeducation.aluva@gmail.com</ContactText>
          </ContactItem>

          <ContactItem>
            <FaPhone className="icon" />
            <ContactText>
              <a
                href="tel:+919946153913"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                +91 9946153913
              </a>
              <br />
              <a
                href="tel:+919745882225"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                +91 9745882225
              </a>
            </ContactText>
          </ContactItem>
        </RightSection>
      </FooterContent>

      <BottomBar>
        © Copyright 2024, Designed by{" "}
        <span className="highlight">Tungston Labs.</span>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
