// import custom styles
import { NavbarContainer, NavbarLinks,
         NavbarLink , NavbarLogo
       } from "./index.styles";

// import relevant modules
import { Link } from "react-scroll";

// JSX Component
const Navbar = () => {
    return (
        <NavbarContainer>
      <NavbarLogo src="assets/pngs/logo.png" alt="logo" height={80} />
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
     </NavbarContainer>
    );
}

export default Navbar;