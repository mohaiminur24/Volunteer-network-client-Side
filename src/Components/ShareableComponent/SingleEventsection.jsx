import React from 'react';

const SingleEventsection = ({data}) => {
    const {date,description,photourl,title,_id} = data;
    return (
        <div className='p-5 border rounded-md shadow-md space-y-1 font-inter mb-10'>
            <img className='w-full h-72 rounded-sm' src={photourl} alt="" />
            <h1 className='text-lg font-bold'>{title}</h1>
            <h5 className='text-sm'><span className='font-semibold'>Date:</span> {date}</h5> 
            <p className='text-sm text-gray-500'>{description}</p>
        </div>
    );
};

export default SingleEventsection;