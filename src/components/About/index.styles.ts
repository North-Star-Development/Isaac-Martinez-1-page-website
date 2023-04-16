import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #fffcf4;
  padding: 4rem 3.5rem 1rem;

  @media screen and (max-width: 861px) {
    padding: 2rem 2.5rem 1rem;
  }

  @media screen and (max-width: 400px) {
    padding: 2rem 1.2rem 1rem;
  }

  .merchant {
    margin-top: -4rem;

    &__images {
        display: flex;
        gap: 2rem;
        justify-content : center;
        align-items : center;
        padding : 2rem;

        img {
            width : 23rem;
            border: solid 2px #D2AC47;
            border-radius : 0.5rem;
        }
    }
  }
`;

export const AboutBoxOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 800px) {
    gap: 1rem;
  }
  @media screen and (max-width: 673px) {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 2rem;
  }
`;


export const AboutText = styled.span`
    display: block;
    margin-bottom: 1.5rem;
    color: #d2ac47;
    font-size: 1rem;
    font-weight: 700;

   
`;

export const AboutTextSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
`;

export const AboutImageSide = styled.div`
  display : flex;
  justify-content : center;
  width: 100%;
`;

export const AboutImage = styled.img`
  max-width: 70%;

  @media screen and (max-width : 1100px) {
    max-width : 80%;
  }
  @media screen and (max-width : 450px) {
    max-width : 100%
  }
`;

export const AboutHeader = styled.span`
  display: block;
  word-spacing: 5px;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing : -0.15rem;

  @media screen and (max-width: 1115px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 949px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 739px) {
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 737px) {
    font-size: 1.4rem;
    letter-spacing : -0.09rem;
  }

  @media screen and (max-width: 673px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 425px) {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
`;
export const AboutSmallText = styled.span`
  display: block;
  font-weight: 200;
  font-size: 1rem;
  line-height: 130%;
 
  width: 90%;

  @media screen and (max-width: 949px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 737px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 673px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 425px) {
    font-size: 0.9rem;
    width: 100%;
  }
`;

export const AboutDetails = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    // align-items : center;
    margin : 4rem 0rem;

    h2 {
        display: block;
        word-spacing: 5px;
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        letter-spacing : -0.15rem;
        margin : auto;

        @media screen and (max-width: 949px) {
          font-size: 1.6rem;
        }
      
        @media screen and (max-width: 739px) {
          margin-bottom: 0.5rem;
          font-size: 1.6rem;
        }
      
        @media screen and (max-width: 737px) {
          font-size: 1.6rem;
          letter-spacing : -0.09rem;
        }
      
        @media screen and (max-width: 673px) {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
      
        @media screen and (max-width: 425px) {
          font-size: 1.7rem;
          margin-bottom: 0.5rem;
        }
    }

    p {
        display: block;
        font-weight: 200;
        font-size: 1rem;
        line-height: 130%;
        inline-size: 62rem;
        overflow-wrap: break-word;
        margin: auto;
        padding : 1rem 0rem;

        @media screen and (max-width : 1066px) {
          inline-size: unset;
        }
    }

    .second {
        display : flex;
        padding : 2rem 0rem;
        flex-direction : column;

        h2 {
        display: block;
        word-spacing: 5px;
        font-size: 1.7rem;
        font-weight: 700;
        margin-bottom: 1rem;
        letter-spacing : -0.05rem;
        margin : auto;
        }
      
    }
`

export const ParagraphDetails = styled.div`
     display : flex;
     

     .details {
        display : grid;
        grid-template-columns : 1fr 1fr;
        margin: auto;
        gap : 2rem;
        padding : 1rem 0rem;

        .each {
          background-color: rgb(242 230 202);
          padding : 0.5rem 1rem;
          border-radius : 0.5rem;
        }

        h3 {
        display: block;
        word-spacing: 5px;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 1rem;
        letter-spacing : -0.05rem;
        margin : auto;
       }

       p {
        display: block;
        font-weight: 200;
        line-height: 130%;
        inline-size: 30rem;
        overflow-wrap: break-word;
        margin: auto;
        }
     }

     
`
