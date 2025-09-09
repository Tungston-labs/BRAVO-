import styled, { css } from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 64px 20px 120px;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  background: url("../assets/background4.png") no-repeat center/cover;
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 50px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  color: #CE1126;
  margin: 0 0 14px 0;
`;

export const SubHeading = styled.p`
  font-size: 18px;
  color: #000000;
  font-family: "Open Sans", sans-serif;
  margin: 0 auto 86px;
  max-width: 760px;
  line-height: 1.5;
`;

export const Rail = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(280px, 1fr));
  justify-content: center;
  align-items: stretch;
  gap: 28px;
  margin: 0 auto;
  max-width: 1020px;
`;

export const ReviewCard = styled.div`
  position: relative;
  background: #ffffff;
  color: #000000;
  border-radius: 35px;
  padding: 84px 22px 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition:
    transform 260ms ease,
    box-shadow 260ms ease,
    background-color 260ms ease,
    color 260ms ease;
  cursor: pointer;
  min-height: 340px;

  ${(p) =>
    p.active &&
    css`
      background: #002654;
      color: #FFFFFF;
      transform: scale(1.05);
      box-shadow: 0 16px 48px rgba(10, 26, 90, 0.35);
      z-index: 2;
    `}
`;

export const ProfileContainer = styled.div`
  position: absolute;
  top: -54px;
  left: 50%;
  width: 86px;
  height: 86px;
  transform: translateX(-50%);
  background: #ffffff;
  border-radius: 50%;
  padding: 10px;
  border: 3px solid #CE1126;

  ${(p) =>
    p.active &&
    css`
      border-color: #CE1126;
      box-shadow: 0 8px 20px rgba(48, 213, 255, 0.35);
    `}
`;

export const ProfileImage = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Stars = styled.div`
  font-size: 28px;
  margin: 18px 0 10px;
  letter-spacing: 3px;
  ${(p) =>
    p.active
      ? css`
          color: #ffffff;
          opacity: 1;
        `
      : css`
          color: #111;
        `}
`;

export const Name = styled.h3`
  font-size: 25px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  margin: 6px 0 6px;
 
`;

export const Quote = styled.div`
  font-size: 36px;
  font-family: "Open Sans", sans-serif;
  margin: 0 0 2px 0;
`;

export const Text = styled.p`
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  line-height: 1.6;
  margin: 0;
  opacity: 0.95;
  text-align: center; 
`;

/* ✅ New Arrow Buttons */
export const ArrowLeft = styled.button`
  position: absolute;
  top: 50%;
  left: -70px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #002654;
  transition: color 0.2s;
  z-index: 5;

  &:hover {
    color: #CE1126;
  }
`;

export const ArrowRight = styled.button`
  position: absolute;
  top: 50%;
  right: -70px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #002654;
  transition: color 0.2s;
  z-index: 5;

  &:hover {
    color: #CE1126;
  }
`;


