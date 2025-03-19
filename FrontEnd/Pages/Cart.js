import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

function Cart({ cartItems, setCartIems }) {
    let [complete,setComplete]=useState(false)
    console.log(cartItems)
    function increaseQty(item) {
        if (item.product.count == item.qty) {
            return;
        } else {
            let updateItems = cartItems.map((m) => {
                console.log(item.product._id);
                console.log(m.product._id);
                if (m.product._id == item.product._id) {
                    m.qty++
                }
                return m;
            })
            setCartIems(updateItems)
        }
    }
    function decreaseQty(item) {
        if (item.qty > 1) {
            let update = cartItems.map((m) => {
                if (item.product._id == m.product._id) {
                    m.qty--;
                }
                return m;
            })
            setCartIems(update)
        }
    }
    function removeItems(item) {
        let deleteItem = cartItems.filter((f) => {
            if (item.product._id != f.product._id) {
                return item;
            }
        })
        setCartIems(deleteItem)
    }
    async function orderHandeler(){
        fetch('http://localhost:3300/api/e1/order',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(cartItems)
        }).then(()=>{
            setCartIems([])
            setComplete(true);
            toast.success('Your Order placed')
        })
    }
    // orderHandeler()
    return (cartItems.length > 0 ? <Fragment>
        <div className="container container-fluid">
            <h2 className="mt-5">Your Cart: <b>{cartItems.length}</b></h2>

            <div className="row d-flex justify-content-between">
                <div className="col-12 col-lg-8">
                    {cartItems.map((m) =>

                    (<Fragment>
                        <div className="cart-item">
                            <div className="row">
                                <div className="col-4 col-lg-3">
                                    <img src={m.product.image} alt="Laptop" height="90" width="115" />
                                </div>

                                <div className="col-5 col-lg-3">
                                    <Link to={'/product/' + m.product._id}>{m.product.title}</Link>
                                </div>


                                <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                    <p id="card_item_price">$245.67</p>
                                </div>

                                <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                    <div className="stockCounter d-inline">
                                        <span className="btn btn-danger minus" onClick={() => decreaseQty(m)}>-</span>
                                        <input type="number" className="form-control count d-inline" value={m.qty} readOnly />

                                        <span className="btn btn-primary plus" onClick={() => increaseQty(m)}>+</span>
                                    </div>
                                </div>

                                <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                    <i id="delete_cart_item" className="fa fa-trash btn btn-danger" onClick={() => removeItems(m)}></i>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </Fragment>)
                    )}
                </div>
                <div className="col-12 col-lg-3 my-4">
                    <div id="order_summary">
                        <h4>Order Summary</h4>
                        <hr />
                        <p>Subtotal:  <span className="order-summary-values">{cartItems.reduce((acc, m) => (acc + m.qty), 0)} (Units)</span></p>
                        <p>Est. total: <span className="order-summary-values">${cartItems.reduce((acc, r) => {
                            let res = (acc + r.product.price * r.qty)
                            return res
                        }, 0)}</span></p>
                        <hr />
                        <button id="checkout_btn" onClick={orderHandeler} className="btn btn-primary btn-block">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment> : (!complete? <h2 className='mt-5'>Your Cart is Empty</h2>:
        <Fragment>
            <h2 className='mt-5'> Order completed</h2>
            <p>Your order has successfully placed </p>
        </Fragment>
        )

    )
}

export default Cart
