import { useState, useEffect } from "react"


export default function Vans() {
    const [vehicleData, setVehicleData] = useState(null)

    useEffect(() => {
        fetch("/api/vans")
            .then((response) => response.json())
            .then((json) => setVehicleData(json))
    }, [])

    return (
        <h1>Vans page goes here 🚐</h1>
    )
}