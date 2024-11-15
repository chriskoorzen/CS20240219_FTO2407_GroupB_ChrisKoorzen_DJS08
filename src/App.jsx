import { HashRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans.jsx"
import Details from "./pages/Details.jsx"
import Layout from "./components/Layout.jsx"
import HostLayout from "./components/HostLayout.jsx"
import Dashboard from "./pages/host/Dashboard.jsx"
import Income from "./pages/host/Income.jsx"
import Reviews from "./pages/host/Reviews.jsx"


function App() {

  return (
    <HashRouter basename="/">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="about" element={<About />}/>
                <Route path="vans" element={<Vans />} />
                <Route path="vans/:id" element={<Details />} />
                <Route path="host" element={<HostLayout />}>
                    <Route index element={<Dashboard />}/>
                    <Route path="income" element={<Income />}/>
                    <Route path="reviews" element={<Reviews />}/>
                </Route>
            </Route>
        </Routes>
    </HashRouter>
  )
}

export default App
