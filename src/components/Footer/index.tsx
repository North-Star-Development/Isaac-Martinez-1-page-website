import {
    FooterContainer,
    FooterLink,
    FooterLinks,
    FooterLogo,
    FooterLogoContainer,
    FooterSocial,
    FooterSocials,
  } from "./index.styles";
  
  const Footer = () => {
    return (
      <FooterContainer>
        <FooterLogoContainer>
          <FooterLogo src="/assets/pngs/logo.png" alt="logo" height={80} />
        </FooterLogoContainer>
  
        <FooterLinks>
          <FooterLink>Home</FooterLink>
          <FooterLink>About</FooterLink>
          <FooterLink>Services</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </FooterLinks>
  
        <FooterSocials>
          <FooterSocial src="/assets/pngs/InstagramLogo.png" alt="insta" />
          <FooterSocial src="/assets/pngs/TwitterLogo.png" alt="Twitter" />
          <FooterSocial src="/assets/pngs/LinkedinLogo.png" alt="LinkedIn" />
        </FooterSocials>
      </FooterContainer>
    );
  };
  
  export default Footer;
  