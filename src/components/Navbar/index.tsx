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
        <NavbarLink>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </NavbarLink>
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
           <LinkItem target="#" href="https://www.instagram.com/igor_dumencic/">
             Home
           </LinkItem>
         </Item>
         <Item>
           <LinkItem target="#" href="https://www.behance.net/igordumencic">
            About
           </LinkItem>
         </Item>
         <Item>
           <LinkItem target="#" href="https://github.com/Igor178">
             Services
           </LinkItem>
         </Item>
         <Item>
           <LinkItem target="#" href="https://github.com/Igor178">
             Merchant
           </LinkItem>
         </Item>
         <Item>
           <LinkItem target="#" href="https://github.com/Igor178">
             Contact
           </LinkItem>
         </Item>
       </OverlayMenu>
       </Overlay>
      </>
    );
}

export default Navbar;