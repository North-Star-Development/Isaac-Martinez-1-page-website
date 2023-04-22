import {
    ServiceBox,
    ServicesText,
    ServiceBoxContainer,
    ServiceBoxLower,
    ServiceBoxLowerImg,
    ServiceBoxUpper,
    ServiceBoxUpperHeader,
    ServicesContainer,
    ServicesHowText,
    ServiceBoxUpperText,
  } from "./index.styles";
  
  const Services = () => {
    return (
      <ServicesContainer id="services">
        <ServicesText>Services</ServicesText>
        <ServicesHowText>Our Services</ServicesHowText>
  
        <ServiceBoxContainer>
       
         <ServiceBox>
             <ServiceBoxUpper>
                    <ServiceBoxUpperHeader>Merchant Solutions</ServiceBoxUpperHeader>
                    <ServiceBoxUpperText>
                    providing safe, dependable, and high value credit card processing service that is simple and efficient in modernizing your business
                    </ServiceBoxUpperText>
                    </ServiceBoxUpper>
        
                    <ServiceBoxLower>
                    <ServiceBoxLowerImg src="/assets/pngs/sack.png" />
                    </ServiceBoxLower>
          </ServiceBox>
          <ServiceBox className="last">
            <ServiceBoxUpper>
              <ServiceBoxUpperHeader>Financial Consulting</ServiceBoxUpperHeader>
              <ServiceBoxUpperText>
              quick hassle, free, funding offer to our merchant partners
              </ServiceBoxUpperText>
            </ServiceBoxUpper>
  
            <ServiceBoxLower>
              <ServiceBoxLowerImg src="/assets/pngs/coin.png" />
            </ServiceBoxLower>
          </ServiceBox>
          <ServiceBox>
            <ServiceBoxUpper>
              <ServiceBoxUpperHeader>Coming soon</ServiceBoxUpperHeader>
              <ServiceBoxUpperText>
               we will help you develop your business entity structure
              </ServiceBoxUpperText>
            </ServiceBoxUpper>
  
            <ServiceBoxLower>
              <ServiceBoxLowerImg src="/assets/pngs/business.png" />
            </ServiceBoxLower>
          </ServiceBox>
          
        </ServiceBoxContainer>
      </ServicesContainer>
    );
  };
  
  export default Services;
  