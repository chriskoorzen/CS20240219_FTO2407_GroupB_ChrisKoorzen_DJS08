import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans.jsx"
import Details from "./pages/Details.jsx"
import Layout from "./components/Layout.jsx"


function App() {

  return (
    <BrowserRouter basename="DJS/08-ReactRouter/public/">   {/** DEV: Set base project base URL. REMOVE IN PROD */}
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<Details />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
