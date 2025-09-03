import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background: #CE1126; /* Red background */
  white-space: nowrap;
  display: flex;
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  animation: ${scroll} 8s linear infinite;
`;

export const BannerItem = styled.span`
  font-size: 20px;
  font-weight: 500;
  font-family: "Otomanopee One", sans-serif; 
  color: #FFFFFF;
  margin: 0 15px;
`;

export const StarIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #CE1126;
  border-radius: 5px;
  padding: 4px;
  margin: 0 20px;
  font-size: 22px;
`;
