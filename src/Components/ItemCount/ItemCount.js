import React from 'react'
import './ItemCount.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'


const ItemCount = ({stock, initial, onAdd}) => {
    const [addQuantity, setAddQuantity]= useState(initial)

    const increment = () => {
        if(addQuantity < stock){
            setAddQuantity(addQuantity+1)
        }
    }

    const decrement = () => {
        if (addQuantity > 1) {
            setAddQuantity(addQuantity-1)
        }
    }

  return (
    <div className='Counter'>
        <div className='Controls'>
      
            <Button variant="primary" className='Button' onClick={decrement}>-</Button>
            <h4 className='Number'>{addQuantity}</h4>
            <Button variant="primary" className='Button' onClick={increment}>+</Button>
        </div>
            <Button className='Button' onClick={() => onAdd(addQuantity)} disabled={!stock}>
                Agregar carrito
            </Button>
        
    </div>
  )
}

export default ItemCount