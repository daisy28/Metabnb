import React from "react"
import Logo from "../img/Group.png"
import Exit from "../img/x.png"
import Meta from "../img/image 66.png"
import Wallet from "../img/image 69.png"
import Toggle from "../img/Down Chevron.png"
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {

     const[modal, setModal] = useState(false)

     const toggleBtn = () => {
          setModal((prevModal) => {
               return !prevModal
          })
     }

     return(
          
          <header>
               <div className="header" id="header">
                    <img src={Logo} alt="" />
                    <div className="links">
                    <Link to="../">Home</Link>
                         <Link to="../Pages/Place">Place to stay</Link>
                         <a href="https://github.com">NFTs</a>
                         <a href="https://github.com">Community</a>
                    </div>
                    <div className="btn">
                         <button onClick={toggleBtn}>connect wallet</button>
                    </div>
               </div>

               {modal && (

                    <section className="wallet-container">
                         <div className="wallet-modal">
                    <div className="modal">
                         <div className="overlay" onClick={toggleBtn} ></div>
     
                         <div className="modal-header">
                         <h3>Connect Wallet</h3>
                         <img src={Exit} alt="" onClick={toggleBtn} />
                         </div>
                         
                         <div className="wallet-btn">
                              <p>Choose your preferred wallet:</p>
                              <div className="modal-btn">
                                   <img src={Meta} alt="" />
                                   <a href=".">Metamask</a>
                                   <img src={Toggle} alt="" className="open" />
                              </div>
     
                              <div className="modal-btn">
                                   <img src={Wallet} alt="" />
                                   <a href=".">WalletConnect</a>
                                   <img src={Toggle} alt="" className="open" />
                              </div>
                              
                         </div>
                    </div>
               </div>
                    </section>
                    
               )}
          </header>
     )
}

export default Header