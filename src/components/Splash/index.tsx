import Navbar from "../Navbar";
import {
  InputContainer,
  SplashContainer,
  SplashInput,
  SplashInputButton,
  SplashText,
  SplashTextContainer,
} from "./index.styles";

const Splash = () => {
  return (
    <SplashContainer id="home">
      <Navbar />
     <SplashTextContainer>
         <SplashText>
       <span>Hi <span className="wave">👋🏽</span> there, I'm <span className="name">Nicolas.</span></span>
       <span>I offer business services</span>
      </SplashText>
     </SplashTextContainer>
     

      <InputContainer>
        <SplashInput type="text" placeholder="youremail@domain.com" />
        <SplashInputButton>Get Started</SplashInputButton>
      </InputContainer>
    </SplashContainer>
  );
};

export default Splash;
