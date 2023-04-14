// import styled from styled-components
import styled from "styled-components";

// Navbar container styles
export const NavbarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  height: 15vh;
//   background-color: hsla(0, 0%, 7.8431372549019605%, 0.401);
`;

// Navbar logo styles
export const NavbarLogo = styled.img`
  display: block;
`;

// Navbar Links styles
export const NavbarLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  height: 100%;
  align-items: center;

  @media screen and (max-width: 901px) {
    gap: 2rem;
  }

  @media screen and (max-width: 735px) {
    gap: 1.5rem;
  }
  @media screen and (max-width: 629px) {
    display: none;
  }
`;

// NavbarLink styles
export const NavbarLink = styled.a`
  color: white;
  transition: all 0.1s ease-out;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  cursor: pointer;

  &:hover {
    color: #d2ac47;
    border-bottom: 3px solid #d2ac47;
  }

  @media screen and (max-width: 735px) {
    padding: 0 0.3rem;
  }
  @media screen and (max-width: 663px) {
    font-size: 0.9rem;
  }
`;
