import { useState, useEffect } from "react"
import ProductTile from "../components/ProductTile.jsx"


export default function Vans() {
    const [vehicleData, setVehicleData] = useState(null)

    useEffect(() => {
        fetch("/api/vans")
            .then((response) => response.json())
            .then((json) => setVehicleData(json))
    }, [])

    const productElements = vehicleData.map(
        vehicle => (<ProductTile vehicle={vehicle}/>)
    )

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {productElements}
            </div>
        </div>
    )
}