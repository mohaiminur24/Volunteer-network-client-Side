import React, { useContext, useEffect, useState } from 'react';
import Header from '../ShareableComponent/Header';
import { Authcontext } from '../AuthContextLayout/AuthcationContext';
import UserEvent from '../ShareableComponent/UserEvent';

const UserProfile = () => {
    const {user} = useContext(Authcontext);
    const [userevent, setUserEvent] = useState(null);

    useEffect(()=>{
        if(user?.email){
            fetch(`https://volunteer-server-side.vercel.app/userevent?email=${user.email}`).then(res=> res.json())
        .then(data => {
            setUserEvent(data);
        });
        }
    },[user]); 

    return (
        <div className='w-11/12 mx-auto'>
            <Header/>
            <div className='mt-10'>
                <h1 className='font-inter font-bold text-accent border-b pb-2'>Email Address: <span className='text-sm font-normal ml-2 text-black'>{user?.email}</span></h1>

                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                   userevent && userevent.map(et=><UserEvent key={et._id} data={et}/>) 
                }
            </div>
                

            </div>
        </div>
    );
};

export default UserProfile;