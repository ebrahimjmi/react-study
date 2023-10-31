import React, { useState } from 'react'
import Header from '../components/Header'
import Products from '../components/Products'
import ComponetLifeCycle from '../components/ComponetLifeCycle';
import LifeCylceUsingHooks from '../components/LifeCylceUsingHooks';
import { Outlet } from 'react-router-dom';

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
      {/* <ComponetLifeCycle /> */}
      {/* <LifeCylceUsingHooks /> */}
    </div>
  )
}

export default HomePage