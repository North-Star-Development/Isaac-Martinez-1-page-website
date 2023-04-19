import styled from "styled-components";

export const ContactContainer = styled.div`
     display : flex;
     justify-content : center;
     align-items : center;
     gap: 3rem;
     margin-top: 1rem;

     @media screen and (max-width : 650px) {
      gap : 3rem;

   
     }
     .merch {

     @media screen and (max-width : 682px) {
      margin-left: 3rem;
     }

     @media screen and (max-width : 464px) {
      margin-left: 1rem;
     }

        
     }

     @media screen and (max-width : 544px) {
     flex-direction : column;
     gap: 1rem;
     }


`;

export const ContactOne = styled.div`
  background-color: black;
  position: relative;
  padding: 1rem 2rem 1rem 0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width : 690px) {
    padding : 1rem 1rem 1rem 0;
    
    width : 13rem;
  }

  @media screen and (max-width : 543px) {
    padding : 1rem 0.5rem 1rem 0;
     width : 15rem;
  }
`;

export const ContactOneImage = styled.img`
  position: absolute;
  top: 50%;
  left: -3rem;
  transform: translateY(-50%);

  @media screen and (max-width: 884px) {
    height: 6rem;
    width: 6rem;
  }

  @media screen and (max-width : 533px) {
    width : 4.5rem;
    height : 4.5rem;
  }


`;

export const ContactOneText = styled.span`
  display : flex;
  justify-content : center;
  align-items: center;
  color: whitesmoke;
  font-size: 1.3rem;
  font-weight: 600;
  margin-left : 6rem;
  width: 80%;

  @media screen and (max-width: 884px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 770px) {
    font-size: 0.9rem;
     margin-left : 3rem;

  }
  @media screen and (max-width: 682px) {
    margin-left: 3rem;
    height : 2rem;
 
  }
  
  @media screen and (max-width: 464px) {
    font-size: 0.8rem;
    margin-left: 2rem;
    width : 100%;
  }

  @media screen and (max-width: 395px) {
    font-size: 0.8rem;
  }
`;
