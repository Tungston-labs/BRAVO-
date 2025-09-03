import React from "react";
import {
  NavWrapper,
  NavBox,
  NavContent,
  LogoWrapper,
  NavLinks,
  NavLink,
  EnquiryButton,
} from "./Navbar.styles";

import Logo from "../assets/logo.svg"; // <-- your logo svg

const Navbar = () => {
  return (
    <NavWrapper>
      <NavBox>
        <NavContent>
          <LogoWrapper>
            <img src={Logo} alt="Bravo Education Logo" />
          </LogoWrapper>

          {/* Desktop Links */}
          <NavLinks>
            <NavLink href="#why-french">Why French</NavLink>
            <NavLink href="#why-bravo">Why Bravo Education</NavLink>
            <NavLink href="#our-program">Our program</NavLink>
          </NavLinks>

          <EnquiryButton>Enquiry</EnquiryButton>
        </NavContent>
      </NavBox>
    </NavWrapper>
  );
};

export default Navbar;
