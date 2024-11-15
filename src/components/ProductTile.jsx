import { Link } from "react-router-dom"


export default function ProductTile({vehicle}) {
    
    return (
        <div key={vehicle.id} className="van-tile">
            <Link to={vehicle.id}>
                <img src={vehicle.imageUrl} />
                <div className="van-info">
                    <h3>{vehicle.name}</h3>
                    <p>${vehicle.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${vehicle.type} selected`}>{vehicle.type}</i>
            </Link>
        </div>
    )
}