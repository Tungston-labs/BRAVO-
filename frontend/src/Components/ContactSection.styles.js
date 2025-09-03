import styled from "styled-components";

export const SectionContainer = styled.section`
  background-color: #002654; /* deep blue background */
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  font-family: "Poppins", sans-serif;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1100px;
  width: 100%;
  gap: 40px;
  flex-wrap: wrap;
`;

export const LeftContent = styled.div`
  flex: 1;
  min-width: 280px;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 15px;
  font-family: "Poppins", sans-serif;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.9;
  margin: 0;
  font-family: "Poppins", sans-serif;
`;

export const FormBox = styled.form`
  flex: 1;
  width: 1000px;
  background: #fff;
  padding: 25px 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  padding: 10px 10px ;
  border: none;
  border-radius: 4px;
  background-color: #FFEFFF; /* light pink */
  font-size: 14px;
   font-family: "Poppins", sans-serif;
  outline: none;

  &:focus {
    border: 1px solid #ff0000;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px 12px;
  border: none;
  border-radius: 4px;
  background-color: #FFEFFF; /* light pink */
  font-size: 14px;
  outline: none;
  resize: none;

  &:focus {
    border: 1px solid #ff0000;
  }
`;

export const Button = styled.button`
  background-color: #ff0000; /* red button */
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #d90429; /* darker red on hover */
  }
`;
