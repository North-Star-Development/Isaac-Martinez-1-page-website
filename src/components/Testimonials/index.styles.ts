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
`