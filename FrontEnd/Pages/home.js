import React from 'react'
import { Fragment } from 'react'
import Product from '../Components/Product'

function home() {
   
  return (
    <Fragment>

    <h1 id="products_heading">Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
        <Product />
      </div>
    </section>


    </Fragment>
  )
}

export default home