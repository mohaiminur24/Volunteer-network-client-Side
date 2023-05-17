import React from 'react';
import SideBar from '../ShareableComponent/SideBar';
import { Outlet } from 'react-router-dom';

const EventPage = () => {
    return (
        <div className='grid grid-cols-5 bg-gray-100 h-screen'>
            <div className='bg-white md:col-span-2 lg:col-span-1 col-span-5'><SideBar/></div>
            <div className='lg:col-span-4 md:col-span-3 col-span-5'><Outlet/></div> 
        </div>
    );
};

export default EventPage;