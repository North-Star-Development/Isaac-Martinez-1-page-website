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
  background-color: hsla(0, 0%, 7.8431372549019605%, 0.401);

  .mobile {
    display : none;
  }
  @media screen and (max-width : 1000px) and (min-width : 800px) {
    padding : 0 1rem;
  }
  @media screen and (max-width : 800px)  and (min-width : 629px) {
    padding : 0 0.2rem;
  }

  @media screen and (max-width : 629px) {
    padding : 0 0.5rem;
     background-color : unset;

    .mobile {
      display : block;
       width : 3.9rem;
    }
  }

`;

// Navbar logo styles
export const NavbarLogo = styled.img`
  display: block;

  @media screen and (max-width : 629px) {
    display : none;
  }

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


export const NavIcon = styled.button`
  background : none;
  position : fixed;
  right: 0rem;
  cursor: pointer;
  border: none;
  outline: none;
  z-index: 3;
  @media (min-width: 629px) {
    display: none;
  }
`;

// props types
interface LinePropsType {
  open : boolean
}

export const Line = styled.span<LinePropsType>`
  display: block;
  border-radius: 50px;
  width: 40px;
  height: 5px;
  margin: 5px;
  background : #d2ac47;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    background : orange;
    width: ${props => (props.open ? "40%" : "77%")};
  }
`;

export const Overlay = styled.div<LinePropsType>`
  position: fixed;
  height: ${props => (props.open ? "100%" : 0)};
  display :  ${props => (!props.open && "unset")};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;
  z-index: 2;
  top: 0rem;
  @media (min-width: 769px) {
    display: none;
  }
`;

 export const OverlayMenu = styled.ul<LinePropsType>`
  list-style: none;
  position: absolute;
  left: 55%;
  top: 50%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    display : ${props => (!props.open && "unset")};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

export const Item = styled.li``;

export const LinkItem = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;