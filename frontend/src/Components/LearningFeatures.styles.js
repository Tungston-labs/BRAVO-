import styled from "styled-components";
import bgImage from "../assets/background3.png"; 

export const Container = styled.div`
  position: relative;
  padding: 40px 15px; /* mobile default */
  background: #0a1a3b;
  color: white;
  overflow: hidden;
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
    padding: 60px 20px; /* desktop */
  }
`;

export const Background = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  z-index: 0;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px; /* mobile */
  font-weight: 700;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 42px; /* tablet */
    margin-bottom: 40px;
  }

  @media (min-width: 1200px) {
    font-size: 58px; /* desktop */
    margin-bottom: 50px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px; /* mobile */
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr; /* desktop */
    gap: 50px 60px;
  }
`;

export const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px; /* tighter for mobile */

  @media (min-width: 768px) {
    gap: 15px; /* more space on desktop */
  }
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px; /* mobile size */

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (min-width: 768px) {
    width: 60px;
    height: 60px; /* tablet */
  }

  @media (min-width: 1200px) {
    width: 80px;
    height: 80px; /* desktop */
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
`;

export const Heading = styled.h3`
  font-size: 16px; /* mobile */
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 6px;

  @media (min-width: 768px) {
    font-size: 22px; /* tablet */
  }

  @media (min-width: 1200px) {
    font-size: 28px; /* desktop */
  }
`;

export const Paragraph = styled.p`
  font-size: 14px; /* mobile */
  line-height: 1.5;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 16px; /* tablet */
    line-height: 1.6;
  }

  @media (min-width: 1200px) {
    font-size: 18px; /* desktop */
  }
`;
