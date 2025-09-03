// import styled from "styled-components";
// import bgImage from "../assets/background2.png"; // adjust path if needed

// export const HeroWrapper = styled.section`
//   background: url(${bgImage}) no-repeat center center/cover;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem 2rem;
//   text-align: center;
//   color: #ffffff;
//   position: relative;
// `;

// export const HeroContent = styled.div`
//   max-width: 2000px;
//   margin: 0 auto;
// `;

// export const HeroTitle = styled.h1`
//   font-size: 1.8rem;
//   font-weight: 700;
//   margin-bottom: 1rem;
//   font-family: "Open Sans", sans-serif;

//   @media (min-width: 768px) {
//     font-size: 2.2rem;
//   }
// `;

// export const HeroDesc = styled.p`
//   font-size: 1rem;
//   margin-bottom: 0.8rem;
//   font-family: "Open Sans", sans-serif;
//   line-height: 0.5;

//   @media (min-width: 768px) {
//     font-size: 1.1rem;
//   }
// `;

// export const HeroSubDesc = styled.p`
//   font-size: 1rem;
//   font-family: "Open Sans", sans-serif;
//   line-height: 1.6;

//   @media (min-width: 768px) {
//     font-size: 1.1rem;
//   }
// `;



// HeaderSection.styles.js
import styled from "styled-components";
import bgImage from "../assets/background2.png"; // adjust path if needed

export const HeroWrapper = styled.section`
  background: url(${bgImage}) no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  text-align: center;
  color: #ffffff;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem 1rem; /* extra padding for mobile */
  }
`;

export const HeroContent = styled.div`
  max-width: 2000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%; /* use full width on mobile */
  }
`;

export const HeroTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: "Open Sans", sans-serif;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* smaller title on mobile */
    line-height: 1.4;
  }
`;

export const HeroDesc = styled.p`
  font-size: 1rem;
  margin-bottom: 0.8rem;
  font-family: "Open Sans", sans-serif;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.4; /* better readability */
  }
`;

export const HeroSubDesc = styled.p`
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;
