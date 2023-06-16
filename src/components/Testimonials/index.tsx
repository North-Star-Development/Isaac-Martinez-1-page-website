// import custom styles
import { clientDetails } from "../../utils/utils";
import { AboutDetails } from "../About/index.styles";
import MerchantContact from "../Merchant";
import { TestimonialsContainer } from "./index.styles";

 const Testimonials = () => {
    return (
         <TestimonialsContainer id="testimonials">
            <div className="testimonials">
                <p className="testimonials">testimonials</p>
                <h2> What our Top Clients are saying!</h2>
            </div>
            <div className="clients">
                {
                 clientDetails?.map((client, i) => (
                     <div className="client" key={i}>
                        <img className="rect" src="/assets/pngs/rect.png" alt="rect"/>
                         <div className="each_">
                            <img src={`/assets/pngs/Ellipse${i+1}.png`} alt="clients image"/>
                            <h3>{client?.name}</h3>
                            <p>{client?.testimony}</p>
                            <span>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</span>
                         </div>
                     </div>
                    ))
                }
            </div>
            <MerchantContact/>
         </TestimonialsContainer>
    )
 }

 export default Testimonials;