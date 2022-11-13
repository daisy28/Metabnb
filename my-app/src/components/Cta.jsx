import React from "react"
import Img from "../img/Frame 59546.png"

const Cta = () => {
     return(
          <section>
               <div className="cta">
                    <div className="cta-text">
                         <h1>MetaBnb NFTs</h1>
                         <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                         <button>Learn More</button>
                    </div>
                    <div className="cta-img">
                         <img src={Img} alt="" />
                    </div>
               </div>
          </section>
     )
}

export default Cta