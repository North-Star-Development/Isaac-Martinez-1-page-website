
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
         {/* <span className="wave">👋🏽 </span> */}
       <span> <span className="name">Our Business is all about yours</span>  </span>
       <span> 
        Lets Help you
        <Typewriter
          options={{
            strings: ['save.', 'build.', "save."],
            autoStart: true,
            loop: true,
          }}
        /></span>
      </SplashText>
     </SplashTextContainer>
     

      {/* <InputContainer  
        action="https://formspree.io/f/myylbjdp"
        method="POST">
        <SplashInput type="text" name="email" placeholder="youremail@domain.com" required/>
        <SplashInputButton type="submit">Get Started</SplashInputButton>
      </InputContainer> */}
    </SplashContainer>
  );
};

export default Splash;
