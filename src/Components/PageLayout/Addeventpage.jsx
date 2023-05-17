import React, { useContext } from 'react';
import EventHeader from '../ShareableComponent/EventHeader';
import Swal from 'sweetalert2';
import { Authcontext } from '../AuthContextLayout/AuthcationContext';


const Addeventpage = () => {
    const {user} = useContext(Authcontext);

    const handleaddevent = (event) =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const date = form.date.value;
        const description = form.description.value;
        const photourl = form.photourl.value;
        const userEmail = user.email;
        const object = {title,date,description,photourl,userEmail};
        

        fetch("http://localhost:5000/addevent",{
                method:"POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(object)

            }).then(res => res.json()).then(data=>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      form.reset();
                }
            })
    };



    return (
        <>
        <EventHeader>Add event</EventHeader>
        <div className="w-full bg-white p-10 rounded-md border-[20px] min-h-[calc(100vh-100px)] border-gray-100">
            
            <form onSubmit={handleaddevent}>
                <div className='font-inter grid lg:grid-cols-2 grid-cols-1 gap-5'>
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
                        <input className='border block my-1 px-3 py-2 text-sm outline-none text-gray-500 rounded-md w-full' type="text" name="photourl" id="photourl" placeholder='Enter Banner URL' />
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