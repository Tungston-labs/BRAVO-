// FeatureBoxes.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px 20px;
  background-color: #F3F3F3;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 35px;
  padding: 30px;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
  gap: 20px;
  height: auto; /* flexible height */

  &:hover {
    background-color: #052A57;
    h3, p {
      color: white;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column; /* stack vertically */
    text-align: center;
    padding: 20px;
  }
`;

export const TextContent = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 40px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 12px;
  color: #052A57;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 22px; /* smaller for mobile */
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  font-family: "Open Sans", sans-serif;
  color: #052A57;
  transition: color 0.3s ease;
  text-align: left; 

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.4;
    text-align: left; 
  }
`;

export const ImagePlaceholder = styled.div`
  width: 600px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15px;

    img {
      max-width: 180px; /* smaller on mobile */
    }
  }
`;
