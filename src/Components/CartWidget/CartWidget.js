import React from 'react'
import { BsFillCartCheckFill } from "react-icons/bs";
import './CartWidget.css'

const CartWidget = () => {
  return (
    <>
     <p> <BsFillCartCheckFill size={30} className='carrito' /> 10 </p> 
    </>
  
  )
}

export default CartWidget