import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"

function App() {

  return (
    <BrowserRouter basename="DJS/08-ReactRouter/public/">   {/** DEV: Set base project base URL. REMOVE IN PROD */}
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
