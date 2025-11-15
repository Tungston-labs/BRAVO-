import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  background: #fff;
  padding: 30px 20px 15px;
  font-family: "Poppins", sans-serif;
  color: #002654;
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  opacity: 1;
  z-index: 0;
`;

export const FooterContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;
`;

export const LogoWrapper = styled.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
`;

export const LogoImg = styled.img`
  width: 400%;
  height: 400;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  .social-icons {
    display: flex;
    gap: 15px;
    justify-content: flex-start;  
    margin-left: -8px;            
  }

  .social {
    font-size: 30px;
    color:#052A57;
    cursor: pointer;
  }
`;


export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #002654;
  font-family: "Poppins", sans-serif;

  .icon {
    font-size: 20px;
    color: #d90429;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

export const ContactText = styled.p`
  margin: 0;
  line-height: 1.4;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  
`;

export const BottomBar = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 30px;
  text-align: center;
  font-size: 16px;
  color: #0a1a3b;

  .highlight {
    color: #CE1126;
    font-weight: 600;
  }
`;
