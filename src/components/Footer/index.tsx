import { Link } from "react-scroll";
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
        <Link to="home" smooth={true} duration={500}>
          <FooterLogo src="/assets/pngs/logo.png" alt="logo" height={80} />
          </Link>
        </FooterLogoContainer>
  
        <FooterLinks>
          <FooterLink>Home</FooterLink>
          <Link to="about" smooth={true} duration={500}>
            <FooterLink>
            About 
            </FooterLink>
            </Link>
            <Link to="services" smooth={true} duration={500}>
          <FooterLink>
            Services
          </FooterLink>
          </Link>
          <Link to="services" smooth={true} duration={500}>
           <FooterLink>Contact Us</FooterLink>
          </Link>
        </FooterLinks>
  
        <FooterSocials>
        {/* target="_blank" */}
          <a target={"_blank"} href="https://instagram.com/real.momentum?igshid=YmMyMTA2M2Y=">
          <FooterSocial src="/assets/pngs/InstagramLogo.png" alt="insta"  />
          </a>
       
          <FooterSocial src="/assets/pngs/TwitterLogo.png" alt="Twitter" />
          <FooterSocial src="/assets/pngs/LinkedinLogo.png" alt="LinkedIn" />
        </FooterSocials>
      </FooterContainer>
    );
  };
  
  export default Footer;
  