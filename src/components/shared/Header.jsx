import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

const Header = () => {
    return (
        <header className='header'>
            <nav className='navbar'>
                <span className='navbar__logo-container'><Link className='navbar__logo' to='/'>G21 Store</Link></span>
                <ul className='navbar__menu'>
                    <li className='navbar__item'><Link className='navbar__link' to='/login'><i class='bx bx-user-circle navbar__icon'></i>Login</Link></li>
                    <li className='navbar__item'><Link className='navbar__link' to='/cart'><i class='bx bx-cart-alt navbar__icon' ></i>Cart</Link></li>
                    <li className='navbar__item'><Link className='navbar__link' to='/purchases'><i class='bx bx-box navbar__icon'></i>Purchases</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;