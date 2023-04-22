import {
    FormContainer,
    FormLeft,
    FormLeftImageContainer,
    FormLeftImage,
    FormLeftName,
    FormLeftRole,
    FormRight,
    FormRightConsult,
    FormRightShoot,
    FormRightInput,
    FormRightTextarea,
    FormRightButton,
    FormRightContainer,
  } from "./index.styles";
  
  const Contact = () => {
    return (
      <FormContainer id="contact">
        <FormLeft>
          <FormLeftImageContainer>
            <FormLeftImage src="/assets/pngs/pic.png" alt="pic" />
          </FormLeftImageContainer>
          {/* <FormLeftName>Isaac Martinez</FormLeftName>
          <FormLeftRole>CEO / Financial Advisor</FormLeftRole> */}
        </FormLeft>
  
        <FormRight>
          <FormRightConsult>Get a free quote</FormRightConsult>
          <FormRightShoot>Shoot a message!</FormRightShoot>
  
          <FormRightContainer   
             action="https://formspree.io/f/xrgdawav"
             method="POST"
             >
            <FormRightInput 
              type="text" 
              placeholder="What is your name?"
               name="firstName"
               required/>
            <FormRightInput
              type="text"
              placeholder="What is your Email Address?"
              name="email"
              required
            />
            <FormRightTextarea
              placeholder="Write your message?"
              name="message"
              required
            ></FormRightTextarea>
            <FormRightButton type="submit">Send a message</FormRightButton>
          </FormRightContainer>
        </FormRight>
      </FormContainer>
    );
  };
  
  export default Contact;
  