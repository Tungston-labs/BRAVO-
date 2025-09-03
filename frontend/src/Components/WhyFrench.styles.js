import styled from "styled-components";

export const SectionWrapper = styled.section`
  background-color: #f5f7fa; /* light background */
  padding: 60px 20px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 50px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  color: #052A57;
  margin-bottom: 15px;
`;

export const SectionDesc = styled.p`
  max-width: 1090px;
  margin: 0 auto 50px auto;
  font-size: 19px;
  font-family: "Open Sans", sans-serif;
  line-height: 1.6;
  color: #052A57;
`;

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  justify-items: center;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

export const ItemCard = styled.div`
  max-width: 220px;
  text-align: center;
`;

export const ItemIcon = styled.div`
  margin-bottom: 15px;

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
`;

export const ItemText = styled.p`
  font-size: 19px;
  max-width: 5000px;
  font-family: "Open Sans", sans-serif;
  color: #052A57;
  line-height: 1.4;
`;
