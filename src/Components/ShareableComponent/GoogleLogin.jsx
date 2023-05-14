import React from 'react';
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
    return (
        <div>
            <div className='flex justify-center my-5'>
                <span>OR</span>
            </div>

            <div className='flex justify-center'>
                <button className='w-2/5 px-5 py-3 rounded-full border flex justify-center items-center gap-5 focus:bg-gray-50'>
                    <FcGoogle className='text-3xl'/>
                    <span className='font-semibold'>Continue With Google</span>
                </button>
            </div>
            
        </div>
    );
};

export default GoogleLogin;