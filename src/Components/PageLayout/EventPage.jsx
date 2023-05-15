import React from 'react';
import SideBar from '../ShareableComponent/SideBar';
import { Outlet } from 'react-router-dom';

const EventPage = () => {
    return (
        <div className='grid grid-cols-5 bg-gray-100 h-screen'>
            <div className='bg-white'><SideBar/></div>
            <div className='col-span-4'><Outlet/></div> 
        </div>
    );
};

export default EventPage;