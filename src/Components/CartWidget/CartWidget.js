
import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { BsFillCartCheckFill } from "react-icons/bs";
import './CartWidget.css'

const CartWidget = () => {
  const { quantity } = useContext(CartContext)

  return (
    
    <Link to='/cart' className='LinkCarrito'>
        <p className='CarritoNumber'> <BsFillCartCheckFill size={30} className='carrito' /> {quantity()} </p> 
    </Link>
     
  )
}

export default CartWidget