import React from "react"
import Cards from "../components/Cards"
import cardData from "../cardData"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Hero from "../components/Hero"
import Cta from "../components/Cta"
import Footer from "../components/Footer"




function App({toggleBtn}) {

  const data = cardData.map((cards) => {
    return <Cards 
    key={cards.id}
    cards={cards}
    />
  })


  return (
    <div className="app">
      <Header toggleBtn={toggleBtn} />
      <Menu toggleBtn={toggleBtn} />
      <Hero />
      <div className="cards-wrapper">
      <h1>Inspiration for your next adventure</h1>
      <div className="cards-container">
      {data}
      </div>
      </div>
      <Cta />
      <Footer />
      
    </div>
  );
}

export default App;
