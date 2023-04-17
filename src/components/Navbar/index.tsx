// import custom styles
import { NavbarContainer, NavbarLinks,
         NavbarLink , NavbarLogo,
         NavIcon, Line, Overlay,
         OverlayMenu, Item, LinkItem
       } from "./index.styles";

// import relevant modules
import { Link } from "react-scroll";
import { useState } from "react";

// JSX Component
const Navbar = () => {
   // set toggle initial value
   const [toggle, toggleNav] = useState(false)
    return (
    <>
     <NavbarContainer>
      <NavbarLogo src="assets/pngs/logo.png" alt="logo" height={80} />
      <NavbarLogo className="mobile" src="assets/pngs/mobile-logo.png" alt="mobile logo" />
      <NavbarLinks>
      <Link to="home" smooth={true} duration={500}>
        <NavbarLink>
            Home
        </NavbarLink>
        </Link>
        <Link to="about" smooth={true} duration={500}>
        <NavbarLink>
            About
        </NavbarLink>
        </Link>
        <Link to="services" smooth={true} duration={500}>
        <NavbarLink>
            Services
        </NavbarLink>
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
        <NavbarLink>
            Contact
        </NavbarLink>
        </Link>
      </NavbarLinks>
      <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>

     </NavbarContainer>
       <Overlay open={toggle}>
       <OverlayMenu open={toggle}>
         <Item>
         <Link to="home" smooth={true} duration={500} onClick={() => toggleNav(!toggle)}>
           <LinkItem>
             Home
           </LinkItem>
           </Link>
         </Item>
         <Item>
         <Link to="about" smooth={true} duration={500} onClick={() => toggleNav(!toggle)}>
           <LinkItem>
            About
           </LinkItem>
          </Link>
         </Item>
         <Item>
         <Link to="services" smooth={true} duration={500} onClick={() => toggleNav(!toggle)}>
           <LinkItem>
             Services
           </LinkItem>
          </Link>
         </Item>
         <Item>
         <Link to="merchant" smooth={true} duration={500} onClick={() => toggleNav(!toggle)}>
           <LinkItem>
             Merchant
           </LinkItem>
          </Link>
         </Item>
         <Item>
         <Link to="contact" smooth={true} duration={500} onClick={() => toggleNav(!toggle)}>
           <LinkItem>
             Contact
           </LinkItem>
          </Link>
         </Item>
       </OverlayMenu>
       </Overlay>
      </>
    );
}

export default Navbar;