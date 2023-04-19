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
        <Link to="home" smooth={true} duration={500}>
          <FooterLink>Home</FooterLink>
         </Link>
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
          <a target={"_blank"} href="https://www.instagram.com/real.momentum/">
          <FooterSocial src="/assets/pngs/InstagramLogo.png" alt="insta"  />
          </a>
           <a target={"_blank"} href="https://www.facebook.com/profile.php?id=100091704964091">
          <FooterSocial src="/assets/pngs/TwitterLogo.png" alt="Twitter" />
          </a>
        </FooterSocials>

      </FooterContainer>
    );
  };
  
  export default Footer;
  