import React from "react";
import {
  HeroWrapper,
  HeroContent,
  HeroTitle,
  HeroDesc,
  HeroSubDesc,
} from "./HeaderSection.styles.js";

const HeaderSection = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>
          Explore the Power of French – At Every Stage of Learning
        </HeroTitle>
        <HeroDesc>
          Welcome to Bravo Education, where French isn’t just a subject – it’s a
          passport to global success.
        </HeroDesc>
        <HeroSubDesc>
          Whether you’re a parent looking for quality tuition for your child or
          a college student aiming to level up your skills, we’ve got you
          covered.
        </HeroSubDesc>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeaderSection;
