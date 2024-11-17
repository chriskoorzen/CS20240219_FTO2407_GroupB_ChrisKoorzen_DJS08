import { HashRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout.jsx"
import Home from "./pages/Home.jsx"
import NotFound from "./pages/404.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans.jsx"
import Details from "./pages/Details.jsx"

import Login from "./pages/Login.jsx"

import AuthRequired from "./components/AuthRequired.jsx"
import HostLayout from "./components/HostLayout.jsx"
import Dashboard from "./pages/host/Dashboard.jsx"
import Income from "./pages/host/Income.jsx"
import Reviews from "./pages/host/Reviews.jsx"
import HostVans from "./pages/host/HostVans.jsx"
import HostVanDetail from "./pages/host/HostVanDetail.jsx"
import HostVanPhotos from "./pages/host/HostVanPhotos.jsx"
import HostVanInfo from "./pages/host/HostVanInfo.jsx"
import HostVanPricing from "./pages/host/HostVanPricing.jsx"


function App() {

  return (
    <HashRouter basename="/">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="*" element={<NotFound />}/>

                <Route path="about" element={<About />}/>
                <Route path="vans" element={<Vans />} />
                <Route path="vans/:id" element={<Details />} />
                
                <Route path="login" element={<Login />}/>

                <Route element={<AuthRequired />}>
                  <Route path="host" element={<HostLayout />}>
                      <Route index element={<Dashboard />}/>
                      <Route path="income" element={<Income />}/>
                      <Route path="reviews" element={<Reviews />}/>
                      <Route path="vans" element={<HostVans />}/>
                      <Route path="vans/:id" element={<HostVanDetail />}>
                          <Route index element={<HostVanInfo />} />
                          <Route path="pricing" element={<HostVanPricing />} />
                          <Route path="photos" element={<HostVanPhotos />} />
                      </Route>
                  </Route>
                </Route>

            </Route>
        </Routes>
    </HashRouter>
  )
}

export default App
