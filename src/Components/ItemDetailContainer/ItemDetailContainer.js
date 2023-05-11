import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../FirebaseConfig/FirebaseConfig'

import Loader from '../Loader/Loader'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()


    useEffect(() => {
        

        const docRef = doc(db, 'products', id)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data }
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=>setLoading(false))

    }, [id])

    return (
        <div className='ItemDetailContainer'>
            {loading ? <Loader /> : <ItemDetail {...product} />}

        </div>
    )
}

export default ItemDetailContainer