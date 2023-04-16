
//import relevant modules
import Typewriter from "typewriter-effect";

// import navbar 
import Navbar from "../Navbar";

// import relavant styles
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
       <span>Hi <span className="wave">👋🏽</span><span className="name"> there,</span>  </span>
       <span>We offer  
        
        <Typewriter
          options={{
            strings: [' business services.', 'merchant set up.', "consultancy services."],
            autoStart: true,
            loop: true,
          }}
        /></span>
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
