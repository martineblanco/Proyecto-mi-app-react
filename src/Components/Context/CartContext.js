import React, { createContext, useState } from 'react'

export const CartContext = createContext ({cart: []})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, cant) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, cant}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const quantity = () => {
        return cart.reduce((acc, el) => acc + el.cant, 0)
    }

    const subtotal = () => {
        return cart.reduce((acc, el) => acc + el.price, 0)
    }

    const total = () => {
        return cart.reduce((acc, el) => acc + el.price * el.cant,0)
    }


    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, quantity, subtotal, total}}>
            {children}
        </CartContext.Provider>
    )

}
 

