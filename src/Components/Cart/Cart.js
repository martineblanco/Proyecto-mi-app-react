import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'
import { Button } from 'react-bootstrap'

const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext)

    const totalAmount = total()


    if (totalAmount=== 0) {
        return (
            <div>
                <h3 className='titleProductEmpty'>No hay productos en el carrito</h3>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h5 className='Total'>Total: ${totalAmount}</h5>
            <Button onClick={() => clearCart()} className='buttonClearCart' >Limpiar Carrito</Button>
            <div>
            <Link to='/checkout' className='Checkout'>
                <Button variant="success" className='buttonCheckout'>Checkout</Button>
            </Link>
            </div>
           
        </div>

    )
}

export default Cart