import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify'
function ProductDetails({cartItems,setCartIems}) {
    let [product, setProduct] = useState([])
    let [qty,setQty]=useState(1)
    const {id}=useParams();
        let fetchApi = async (params) => {
            let data = await fetch("http://localhost:3300/api/e1/products/"+id);
            let finalData = await data.json();
            console.log(finalData.products)
            setProduct(finalData.products)
        }
        function addToCart(){
            console.log(cartItems.length)
            let itemExist=cartItems.find((item)=>{
                return item.product._id==product._id
            });
            if(!itemExist){
                const newItem={product,qty};
                setCartIems((item)=>[...item,newItem])
                toast.success("item added successfully")
            }
        }
        function increaseQty(){
            if(product.count==qty){
                return ;
            }else{
                setQty((state)=>state+1)
            }
        }
        function decreaseQty(){
            if(qty>1){
                setQty((state)=>state-1)
            }
        }
        useEffect(()=>{
            fetchApi()
        },[])
  return (
    <div className="container container-fluid">
        <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
                <img src={product.image} alt="sdf" height="500" width="500"/>
            </div>

            <div className="col-12 col-lg-5 mt-5">
                <h3>{product.title}</h3>
                <p id="product_id">{product.id}</p>

                <hr/>

                <div className="rating-outer">
                    <div className="rating-inner" style={{width:`${product.rating/5 *100}%`}}></div>
                </div>
           

                <hr/>

                <p id="product_price">${product.price}</p>
                <div className="stockCounter d-inline">
                    <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                    <input type="number" className="form-control count d-inline" value={qty} readOnly />

                    <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                </div>
                 <button type="button" id="cart_btn" onClick={addToCart} className="btn btn-primary d-inline ml-4">Add to Cart</button>

                <hr/>

                <p>Status: <span id="stock_status">In Stock</span></p>

                <hr/>

                <h4 className="mt-2">Description:</h4>
                <p>{product.description}</p>
                <hr/>
                <p id="product_seller mb-3">Sold by: <strong>Amazon</strong></p>
				
                <div className="rating w-50"></div>
						
            </div>

        </div>

    </div>
  )
}

export default ProductDetails
