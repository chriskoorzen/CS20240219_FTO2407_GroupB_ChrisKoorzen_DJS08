import { useEffect, useState } from "react"
import { useParams, useLocation, Link } from "react-router-dom"


export default function Details() {
    const routeParams = useParams()
    const [product, setProduct] = useState(null)
    const location = useLocation()

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

    const search = location.state?.search || ""

    return (
        <div className="van-detail-container">
            
            {product ? (
                <>
                    <Link
                        to={`..${search}`}
                        relative="path"
                        className="back-button"
                    >
                        &larr; <span>Back to {search ? product.type : "all"} vans</span>
                    </Link>

                    <div className="van-detail">
                        <img src={product.imageUrl} />
                        <i className={`van-type ${product.type} selected`}>{product.type}</i>
                        <h2>{product.name}</h2>
                        <p className="van-price"><span>${product.price}</span>/day</p>
                        <p>{product.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                </>
                ) 
                : <h2>Loading...</h2>
            }
        </div>
    )
}