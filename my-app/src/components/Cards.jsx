import React from "react"

const Cards = (props) => {
     return(
          <section>
               <div> 
                    <div className="cards">
                         <div>
                              <img src={`./img/${props.cards.img}`} alt="" />
                              <div className="card-details">
                                   <p>{props.cards.name}</p>
                                   <p className="size">{props.cards.size}</p>
                              </div>
                              <div className="card-details">
                                   <p>{props.cards.distance}</p>
                                   <p>{props.cards.availability}</p>
                              </div>
                              <div className="rating">
                              <img src={`./img/${props.cards.icon}`} alt="" />
                              <img src={`./img/${props.cards.icon}`} alt="" />
                              <img src={`./img/${props.cards.icon}`} alt="" />
                              <img src={`./img/${props.cards.icon}`} alt="" />
                              <img src={`./img/${props.cards.icon}`} alt="" />

                              </div>
                              
                              
                         </div>
                    </div>
               </div>
          </section>
          
     )
}

export default Cards