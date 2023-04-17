import {
    ContactContainer,
    ContactOne,
    ContactOneImage,
    ContactOneText,
  } from "./index.styles";
  
  const MerchantContact = () => {
    return (
      <ContactContainer>
        <ContactOne>
          <a target={"_blank"} href="https://calendly.com/realmomentum">
          <ContactOneImage
            src="/assets/pngs/user.png"
            alt="user"
            height={120}
            width={120}
          />
          <ContactOneText>Book a zoom call</ContactOneText>
        </a>
        </ContactOne>
        <ContactOne>
          <a target={"_blank"} href="https://form.jotform.com/Galvez_Jordan/merchant-automation---paybotx-mpa-v">
        <ContactOneImage
            src="/assets/pngs/gold.png"
            alt="gold-bars"
            height={120}
            width={120}
          />
          <ContactOneText className="merch">Merchant Agreement Form</ContactOneText>
         </a>
          </ContactOne>
      </ContactContainer>
    );
  };
  
  export default MerchantContact;
  