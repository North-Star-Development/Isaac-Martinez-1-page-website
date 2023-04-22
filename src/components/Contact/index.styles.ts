import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #fffcf4;
    display : flex;
    justify-content : center;
    align-items : center;
    gap : 4rem;
    padding : 3.5rem 2rem;

  @media screen and (max-width: 903px) {
    padding: 3.5rem 2rem;
  }
  @media screen and (max-width: 865px) {
    padding: 3.5rem 2rem;
  }

  @media screen and (max-width: 755px) {
    padding: 3.5rem 2rem;
  }
  @media screen and (max-width: 689px) {
    padding: 3.5rem 2rem;
  }

  @media screen and (max-width: 665px) {
    padding: 3.5rem 2rem;
  }

  @media screen and (max-width: 630px) {
    flex-direction : column;

  }

  @media screen and (max-width: 435px) {
    padding: 3.5rem 1.5rem;
  }
`;

export const FormLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
   width : 40%;

   @media screen and (max-width : 630px) {
    width : 80%;
    margin: auto;
    margin-left: 0rem;
   }
`;

export const FormRight = styled.div`
    display: flex;
    flex-direction: column;
    width : 50%;

    @media screen and (max-width : 630px) {
      width : 80%;
     }
     @media screen and (max-width : 550px) {
      width : 90%;
    }

`;

export const FormLeftImageContainer = styled.div`
  height: 20rem;
  position: relative;
  border-radius: 20px;

  @media screen and (max-width: 847px) {
    height: 19rem;
  }

  @media screen and (max-width: 755px) {
    height: 18rem;
  }
  @media screen and (max-width : 630px) {
    height: 20rem;
  }
  @media screen and (max-width: 450px) {
    height: 15rem;
  }

`;
export const FormLeftImage = styled.img`
  max-height: 100%;
  position: relative;
  left: 1.5rem;
  width : 24rem;

  @media screen and (max-width : 750px) {
    width : 18rem;
  }
  @media screen and (max-width : 630px) {
    width : 24rem;
  }
`;

export const FormLeftName = styled.span`
  display: block;
  margin-top: 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

export const FormLeftRole = styled.span`
  display: block;
  color: #d2ac47;
  font-size: 0.9rem;
`;

export const FormRightConsult = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  color: #d2ac47;

  @media screen and (max-width: 821px) {
    font-size: 1.5rem;
  }
`;

export const FormRightShoot = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media screen and (max-width: 821px) {
    font-size: 1.5rem;
  }
`;

export const FormRightContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width : 70%;

  @media screen and (max-width : 970px) {
    width : 85%;
  }

  @media screen and (max-width : 737px) {
    width : 93%;
  }

`;

export const FormRightInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #00000081;
  height: 2.5rem;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  padding-left: 0.1rem;
  background-color: #fffcf4;

  &:focus {
    border-bottom: 1px solid #d2ac47;
  }

  @media screen and (max-width: 821px) {
    font-size: 0.8rem;
  }
`;

export const FormRightTextarea = styled.textarea`
  border: none;
  outline: none;
  border-bottom: 1px solid #00000081;
  font-size: 0.9rem;
  padding-left: 0.1rem;
  background-color: #fffcf4;
  resize: none;
  padding : 0rem 0rem 5rem;

  &:focus {
    border-bottom: 1px solid #d2ac47;
  }

  @media screen and (max-width: 821px) {
    font-size: 0.8rem;
  }
`;

export const FormRightButton = styled.button`
  width: max-content;
  margin-top: 0.5rem;
  height: 3rem;
  padding: 0 2rem;
  background-color: #d2ac47;
  outline: none;
  border: none;
  cursor: pointer;

  border-radius: 10px;
  font-size: 0.9rem;

  @media screen and (max-width: 821px) {
    font-size: 0.8rem;
  }
`;
