import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import ProductTile from "../components/ProductTile.jsx"

import { getVans } from "../dev/api.js"


export default function Vans() {
    const [vehicleData, setVehicleData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const typeFilter = searchParams.get("type")

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVehicleData(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()

    }, [])

    const productElements = typeFilter ? 
        vehicleData.filter((obj) => obj.type.toLowerCase() === typeFilter.toLowerCase()) 
        : vehicleData


    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

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