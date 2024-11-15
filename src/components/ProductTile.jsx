import { Link } from "react-router-dom"


export default function ProductTile({vehicle, navState}) {
    
    return (
        <div className="van-tile">
            <Link to={vehicle.id} state={navState}>
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