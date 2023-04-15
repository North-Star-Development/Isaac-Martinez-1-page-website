import {
    AboutBoxOne,
    AboutContainer,
    AboutHeader,
    AboutImage,
    AboutImageSide,
    AboutSmallText,
    AboutText,
    AboutTextSide,
  } from "./index.styles";
  
  const About = () => {
    return (
      <AboutContainer id="about">
        <AboutBoxOne>
          <AboutImageSide>
            <AboutImage src="/assets/pngs/image-1.png" />
          </AboutImageSide>
  
          <AboutTextSide>
            <AboutText>About</AboutText>
            <AboutHeader>
              I help you align your goals and dreams with your values
            </AboutHeader>
  
            <AboutSmallText>
              Real momentum is a consulting service that helps clients develop and
              implement strategies to achieve their goals. It is professional and
              affordable.
            </AboutSmallText>
          </AboutTextSide>
        </AboutBoxOne>
      </AboutContainer>
    );
  };
  
  export default About;
  