import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import ProductTile from "../components/ProductTile.jsx"


export default function Vans() {
    const [vehicleData, setVehicleData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")

    useEffect(() => {
        fetch("/api/vans")
            .then((response) => response.json())
            .then((json) => setVehicleData(json.vans))
    }, [])

    const productElements = typeFilter ? 
        vehicleData.filter((obj) => obj.type.toLowerCase() === typeFilter.toLowerCase()) 
        : vehicleData

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>

            <div className="van-list-filter-buttons">
                <button onClick={()=>{setSearchParams({type: "simple"})}} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>Simple</button>
                <button onClick={()=>{setSearchParams({type: "luxury"})}} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</button>
                <button onClick={()=>{setSearchParams({type: "rugged"})}} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</button>

                { typeFilter ? (<button onClick={()=>{setSearchParams({})}} className="van-type clear-filters">Clear Filters</button>)
                  : null
                }
            </div>

            <div className="van-list">
                {
                    productElements
                    .map(vehicle => (
                        <ProductTile 
                            key={vehicle.id} 
                            vehicle={vehicle} 
                            navState={ typeFilter && {search: `?${searchParams.toString()}`} }/>
                    ))
                }
            </div>
        </div>
    )
}