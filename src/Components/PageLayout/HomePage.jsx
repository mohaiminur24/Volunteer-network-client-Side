import React, { useEffect, useState } from 'react';
import Header from '../ShareableComponent/Header';
import SearchSection from '../ShareableComponent/SearchSection';
import { Outlet } from 'react-router-dom';
import SingleEventsection from '../ShareableComponent/SingleEventsection';

const HomePage = () => {
    const [event, setEvent] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:5000/allevent").then(res=> res.json())
        .then(data=> setEvent(data));
    },[]);

    console.log(event);

    return (
        <div className='w-11/12 mx-auto font-inter relative'>
            <Header/>
            <SearchSection/>

            <div className='grid grid-cols-4 gap-5'>
                {
                   event && event.map(et => <SingleEventsection key={et._id} data={et}/>) 
                }
            </div>
            
        </div>
    );
};

export default HomePage;