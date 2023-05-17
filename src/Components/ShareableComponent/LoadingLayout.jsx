import React from 'react';

const LoadingLayout = () => {
    return (
        <div className='w-full h-screen flex flex-col space-y-5 justify-center items-center'>
            <div className='w-40 h-40 border-8 border-yellow-800 border-dashed rounded-full animate-spin'>
            </div> 
            <h1 className='font-bold font-inter text-2xl text-yellow-600 animate-pulse'>Loading Data...</h1>
        </div>
    );
};

export default LoadingLayout;