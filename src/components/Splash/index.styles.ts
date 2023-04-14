import styled, {keyframes} from "styled-components";

// gradient animation
const gradient = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
    `
 // wave animation
const waveAnimation = keyframes`
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) } 
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( -4.0deg) }  
    100% { transform: rotate( 8.0deg) }
`

// splash container styles
export const SplashContainer = styled.div`
  background-image: url("/assets/pngs/background.png");
  position: relative;
`;

// splash text container styles
export const SplashTextContainer = styled.div`
  display : flex;
  flex-direction : center;
  justify-content : center;
`

// splash text styles
export const SplashText = styled.span`
  display: flex;
  flex-direction : column;
  color: white;
  margin: auto;
  font-weight: 700;
  padding: 4.5rem 0 6rem 0;

  span:nth-child(1) {
    font-size : 1.7rem;
    .wave {
        animation-name: ${waveAnimation};  /* Refers to the name of your @keyframes element below */
        animation-duration: 2.5s;        /* Change to speed up or slow down */
        animation-iteration-count: infinite;  /* Never stop waving :) */
        transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
        display: inline-block;
    }
    .name {
        background-image: linear-gradient(
            -225deg,
            #FFD700 0%,
            #EEE8AA	 29%,
            #fff 67%,
            whitesmoke 80%,
            #FFD700 100%
    );   
    font-size : 1.7rem;
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto; 
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradient} 2s linear infinite;
    }
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

// input container styles
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

// splash input styles
export const SplashInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 0 0 1rem;
  outline: none;
  border: none;
  border-radius: 15px;
`;

// splash input button styles
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
