import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 3.5rem 4.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 903px) {
    padding: 3.5rem 4rem;
  }
  @media screen and (max-width: 865px) {
    padding: 3.5rem 2rem;
  }

  @media screen and (max-width: 755px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding: 3.5rem 10rem;
  }
  @media screen and (max-width: 689px) {
    padding: 3.5rem 8rem;
  }

  @media screen and (max-width: 665px) {
    padding: 3.5rem 5rem;
  }

  @media screen and (max-width: 600px) {
    padding: 3.5rem 3rem;
  }

  @media screen and (max-width: 435px) {
    padding: 3.5rem 1.5rem;
  }
`;

export const FormLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const FormRight = styled.div``;

export const FormLeftImageContainer = styled.div`
  height: 18rem;
  position: relative;

  border-radius: 20px;

  @media screen and (max-width: 847px) {
    height: 15rem;
  }

  @media screen and (max-width: 755px) {
    height: 18rem;
  }
  @media screen and (max-width: 450px) {
    height: 15rem;
  }
`;
export const FormLeftImage = styled.img`
  max-height: 100%;
  position: relative;
  left: 1.5rem;
  top: 1.5rem;
`;

export const FormLeftName = styled.span`
  display: block;
  margin-top: 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const FormLeftRole = styled.span`
  display: block;
  color: #d2ac47;
  font-size: 0.9rem;
`;

export const FormRightConsult = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 600;
  color: #d2ac47;

  @media screen and (max-width: 821px) {
    font-size: 1.5rem;
  }
`;

export const FormRightShoot = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media screen and (max-width: 821px) {
    font-size: 1.5rem;
  }
`;

export const FormRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormRightInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #00000081;
  height: 2.5rem;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  padding-left: 0.1rem;

  &:focus {
    border-bottom: 1px solid #d2ac47;
  }

  @media screen and (max-width: 821px) {
    font-size: 0.8rem;
  }
`;

export const FormRightTextarea = styled.textarea`
  border: none;
  outline: none;
  border-bottom: 1px solid #00000081;
  font-size: 0.9rem;
  padding-left: 0.1rem;
  &:focus {
    border-bottom: 1px solid #d2ac47;
  }

  @media screen and (max-width: 821px) {
    font-size: 0.8rem;
  }
`;

export const FormRightButton = styled.button`
  width: max-content;
  margin-top: 0.5rem;
  height: 3rem;
  padding: 0 2rem;
  background-color: #d2ac47;
  outline: none;
  border: none;
  cursor: pointer;

  border-radius: 10px;
  font-size: 0.9rem;

  @media screen and (max-width: 821px) {
    font-size: 0.8rem;
  }
`;
