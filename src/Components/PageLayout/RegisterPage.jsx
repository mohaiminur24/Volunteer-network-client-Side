import React, { useEffect, useState } from 'react';
import EventHeader from '../ShareableComponent/EventHeader';
import { BsFillTrash3Fill} from "react-icons/bs";
import Swal from 'sweetalert2';

const RegisterPage = () => {
    const [volunteerlist , setVolunteerlist] = useState([]);
    useEffect(()=>{
        fetch("https://volunteer-server-side.vercel.app/volunteerlist").then(res=>res.json())
        .then(data=>{
            setVolunteerlist(data);
        });
    },[]);

    const deletevolunteer = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://volunteer-server-side.vercel.app/deleVolunteer?id=${id}`,{
                    method: "DELETE",
                }).then(res=>res.json()).then(data=>{
                    if(data.deletedCount){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          );
                        const filterData = volunteerlist.filter(volunteer=> volunteer._id !== id);
                        setVolunteerlist(filterData);
                    };
                });
            }
          })
        
    };

    return (
        <>
        <EventHeader>Volunteer register list</EventHeader>
        <div className="w-full bg-white p-10 rounded-md flex justify-center border-[20px] min-h-[calc(100vh-100px)] border-gray-100 overflow-x-auto">
            
            {/* table start here */}
            
            <div className="w-full h-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr> 
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Registration Date</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            volunteerlist && volunteerlist.map(volunteer =>{
                            return <>
                                <tr>
                                <td>{volunteer.name}</td>
                                <td>{volunteer.email}</td>
                                <td>{volunteer.RegistrationDate}</td>
                                <td>{volunteer.description}</td>
                                <td className='flex gap-5'>

                                    <button onClick={()=>deletevolunteer(volunteer._id)} className='px-5 py-2 bg-red-500 font-bold text-white rounded-md'><BsFillTrash3Fill/></button>
                                    
                                </td>
                            </tr>
                            </>
                            })
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;