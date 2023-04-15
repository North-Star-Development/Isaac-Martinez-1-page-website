import styled from "styled-components";

export const ContactContainer = styled.div`
     display : flex;
     justify-content : center;
     align-items : center;
     gap: 3rem;
     margin-top: 1rem;
`;

export const ContactOne = styled.div`
  background-color: black;
  position: relative;

  padding: 1rem 2rem 1rem 0;

  border-radius: 0.5rem;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const ContactOneImage = styled.img`
  position: absolute;
  top: 50%;
  left: -3rem;

  transform: translateY(-50%);

  @media screen and (max-width: 884px) {
    height: 6rem;
    width: 6rem;
  }
`;

export const ContactOneText = styled.span`
  display: block;
  margin-left: 6rem;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  width: 80%;

  @media screen and (max-width: 884px) {
    font-size: 1rem;
  }

//   @media screen and (max-width: 770px) {
//     font-size: 1.3rem;
//   }

  @media screen and (max-width: 464px) {
    font-size: 1.1rem;
    margin-left: 4rem;
  }

  @media screen and (max-width: 395px) {
    font-size: 1rem;
  }
`;
