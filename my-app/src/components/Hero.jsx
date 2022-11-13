import React from "react"
import HeroImg from "../img/Group 4028.png"
import Mbtoken from "../img/Group 59536.png"
import Meta from "../img/Group 4038.png"
import Opensea from "../img/logo.png"

const Hero = () => {
     return(
          <section>
               <div className="hero">
                    <div className="hero-text">
                         <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
                         <p>
                         we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                         </p>
                         <div className="input-btn">
                              <input type="text" placeholder="Search for location" />
                              <button>Search</button>
                         </div>
                    </div>

                    <div className="hero-img">
                         <img src={HeroImg} alt="" />
                    </div>

                   
               </div>
               <div className="wallets">
                         <div className="wallet-links">
                              <img src={Mbtoken} alt="" />
                              <a href="www">MBToken</a>
                         </div>

                         <div className="wallet-links">
                         <img src={Meta} alt="" className="wallet-img" />
                              <a href="www">METAMASK</a>
                         </div>

                         <div className="wallet-links">
                        <img src={Opensea} alt="" className="wallet-img" />
                              <a href="www">OpenSea</a>
                         </div>
                    </div>
          </section>
     )
}

export default Hero