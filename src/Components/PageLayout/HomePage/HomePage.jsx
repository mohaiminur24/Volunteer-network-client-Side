import React from 'react';
import Header from '../../ShareableComponent/Header';
import SearchSection from './SearchSection';

const HomePage = () => {
    return (
        <>
        <div className="bg-[url(https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] h-[calc(100vh-200px)] absolute top-0 w-full bg-cover opacity-10"></div>

        <div className='w-11/12 mx-auto font-inter relative'>
            <Header/>
            <SearchSection/>
        </div>
        </>
    );
};

export default HomePage;