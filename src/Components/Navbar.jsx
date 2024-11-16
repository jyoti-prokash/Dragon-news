import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '.././assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                
            </div>
            <div className='space-x-5'>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex gap-3'>
                    <img src={userIcon} alt="user icon" />
                <Link to="login"><button className='bg-[#403F3F] text-white font-bold px-5 py-3'>Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;