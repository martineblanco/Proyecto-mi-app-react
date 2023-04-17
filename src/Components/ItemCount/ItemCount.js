import React from 'react'
import './ItemCount.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity]= useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

  return (
    <div className='Counter'>
        <div className='Controls'>
      
            <Button variant="primary" className='Button' onClick={decrement}>-</Button>
            <h4 className='Number'>{quantity}</h4>
            <Button variant="primary" className='Button' onClick={increment}>+</Button>
        </div>
            <Button className='Button' onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar carrito
            </Button>
        
    </div>
  )
}

export default ItemCount