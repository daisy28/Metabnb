import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Place from "./Pages/Place"

const App = () => {
  return(
       <div>
            <HashRouter Basename="/">
                 <Routes>
                      <Route path="/" element = {<Homepage /> }></Route>

                      <Route exact path="/Pages/Place" element = {<Place />} ></Route>
                 </Routes>
            </HashRouter>
       </div>
  )
}

export default App