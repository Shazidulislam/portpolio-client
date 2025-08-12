import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Component/Footer/Footer';

const SubRootLayout = () => {
    return (
        <div className='' >
            <Navbar></Navbar>
            <div className=''>
               <Outlet></Outlet>  
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SubRootLayout;