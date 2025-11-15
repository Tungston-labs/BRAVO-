import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: #ffffff; /* Page background white */
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const NavBox = styled.nav`
  background-color: #052a57; /* dark navy */
  border-radius: 8px;        /* rounded corners */
  padding: 1rem 2rem;
  width: 100%;
  max-width: 1500px;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

export const NavContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 90px;
    height: auto;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 7rem;

  @media (max-width: 768px) {
    display: none; /* hide links on mobile */
  }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  transition: color 0.2s ease;

  &:hover {
    color: #ff2c4a; /* highlight red */
  }
`;

export const EnquiryButton = styled.button`
  background-color: #e30613; 
  border: none;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
  font-family: 'Open Sans', sans-serif;

  text-decoration: none; /* removes underline even when used as <a> */

  &:hover {
    background-color: #c20511;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


export const MobileMenuIcon = styled.div`
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  background-color: #052a57;
  border-radius: 6px;
  padding: 1rem;

  a, button {
    display: block;
    text-align: center;
    width: 100%;
  }
`;
