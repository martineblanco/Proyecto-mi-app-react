import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import Loader from '../Loader/Loader'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading,setLoading] = useState(true)
    const {id} = useParams()
    

    useEffect(() => {
        getProductById(id)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(()=>setLoading(false))
    }, [id])

    return (
        <div className='ItemDetailContainer'>
            {loading ? <Loader />: <ItemDetail {...product}/>}
            
        </div>
    )
}

export default ItemDetailContainer