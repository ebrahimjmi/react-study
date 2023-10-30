import React, { useState } from 'react'

const Products = () => {
  const productData = [
    {
      id: 1,
      name: 'phone',
      price: 5000,
      qty: 1,
    },
    {
      id: 2,
      name: 'laptop',
      price: 30000,
      qty: 1,
    },
    {
      id: 3,
      name: 'camera',
      price: 20000,
      qty: 2,
    },
    {
      id: 4,
      name: 'car',
      price: 10000,
      qty: 1,
    },
    {
      id: 5,
      name: 'cycle',
      price: 6000,
      qty: 1,
    }
  ]

  const [product, setProduct] = useState(productData);
  return (
    <div>
      <div className='container'>
        <h3 style={{borderBottom: '2px solid #ccc', paddingBottom: '20px'}}>By Products</h3>
        <table className='table table-bordered table-hover'>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Net Price</th>
            </tr>
          </thead>
          <tbody>
            {
              product.map(item => <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
              </tr>)
            }

            <tr>    
              <td></td>
              <td></td>
              <td></td>
              <td style={{color: 'blue'}}>Total</td>
              <td style={{color: 'blue'}}>{product.reduce((total, item) => total+item.price, 0 )}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products