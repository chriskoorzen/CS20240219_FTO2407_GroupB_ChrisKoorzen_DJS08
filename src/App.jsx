import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans.jsx"

function App() {

  return (
    <BrowserRouter basename="DJS/08-ReactRouter/public/">   {/** DEV: Set base project base URL. REMOVE IN PROD */}
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/vans" element={<Vans />} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
