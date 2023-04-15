import styled from "styled-components";

export const ServicesContainer = styled.div`
  padding: 4rem 3rem;
  background-color: #fffcf4;
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    padding: 4rem 2rem;
  }

  @media screen and (max-width: 649px) {
    padding: 4rem 3rem;
  }

  @media screen and (max-width: 431px) {
    padding: 3rem 1.5rem;
  }
`;

export const ServicesText = styled.span`
  display: block;
  margin-bottom: 1.5rem;
  color: #d2ac47;
  font-size: 1rem;
  font-weight: 700;
`;

export const ServicesHowText = styled.span`
  display: block;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing : -0.1rem;

  @media screen and (max-width: 539px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 453px) {
    font-size: 1.5rem;
  }
`;

export const ServiceBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media screen and (max-width: 971px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 649px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;

  box-shadow: 0px 13px 17px rgba(0, 0, 0, 0.088);
`;

export const ServiceBoxUpper = styled.div`
  padding: 2.5rem 2.5rem 0 2.5rem;

  @media screen and (max-width: 1073px) {
    padding: 2.5rem 2rem 0 2rem;
  }
`;

export const ServiceBoxUpperHeader = styled.span`
  display: block;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.25rem;
`;
export const ServiceBoxUpperText = styled.span`
  display: block;
  font-weight: 300;
  font-size: 0.9rem;
  color: black;
  height: 6rem;

  @media screen and (max-width: 971px) {
    height: max-content;
    padding: 1rem 0;
  }
`;

export const ServiceBoxLower = styled.div`
  background-color: #fffcf4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const ServiceBoxLowerImg = styled.img`
    width : 8rem;
`;
