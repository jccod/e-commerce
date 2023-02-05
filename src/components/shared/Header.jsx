import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

const Header = () => {
    return (
        <header className='header'>
            <nav className='navbar'>
                <span className='navbar__logo'><Link to='/'>G21 Store</Link></span>
                <ul className='navbar__menu'>
                    <li className='navbar__item'><Link to='/login'>Login</Link></li>
                    <li className='navbar__item'><Link to='/cart'>Cart</Link></li>
                    <li className='navbar__item'><Link to='/purchases'>Purchases</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;