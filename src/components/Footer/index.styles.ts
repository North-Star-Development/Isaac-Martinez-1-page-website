import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding: 0rem 2rem;
  background-color: #000000;

  @media screen and (max-width: 920px) {
    padding: 0 1rem;
  }

  @media screen and (max-width: 812px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 790px) {
    padding: 0 0.5rem;
  }
  @media screen and (max-width: 628px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
  }
`;

export const FooterLogoContainer = styled.div``;

export const FooterLogo = styled.img`
  @media screen and (max-width: 600px) {
    height: 4rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  height: 100%;
  align-items: center;

  @media screen and (max-width: 726px) {
    gap: 1rem;
  }

  @media screen and (max-width: 628px) {
    display: none;
  }
`;

export const FooterLink = styled.a`
  color: white;
  transition: all 0.1s ease-out;
  height: 100%;

  display: flex;
  align-items: center;
  padding: 0 0.3rem !important;
  cursor: pointer;

  &:hover {
    color: #d2ac47;
    border-bottom: 3px solid #d2ac47;
    padding: 0 0.3rem !important;
  }

  @media screen and (max-width: 790px) {
    font-size: 0.9rem;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  height: 100%;

  @media screen and (max-width: 812px) {
    justify-content: center;
    padding: 0 1rem 1rem 1rem;
    position: relative;
    left: 50%;
  }

  @media screen and (max-width: 628px) {
    left: 0;
  }
`;

export const FooterSocial = styled.img`
  max-height: 1.5rem;
  cursor: pointer;

  aspect-ratio: 1;
`;
