import React from "react"
import Setting from "../img/setting-5.png"

const Location = () => {
     return(
          <section>
               <div className="location">
                    <div className="location-links">
                         <a href="." >Restaurant</a>
                         <a href="." >Cottage</a>
                         <a href="." >Castle</a>
                         <a href="." >Fantastic city</a>
                         <a href="." >Beach</a>
                         <a href="." >Carbins</a>
                         <a href="." >Off-grid</a>
                         <a href="." >Farm</a>
                    </div>
                    <div  className="location-btn">
                         <button>Location</button>
                         <img src={Setting} alt="" />
                    </div>
               </div>
          </section>
     )
}

export default Location