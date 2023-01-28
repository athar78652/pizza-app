import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";

const Header = () => {
    return (
       <>
        <div className='header'>
            <span><h1>Pizza Hut</h1></span>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/menu'>Menu</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/signin'><button className='nav_sign'>Sign In</button></NavLink></li>
            </ul>
        </div>
       </>
    );
}

export default Header;
