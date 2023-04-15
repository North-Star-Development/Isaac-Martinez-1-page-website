import { paragraphDetails } from "../../utils/utils";
import MerchantContact from "../Merchant";
import {
    AboutBoxOne,
    AboutContainer,
    AboutDetails,
    AboutHeader,
    AboutImage,
    AboutImageSide,
    AboutSmallText,
    AboutText,
    AboutTextSide,
    ParagraphDetails
  } from "./index.styles";
  


  const About = () => {
    return (
      <AboutContainer id="about">
        <AboutBoxOne>
          <AboutImageSide>
            <AboutImage src="/assets/pngs/image-1.png" />
          </AboutImageSide>
  
          <AboutTextSide>
            <AboutText>About</AboutText>
            <AboutHeader>
              I help you align your goals and dreams with your values
            </AboutHeader>
  
            <AboutSmallText>
              Real momentum is a consulting service that helps clients develop and
              implement strategies to achieve their goals. It is professional and
              affordable.
            </AboutSmallText>
          </AboutTextSide>
        </AboutBoxOne>
        <AboutDetails>
            <h2>Good Bye Credit Card Processing Fees</h2>
            <p> In today's fast-paced business environment, merchants like yourself are constantly looking for ways to reduce costs, improve cash flow, and 
                create a seamless experience for customers. The Cash Discount Program is specifically designed to help you achieve these goals.</p>
             {/* <div> images carousel</div> */}
             <div className="second">
               <h2> Here are the top benefits of implementing our Cash Discount Program:</h2>
                <ParagraphDetails>
                 <div className="details">
                    {
                        paragraphDetails?.map((detail, i) => (
                        <div key={i} className="each">
                          <h3>{detail?.header}</h3>
                          <p>{detail?.paragraph}</p>
                        </div>

                   
                        ))
                    }
                    </div>
                </ParagraphDetails>
             </div>
        </AboutDetails>
        <AboutDetails className="merchant">
            <h2> Stop Paying Merchant Fees!</h2>
            <p> For a limited time, we are offering a special promotion for new members of our Cash Discount Program. Sign up within the next 30 days and
              receive a special discount on the initial setup fee.</p>
            <MerchantContact/>
        </AboutDetails>
      </AboutContainer>
    );
  };
  
  export default About;
  