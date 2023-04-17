import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import logo from './logo.png'
import { NavLink, Link } from 'react-router-dom'
import { Button } from '@mui/material';

const NavBar = () => {

    return (
        <nav className='navBar'>
            <div className='titulo'>
                <Link to='/'>
                    <img className='logo' src={logo} alt='logo' />
                </Link>
                <h1 className='title'>Intech Hardware</h1>

            </div>
            <div className='link'>

                <NavLink to={`/category/notebook`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    <Button variant="contained" size="medium" color="secondary" >Notebook</Button>
                </NavLink>

                <NavLink to={`/category/pc escritorio`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    <Button variant="contained" size="medium" color="secondary">PC Escritorio</Button>
                </NavLink>

                <NavLink to={`/category/monitor`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    <Button variant="contained" size="medium" color="secondary">Monitor</Button>
                </NavLink>

                <CartWidget />
            </div>

        </nav>
    )

}

export default NavBar