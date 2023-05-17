import React, { useEffect, useState } from 'react';
import Header from '../ShareableComponent/Header';
import SearchSection from '../ShareableComponent/SearchSection';
import SingleEventsection from '../ShareableComponent/SingleEventsection';

const HomePage = () => {
    const [event, setEvent] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:5000/allevent").then(res=> res.json())
        .then(data=> setEvent(data));
    },[]);

    return (
        <div className='w-11/12 mx-auto font-inter relative'>
            <Header/>
            <SearchSection/>

            <div className='grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 gap-5'>
                {
                   event && event.map(et => <SingleEventsection key={et._id} data={et}/>) 
                }
            </div>
            
        </div>
    );
};

export default HomePage;