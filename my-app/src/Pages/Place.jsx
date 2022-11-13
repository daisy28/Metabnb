import React from "react"
import Cards from "../components/Cards"
import cardData2 from "../cardData2"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Location from "../components/Location"

const Place = ({toggleBtn}) => {

     const data = cardData2.map((cards) => {
          return <Cards 
          key={cards.id}
          cards={cards}
          />
        })


     return(
          <div>
               <Header toggleBtn={toggleBtn} />
               <Location />
               <div className="cards-wrapper">
                    <div className="cards-container">
                         {data}
                    </div>
                  
               </div>
               <Footer />
          </div>
     )
}

export default Place
