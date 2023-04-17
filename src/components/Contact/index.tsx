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
            <FormLeftImage src="/assets/pngs/profile.png" alt="pic" />
          </FormLeftImageContainer>
          <FormLeftName>Isaac Martinez</FormLeftName>
          <FormLeftRole>CEO / Financial Advisor</FormLeftRole>
        </FormLeft>
  
        <FormRight>
          <FormRightConsult>Need Consulting?</FormRightConsult>
          <FormRightShoot>Shoot a message!</FormRightShoot>
  
          <FormRightContainer>
            <FormRightInput type="text" placeholder="What is your name?" />
            <FormRightInput
              type="text"
              placeholder="What is your Email Address?"
            />
            <FormRightTextarea
              placeholder="Write your message?"
            ></FormRightTextarea>
            <FormRightButton>Send a message</FormRightButton>
          </FormRightContainer>
        </FormRight>
      </FormContainer>
    );
  };
  
  export default Contact;
  