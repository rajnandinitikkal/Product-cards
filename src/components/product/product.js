import { useState } from 'react';
import React from 'react'
import './product.css';
import ImgShopping from './../../Images/shopping.webp';

export default function Product() {
    const [count, setCount] = useState(0);
     
    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
        setCount(count-0)
    }

  return (
    <>
      <div className='Product-container'>
      <p className='seller-container'>Best Seller</p>
        <img className='img-container' src={ImgShopping} alt='Product' />
        <p className='des-container'>Mool Hair Grow Oil- 
          Best Ayurvedik
        </p>
        <span className='review-container'>⭐⭐⭐⭐⭐ 98 Reviews</span>
       <p className='description'> Trusted by 1 Million+ Happy Customers</p>
        <h2>{count}</h2> 
        <div className="btn-container"> Quantity
         <button className="btn-container" onClick={Increment}>+</button>
        <button className="btn-container" onClick={Decrement}>-</button>
        </div>
      </div>
    </>
  )
}
