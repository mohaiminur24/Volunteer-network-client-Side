import React from 'react';

const EventHeader = ({children}) => {
    return (
        <div className='w-full h-20 flex justify-start items-center bg-white'>
            <h1 className='ml-10 font-inter font-bold text-lg'>{children}</h1>
        </div>
    );
};

export default EventHeader;