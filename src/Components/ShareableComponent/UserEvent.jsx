import React, { useState } from 'react';
import Swal from 'sweetalert2';

const UserEvent = ({data}) => {
    const [cancel, setCancel] = useState(false);
    const {photourl,title,date,description,_id} = data;

    const deleteEvent = ()=>{
        Swal.fire({
            title: 'Do you want to Delete this Event?',
            showDenyButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://volunteer-server-side.vercel.app/delevent?id=${_id}`,{
                    method:"DELETE",
                }).then(res=>res.json).then(data=>{
                    setCancel(true);
                    Swal.fire('Delete!', '', 'successfully!');
                })
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }

    return (
        <div className='p-5 border rounded-md flex flex-col shadow-md font-inter my-10'>
        <img className='w-full h-72 rounded-sm' src={photourl} alt="" />
        <h1 className='text-lg font-bold my-2'>{title}</h1>
        <h5 className='text-sm'><span className='font-semibold'>Date:</span> {date}</h5> 
        <p className='text-sm mb-2 text-gray-500'>{description}</p>
        <button onClick={deleteEvent} className='px-5 py-2 ml-auto mt-auto text-sm font-bold bg-red-400 rounded-md shadow-md text-white disabled:bg-gray-300' disabled={cancel && true}>Delete</button>
        </div>
    )
};

export default UserEvent;