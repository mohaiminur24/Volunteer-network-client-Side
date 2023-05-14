import React from 'react';

const SearchSection = () => {
    return (
        <div className='w-full flex justify-center flex-col items-center my-20'>
            <h1 className='text-4xl font-bold mb-5 uppercase'>I grow by helping people in need.</h1>
            <form className='w-2/5 flex'>
                <input className='shadow-md px-5 py-2 rounded-s-md outline-none w-full mx-auto' placeholder='Search .....' type="text" name="search" id="search" />
                <input className='bg-primary rounded-e-md px-5 text-white font-bold hover:bg-primary-focus' type="submit" value="Search" />
            </form>
        </div>
    );
};

export default SearchSection;