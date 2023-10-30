import React, { useState } from 'react'
import productData from './ProductData';
const Products = ({addToCart, removeCartItem}) => {
  const [product, setProduct] = useState(productData);


  return (
    <div>
      <div className='container'>
        <h3 style={{ marginTop: '10px' }}>All Products</h3>
        <div className='row'>
        {product.map(item => <div key={item.id} className="card col-md-3">
          <img src={`../images/${item.img}.jpg`} className="card-img-top" alt="Image" style={{widows: '300px'}} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.price}</p>
            <button href="#" className="btn btn-primary" onClick={(e)=>addToCart(item)}>Add To Cart</button>
            <button href="#" className="btn btn-danger" onClick={(e)=>removeCartItem(item)}>Remove To Cart</button>
          </div>
        </div>)}
        </div>
      </div>
    </div>
  )
}

export default Products