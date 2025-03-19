import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Product() {
    let [product, setProduct] = useState([])
    let fetchApi = async (params) => {
        let data = await fetch("http://localhost:3300/api/e1/products");
        let finalData = await data.json();
        console.log(finalData.products)
        setProduct(finalData.products)
    }
    useEffect(()=>{
        fetchApi()
    },[])

    return (
        <>
            {product.map((m,i) => {
                return (
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img
                                className="card-img-top mx-auto"
                                src={m.image}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">
                                    <Link to={'/product/'+m._id}>{m.title}</Link>
                                </h5>
                                <div className="ratings mt-auto">
                                    <div className="rating-outer">
                                        <div className="rating-inner" style={{width:`${m.rating/5 *100}%`}}></div>
                                    </div>
                                </div>
                                <p className="card-text">${m.price}</p>
                                <Link to={'/product/'+m._id} id="view_btn" className="btn btn-block">View Details</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Product
