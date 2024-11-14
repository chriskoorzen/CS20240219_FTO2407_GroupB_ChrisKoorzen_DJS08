

export default function ProductTile({vehicle}) {
    
    return (
        <div key={vehicle.id} className="van-tile">
            <img src={vehicle.imageUrl} />
            <div className="van-info">
                <h3>{vehicle.name}</h3>
                <p>${vehicle.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${vehicle.type} selected`}>{vehicle.type}</i>
        </div>
    )
}