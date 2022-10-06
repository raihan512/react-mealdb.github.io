import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header bg-cyan-400 p-2'>
            <NavLink className={'text-2xl font-bold uppercase mr-5 hover:text-blue-500'} to='/home'>Home</NavLink>
            <NavLink className={'text-2xl font-bold uppercase mr-5 hover:text-blue-500'} to='/about'>About</NavLink>
            <NavLink className={'text-2xl font-bold uppercase mr-5 hover:text-blue-500'} to='/restaurant'>Restaurant</NavLink>
        </div>
    );
};

export default Header;