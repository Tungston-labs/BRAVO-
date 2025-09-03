import styled from "styled-components";

export const HeroWrapper = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: flex-start; /* align content to top */
  justify-content: flex-start; /* align content to left */
  padding: 2rem; /* spacing from edges */
  overflow: hidden;
  background: #fff;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  z-index: 0;

  @media (max-width: 768px) {
    background-image: url(${(props) => props.bgMbl}); /* switch to mobile background */
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* stack text + button */
  align-items: flex-start; /* align to left */
  justify-content: flex-start; /* keep top */
  margin-left: 5rem;
  margin-top: 5rem;
  width: 80%;
  max-width: 1200px;
  z-index: 1;
  text-align: left;

  @media (max-width: 768px) {
    margin-left: 1rem;  /* shift closer to left edge */
    margin-top: 1rem;   /* shift closer to top */
    width: 90%;         /* use more width for smaller screens */
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
  max-width: 500px;
  line-height: 1.5;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%; /* allow it to fit mobile width */
  }
`;

export const RegisterButton = styled.button`
  position: relative;
  background: #052a57; /* Blue button */
  color: #fff;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  font-family: "Open Sans", sans-serif;
  transition: transform 0.2s ease-in-out;

  /* Red box behind */
  &::after {
    content: "";
    position: absolute;
    top: 8px; /* shadow offset */
    left: 8px;
    width: 100%;
    height: 100%;
    background: #ce1126; /* Red */
    border-radius: 5px;
    z-index: -1;
    opacity: 0; /* hidden by default */
    transition: all 0.3s ease;
  }

  &:hover::after {
    opacity: 1; /* red box visible */
    top: 0; /* slide in to overlap */
    left: 0;
  }
`;
