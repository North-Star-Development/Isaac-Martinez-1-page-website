// import styled from styled-components
import styled from "styled-components"

/// testimonials container styles
export const TestimonialsContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background-color: #fffcf4;
 
    .testimonials {
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : center;
        gap : 0.5rem;

        h2 {
            display: block;
            word-spacing: 5px;
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            letter-spacing : -0.15rem;
            margin : auto;
        }
      p {
          display: block;
          color: #d2ac47;
          font-size: 1.1rem;
          font-weight: 700;
          text-transform : capitalize;
      }
    }

    .clients {
        display : flex;
        gap: 2rem;
        padding : 2rem 0rem;

        .client {
            width : 19rem;
     

            .each_{
              height : 12rem;
              position: relative;
              display : flex;
              justify-content : center;
              align-items : center;
              flex-direction : column;
              gap: 1rem;
              border-radius : 0rem 0rem 0.5rem 0.5rem;
              box-shadow: rgba(0, 0, 0, 0.086) 0px 13px 17px;
              padding-bottom: 0.9rem;
              img {
                position: absolute;
                width : 4rem;
                top: -2.5rem;
              }
              h3 {
                display: block;
                word-spacing: 5px;
                font-size: 1rem;
                font-weight: 600;
                margin-top: 1.7rem;
                letter-spacing : -0.05rem;
              }
              p {
                padding : 0rem 1.5rem;
                margin: auto;
                font-style: normal;
                font-weight: 400;
                font-size: 0.8rem;
                line-height: 20px;
                letter-spacing: -0.02em;
                color : rgba(0, 0, 0, 0.7);
              }
            }
        }
    }
`