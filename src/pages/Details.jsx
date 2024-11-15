import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function Details() {
    const routeParams = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${routeParams.id}`)
            .then(response => response.json())
            .then(data => setProduct(data.vans))
    }, [routeParams.id])
    /** 
     * useEffect will always run regardless if this conditional "routeParams.id" is set or not,
     * because when we navigate away from this page, it is discarded, along with its local memory
     * and re-rendered from scratch when we navigate back to it.
    */ 

    return (
        <div className="van-detail-container">
            {product ? (
                <div className="van-detail">
                    <img src={product.imageUrl} />
                    <i className={`van-type ${product.type} selected`}>{product.type}</i>
                    <h2>{product.name}</h2>
                    <p className="van-price"><span>${product.price}</span>/day</p>
                    <p>{product.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}