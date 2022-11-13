import React from "react"
import Logo from "../img/Group.png"
import { Link } from "react-router-dom"
import { useRef } from "react"
import "../nav.css"

const Menu = ({toggleBtn}) => {

     const navRef = useRef()

     const showNavBar = () => {
          navRef.current.classList.toggle("responsive_nav")
     }

     return(
          <nav className="navigation" ref={navRef}>
               <div>
                    <div className="nav">
                    <img src={Logo} alt="" />
                    <div className="menu-toggle" onClick={showNavBar}></div>
                    </div>
                  
                         <div className="menu-links" id="menu">
                         <Link to="../" className="menu-link">Home</Link>
                              <Link to="../Pages/Place" className="menu-link">Place to stay</Link>
                              <a href="https://github.com" className="menu-link">NFTs</a>
                              <a href="https://github.com" className="menu-link">Community</a>
     
                              <div className="bttn">
                              <button onClick={toggleBtn}>connect wallet</button>
                              </div>
                         </div>
               </div>
          </nav>
     )
}

export default Menu