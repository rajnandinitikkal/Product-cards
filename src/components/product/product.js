import React , {useState} from 'react'
import './product.css';
// import {useState} from 'react-router-dom';

export default function Product() {
    const [count, setCount] = useState(0);
     
    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
        setCount(count-1)
    }

  return (
    <>
    <div className='box-Container'>
      <div className='Product-container'>
        <p>{count}</p>
        <button className="btn-container" onClick={Increment}>+</button>
        <button className="btn-container" onClick={Decrement}>-</button>
      </div>

      <div className='Product-container'>
        <p>{count}</p>
        <button className="btn-container" onClick={Increment}>+</button>
        <button className="btn-container" onClick={Decrement}>-</button>
      </div>

      <div className='Product-container'>
        <p>{count}</p>
        <button className="btn-container" onClick={Increment}>+</button>
        <button className="btn-container" onClick={Decrement}>-</button>
      </div>
    </div>
    </>
  )
}
