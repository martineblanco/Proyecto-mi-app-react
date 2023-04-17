import React from 'react'
import Cards from '../Card/Cards'
import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <div className='ListGroup'>
        {products.map(prod => <Cards key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList