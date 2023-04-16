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
          <ContactOneImage
            src="/assets/pngs/user.png"
            alt="user"
            height={120}
            width={120}
          />
          <ContactOneText>Book a zoom call</ContactOneText>
        </ContactOne>
        <ContactOne>
          <ContactOneImage
            src="/assets/pngs/gold.png"
            alt="gold-bars"
            height={120}
            width={120}
          />
          <ContactOneText className="merch">Merchant Agreement Form</ContactOneText>
        </ContactOne>
      </ContactContainer>
    );
  };
  
  export default MerchantContact;
  