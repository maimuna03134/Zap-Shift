import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/Footer';
import { ToastContainer } from 'react-toast';

const MainLayout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
        <ToastContainer />
      </div>
    );
};

export default MainLayout;