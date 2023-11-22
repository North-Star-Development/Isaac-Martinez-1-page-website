import { paragraphDetails } from "../../utils/utils";
import Carousel from "../Carousel";

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
            We Understand Small Business & Provide Convenient Financing Solutions!
            </AboutHeader>
  
            <AboutSmallText>
            "Real Momentum offers swift and seamless payment solutions for small businesses. Sign up today and unlock savings!"
            </AboutSmallText>
          </AboutTextSide>
        </AboutBoxOne>
        <AboutDetails>
            <h2>Good Bye Credit Card Processing Fees! and Save More With Us!</h2>
            <p> "In today's business landscape, our Cash Discount Program is a tailored solution for cost savings, optimized cash flow, 
              and enhanced customer experiences."</p>
             <Carousel/>
             <div className="second">
               <h2> Here are the top benefits of implementing our Cash Discount Program!:</h2> 
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
        <AboutDetails className="merchant" id="merchant">
            <h2> Stop Paying Credit Card Processing Fees! and Save more with us! </h2>
        
            <p> Take advantage of our exclusive promotion for new members joining our Cash Discount Program. 
              Register within the next 30 days to unlock a special discount on the initial setup fee.</p>
              <div className="merchant__images">
                <img src="/assets/pngs/img-merchant.png" alt="merchant" />
                <img src="/assets/pngs/img-merchant2.png" alt="merchant " />
            </div>
            {/* <MerchantContact/> */}
        </AboutDetails>
      </AboutContainer>
    );
  };
  
  export default About;
  
