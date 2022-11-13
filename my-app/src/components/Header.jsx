import React from "react"
import Logo from "../img/Group.png"
import { Link } from "react-router-dom"

const Header = ({toggleBtn}) => {

     return(
          
          <header className="header-container">
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
          </header>
     )
}

export default Header