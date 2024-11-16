import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import LatestNews from '../Components/LatestNews';
import LeftNavbar from '../Components/Layout-Components/LeftNavbar';
import RightNavbar from '../Components/Layout-Components/RightNavbar';
import Footer from '../Components/Layout-Components/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <header className='my-5'>
            <Header></Header>
            </header>
            <section>
                <LatestNews></LatestNews>
            </section>
            <section className='my-7'>
                <Navbar></Navbar>
            </section>
            <main className='grid grid-cols-12 gap-5 my-5'>
                <aside className='col-span-3'><LeftNavbar></LeftNavbar></aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'><RightNavbar></RightNavbar></aside>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;