import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Authlayout = () => {
    return (
        <div className='max-w-7xl mx-auto  mt-10 bg-[#f3f3f3]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Authlayout;