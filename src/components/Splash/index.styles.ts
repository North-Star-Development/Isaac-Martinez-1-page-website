import styled from "styled-components";

export const SplashContainer = styled.div`
  background-image: url("/assets/pngs/background.png");
  position: relative;

`;

export const SplashTextContainer = styled.div`
  display : flex;
  flex-direction : center;
  justify-content : center;
`
export const SplashText = styled.span`
  display: flex;
  flex-direction : column;
  color: white;
  margin: auto;
  font-weight: 700;
  padding: 4.5rem 0 6rem 0;

  span:nth-child(1) {
    font-size : 1.7rem;
  }
  span:nth-child(2) {
    font-size : 3rem;
  }
  @media screen and (max-width: 903px) {
    width: 80%;
  }
  @media screen and (max-width: 791px) {
    font-size: 3rem;
  }
`;

export const InputContainer = styled.div`
  position: absolute;
  width: 45rem;
  bottom: -1.2rem;
  left: 50%;

  transform: translateX(-50%);
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.224);
  border-radius: 15px;

  @media screen and (max-width: 1023px) {
    width: 40rem;
  }

  @media screen and (max-width: 913px) {
    width: 35rem;
  }
  @media screen and (max-width: 773px) {
    width: 30rem;
  }
  @media screen and (max-width: 591px) {
    position: relative;
    width: 90%;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 395px) {
    font-size: 0.7rem;
  }
`;

export const SplashInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 0 0 1rem;
  outline: none;
  border: none;

  border-radius: 15px;
`;
export const SplashInputButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 3rem;
  border: none;
  outline: none;

  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  padding: 0 1.5rem;
  background-color: #d2ac47;
  font-size: 0.9rem;

  @media screen and (max-width: 480px) {
    padding: 0 1rem;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 395px) {
    font-size: 0.7rem;
  }
`;
