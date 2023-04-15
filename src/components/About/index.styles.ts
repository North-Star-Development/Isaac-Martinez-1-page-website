import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #fffcf4;
  padding: 4rem 3.5rem;

  @media screen and (max-width: 861px) {
    padding: 4rem 2.5rem;
  }

  @media screen and (max-width: 373px) {
    padding: 4rem 1.5rem;
  }
`;

export const AboutBoxOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 800px) {
    gap: 1rem;
  }
  @media screen and (max-width: 673px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;


export const AboutText = styled.span`
  color: #d2ac47;
  display: block;
  margin-bottom: 1rem;
  font-weight: 300;
`;

export const AboutTextSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
`;

export const AboutImageSide = styled.div`
  display : flex;
  justify-content : center;
  width: 100%;
`;

export const AboutImage = styled.img`
  max-width: 70%;
`;

export const AboutHeader = styled.span`
  display: block;
  word-spacing: 5px;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing : -0.15rem;

  @media screen and (max-width: 1115px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 949px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 739px) {
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 737px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 673px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 425px) {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
`;
export const AboutSmallText = styled.span`
  display: block;
  font-weight: 200;
  font-size: 1rem;
  line-height: 130%;
 
  width: 90%;

  @media screen and (max-width: 949px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 737px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 673px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 425px) {
    font-size: 0.9rem;
    width: 100%;
  }
`;
