import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import logo from './logo.png'

const NavBar = () => {

    return (
        <nav className='navBar'>
            <div className='titulo'>
                <img className='logo' src={logo} alt='logo' />
                <h1 className='title'>Intech Hardware</h1>

            </div>
            <div className='link'>
                <a className='links' href="#" >Inicio</a>
                <a className='links' href="#" >Productos</a>
                <a className='links' href="#" >Nosotros</a>
                <CartWidget />
            </div>

        </nav>
    )

}

export default NavBar