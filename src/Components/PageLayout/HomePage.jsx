import React from 'react';
import Header from '../ShareableComponent/Header';
import SearchSection from '../ShareableComponent/SearchSection';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='w-11/12 mx-auto font-inter relative'>
            <Header/>
            <SearchSection/>
            <Outlet/>
        </div>
    );
};

export default HomePage;