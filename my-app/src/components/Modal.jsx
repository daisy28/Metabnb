import React from "react"
import Exit from "../img/x.png"
import Meta from "../img/image 66.png"
import Wallet from "../img/image 69.png"
import Toggle from "../img/Down Chevron.png"

const Modal = ({modal, toggleBtn}) => {

     return(
          <div>
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
          </div>
         
     )
}

export default Modal




