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
import { FaPhone, FaFacebookF } from "react-icons/fa6";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

import logo from "../assets/logo2.svg";
import bgImage from "../assets/background5.png";

const Footer = () => {
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

          {/* ⭐ Social Icons with Links */}
          <div className="social-icons">
            <FaFacebookF className="social" />

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/bravoeducation_aluva?igsh=aW9nZ2Iydnl6cWhp"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <TbBrandInstagramFilled className="social" />
            </a>

            {/* Email Link */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Bravoeducation.aluva@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <MdEmail className="social" />
            </a>
          </div>

          {/* ⭐ Location */}
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

          {/* ⭐ Phone */}
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
