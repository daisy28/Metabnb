import React, { useState } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Place from "./Pages/Place"
import Modal from "./components/Modal"

const App = () => {

     const[modal, setModal] = useState(false)
     const bodyOverflow = document.querySelector("body")

     const toggleBtn = () => {
          setModal((prevModal) => {
               return !prevModal
               
          })

          console.log(modal)
     }

      if (modal){
               bodyOverflow.style.overflow = "hidden"
          }
          else{
               bodyOverflow.style.overflow = "auto";
          }



  return(
       <div>
          <Modal modal={modal} toggleBtn={toggleBtn} />
            <HashRouter Basename="/">
                 <Routes>
                      <Route path="/" element = {<Homepage toggleBtn={toggleBtn} /> }></Route>

                      <Route exact path="/Pages/Place" element = {<Place toggleBtn={toggleBtn} />} ></Route>
                 </Routes>
            </HashRouter>
       </div>
  )
}

export default App