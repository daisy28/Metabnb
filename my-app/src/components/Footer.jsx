import React from "react"
import Logo from "../img/Group.svg"
import Facebook from "../img/facebook-263-721950.png"
import Instagram from "../img/instagram-216-721958.png"
import Twitter from "../img/twitter-241-721979.png"

const Footer = () => {
     return(
          <footer>
               <div className="footer">
                    <div className="footer-logo">
                         <img src={Logo} alt="" />
                         <div className="social-icons">
                              <a href="."><img src={Facebook} alt="" /></a>
                              <a href="."><img src={Instagram} alt="" /></a>
                              <a href="."><img src={Twitter} alt="" /></a>
                         </div>
                         <p>&copy; 2022 Metabnb</p>
                    </div>

                    <div className="group">
                         <div className="social-links">
                              <p>Community</p>
                              <a href="." >NFTs</a>
                              <a href="." >Tokens</a>
                              <a href="." >Landlords</a>
                              <a href="." >Discord</a>
                         </div>

                         <div className="social-links">
                              <p>Places</p>
                              <a href="." >Castle</a>
                              <a href="." >Farms</a>
                              <a href="." >Beach</a>
                              <a href="." >Learn more</a>
                         </div>
                         <div className="social-links">
                         <p>About us</p>
                         <a href="." >Road map</a>
                         <a href="." >Creators</a>
                         <a href="." >Career</a>
                         <a href="." >Contact us</a>
                        </div>
                    </div>

                    
               </div>
          </footer>
     )
}

export default Footer