import React, { useEffect, useState } from 'react';
import EventHeader from '../ShareableComponent/EventHeader';
import { BsFillTrash3Fill,BsCreditCard2FrontFill } from "react-icons/bs";

const RegisterPage = () => {
    const [volunteerlist , setVolunteerlist] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/volunteerlist").then(res=>res.json())
        .then(data=>{
            setVolunteerlist(data);
        });
    },[])

    return (
        <>
        <EventHeader>Volunteer register list</EventHeader>
        <div className="w-full bg-white p-10 rounded-md flex justify-center border-[20px] min-h-[calc(100vh-100px)] border-gray-100">
            
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
                                    <button className='px-5 py-2 bg-green-500 font-bold text-white rounded-md'><BsCreditCard2FrontFill/></button>
                                    <button className='px-5 py-2 bg-red-500 font-bold text-white rounded-md'><BsFillTrash3Fill/></button>
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