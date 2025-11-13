
import React from "react";
import {
  HeroWrapper,
  ContentWrapper,
  Title,
  Subtitle,
  RegisterButton,
  BackgroundImage,
} from "./Header.styles";

import Background from "../assets/background1.png"; 
import BackgroundMbl from "../../src/assets/background1-mbl.jpg"; 

const Header = () => {
  // 🧩 Your Google Form link
  const googleFormLink = "https://docs.google.com/forms/d/1DLnDQu0jvmJ69HksZXIK5QGIhnEJ0EdlDLg31AOGnUA/edit";

  // Function to open form in a new tab
  const handleOpenForm = () => {
    window.open(googleFormLink, "_blank");
  };

  return (
    <HeroWrapper>
      <BackgroundImage bg={Background} bgMbl={BackgroundMbl} />
      <ContentWrapper>
        <div>
          <Title>
            Bravo Education <br /> French Classes
          </Title>
          <Subtitle>
            From Kindergarten to Degree – Learn French the Smart Way.
          </Subtitle>
          <RegisterButton onClick={handleOpenForm}>
            Register now
          </RegisterButton>
        </div>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default Header;
