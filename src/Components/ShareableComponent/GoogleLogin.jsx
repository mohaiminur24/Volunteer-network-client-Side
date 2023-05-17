import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Authcontext } from '../AuthContextLayout/AuthcationContext';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const {googleLogin} = useContext(Authcontext);
    const navigate = useNavigate();
    const location  = useLocation();
    const from = location?.state?.from?.pathname || "/";


    const LoginByGoogle = ()=>{
        googleLogin().then(res=> {
            Swal.fire({
                icon: 'success',
                title: 'User Login with Google successfully!',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from);
        })
        .catch(error=>{
            Swal.fire({
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 3000
              });
        })
    };
    return (
        <div>
            <div className='flex justify-center my-5'>
                <span>OR</span>
            </div>

            <div className='flex justify-center'>
                <button onClick={LoginByGoogle} className='w-2/5 px-5 py-3 rounded-full border flex justify-center items-center gap-5 focus:bg-gray-50'>
                    <FcGoogle className='text-3xl'/>
                    <span className='font-semibold'>Continue With Google</span>
                </button>
            </div>
            
        </div>
    );
};

export default GoogleLogin;