// import styled;
import styled from "styled-components";


export const CarouselContainer = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  
  .carousel-buttons {
    display : flex;
    gap: 0.5rem;
    padding-top : 1rem;

     
    button {
        width : 2.3rem;
        height : 0.3rem;
        background : #D2AC47;
        cursor : pointer;
        border: none;
    }
    .active {
        background : black;
    }
  }
  .carousel-images {
    display : flex;
    position : relative;
    gap: 1rem;
    transition: transform 0.5s ease-in-out;

    .imgs {
        width: 19rem;
        height : 19rem;
        border-radius : 0.5rem;

       @media screen and (max-width : 685px) {
        width : 15rem;
        height : 15rem;
       }

       @media screen and (max-width : 485px) {
        width : 21rem;
        height : 19rem;
       }
     }

   
      .btn {
        width : 2.5rem;
        height : 2.5rem;
        margin: auto;
        border: unset;
        cursor : pointer;
        @media screen and (max-width : 594px) {
          display : none;
        }


     }
  }

`