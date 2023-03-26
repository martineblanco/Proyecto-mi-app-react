import { useState } from 'react'

const ItemListContainer = (props) => {
 
  const [miEstado, setMiEstado] = useState(0) // contador

  return (
    <div>
        {props.greeting}
    </div>
  )
}

export default ItemListContainer