// import styled from "styled-components";
// import bgImage from "../assets/background3.png"; // Import background

// export const Container = styled.div`
//   position: relative;
//   padding: 60px 20px;
//   background: #0a1a3b;
//   color: white;
//   overflow: hidden;
// `;

// export const Background = styled.div`
//   position: absolute;
//   inset: 0;
//   background-image: url(${bgImage});
//   background-size: cover;
//   background-position: center;
//   opacity: 1;
//   z-index: 0;
// `;

// export const Title = styled.h2`
//   text-align: center;
//   font-size: 28px;
//   font-weight: bold;
//   font-family: "Poppins", sans-serif;
//   margin-bottom: 50px;
//   position: relative;
//   z-index: 1;

//   @media (min-width: 768px) {
//     font-size: 36px;
//   }
// `;

// export const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 5fr;
//   gap: 30px;
//   position: relative;
//   z-index: 1;

//   @media (min-width: 768px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// export const Feature = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 55px;
// `;

// export const IconWrapper = styled.div`
//   flex-shrink: 0;
//   width: 40px;
//   height: 40px;

//   img {
//     width: 200%;
//     height: auto;
//   }

//   @media (min-width: 768px) {
//     width: 50px;
//     height: 50px;
//   }
// `;

// export const TextWrapper = styled.div`
//   max-width: 50%;
// `;

// export const Heading = styled.h3`
//   font-size: 26px;
//   margin-bottom: 40px;
//   margin-left: 40px;
//   color: #FFFFFF;
//   font-family: "Poppins", sans-serif;

//   @media (min-width: 768px) {
//     font-size: 28px;
//   }
// `;

// export const Paragraph = styled.p`
//   font-size: 14px;
//   font-width: 100;
//   line-height: 1.6;
//    margin-left: 30px;
//   color: #FFFFFF;
//   font-family: "Poppins", sans-serif;

//   @media (min-width: 768px) {
//     font-size: 15px;
//   }
// `;


import styled from "styled-components";
import bgImage from "../assets/background3.png"; // Background image

export const Container = styled.div`
  position: relative;
  padding: 60px 20px;
  background: #0a1a3b;
  color: white;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
`;

export const Background = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  opacity: 2; /* soft overlay like screenshot */
  z-index: 0;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 58px;
  font-weight: 700;
  margin-bottom: 50px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 50px 60px; /* row gap, col gap */
  }
`;

export const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 80px;

  img {
    width: 250%;
    height: 300;
    display: block;
  }

  @media (min-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
 
`;

export const Heading = styled.h3`
  font-size: 16px;
  font-weight: 600;
   margin-left: 70px;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Paragraph = styled.p`
  font-size: 24px;
  line-height: 1.6;
  margin-left: 70px;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
