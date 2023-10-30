import React, { useState } from 'react'
import Header from '../components/Header'
import Products from '../components/Products'

const HomePage = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (product)=> {
    const temCart = [...cart];
    temCart.push(product);
    setCart(temCart);
  } 
  const removeCartItem = (product)=> {
    const temCart = [...cart];
    // debugger;
    const itemIndex = temCart.findIndex((item) => item.id === product.id);
    console.log(itemIndex);
    temCart.splice(itemIndex, 1);
    console.log(temCart);
    setCart(temCart);
  } 
  return (
    <div>
      <Header cart = {cart} />
      <Products addToCart={addToCart} removeCartItem ={removeCartItem} />
    </div>
  )
}

export default HomePage