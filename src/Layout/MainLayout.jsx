import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Shared/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar /> <br />
            <Outlet />
        </div>
    );
};

export default MainLayout;