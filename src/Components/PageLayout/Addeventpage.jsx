import React from 'react';
import EventHeader from '../ShareableComponent/EventHeader';

const Addeventpage = () => {
    return (
        <>
        <EventHeader>Add event</EventHeader>
        <div className="w-full bg-white p-10 rounded-md border-[20px] min-h-[calc(100vh-100px)] border-gray-100">
            
            <form>
                <div className='font-inter grid grid-cols-2 gap-5'>
                    <div>
                        <label className='font-semibold' htmlFor="title">Event Title</label>
                        <input className='border block my-1 px-3 py-2 text-sm outline-none text-gray-500 rounded-md w-full' type="text" name="title" id="title" placeholder='Enter title' />
                    </div>
                    <div>
                        <label className='font-semibold' htmlFor="title">Event Date</label>
                        <input className='border block my-1 px-3 py-2 text-sm outline-none text-gray-500 rounded-md w-full' type="date" name="date" id="date" placeholder='Enter date' />
                    </div>
                    <div>
                        <label className='font-semibold' htmlFor="title">Description</label>
                        <textarea className='border block my-1 px-3 py-2 text-sm outline-none text-gray-500 rounded-md w-full max-h-60 min-h-16' type="text" name="description" id="description" placeholder='Enter Description' rows="5" />
                    </div>
                    <div>
                        <label className='font-semibold' htmlFor="banner">Banner</label>
                        <input className='border block my-1 px-3 py-2 text-sm outline-none text-gray-500 rounded-md w-full' type="text" name="date" id="date" placeholder='Enter Banner URL' />
                    </div>
                </div>
                <div className='w-full mt-10 text-end'>
                    <input className='text-lg font-bold text-white bg-primary px-5 py-2 rounded-md shadow-md hover:bg-primary-focus' type="submit" value="submit"/>
                </div>
            </form>


        </div>
        </>
    );
};

export default Addeventpage;