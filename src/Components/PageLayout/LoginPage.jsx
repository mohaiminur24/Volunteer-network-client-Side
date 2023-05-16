import React, { useContext, useState } from 'react';
import logo from "../../assets/logos/logo.png"
import GoogleLogin from '../ShareableComponent/GoogleLogin';
import { NavLink, useNavigate } from 'react-router-dom';
import { Authcontext } from '../AuthContextLayout/AuthcationContext';
import Swal from 'sweetalert2';
import { BiError } from 'react-icons/bi';

const LoginPage = () => {
    const {handleLoginUser} = useContext(Authcontext);
    const nevigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);



    const loginuser =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;

        handleLoginUser(email,pass).then(res=>{
            Swal.fire({
                icon: 'success',
                title: 'User Login successfully!',
                showConfirmButton: false,
                timer: 1500
              })
              form.reset();
              nevigate("/");
        }).catch(error=>{
            setErrorMessage(error.message);
        })
    };

    return (
        <div className='w-11/12 mx-auto'>
            <div className='w-full'><img className='w-52 mx-auto my-5' src={logo} alt="" /></div>
            <div className='w-3/5 mx-auto border rounded-md p-20 my-10'>
                <form onSubmit={loginuser}>
                    <h1 className='text-3xl font-bold mb-5'>Login Account</h1>
                    <div>
                        <label className='font-semibold text-gray-500' htmlFor="email">Email Address</label>
                        <input className='w-full text-gray-500 border px-3 py-2 rounded-sm outline-none my-1' type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label className='font-semibold text-gray-500' htmlFor="email">Password</label>
                        <input className='w-full text-gray-500 border px-3 py-2 rounded-sm outline-none my-1' type="password" name="password" id="password" />
                    </div>
                    {
                        errorMessage && <span className='mt-5 text-sm text-red-500 flex items-center gap-3'>
                        <BiError/>
                        <span>{errorMessage}</span>
                        </span>
                    }
                    <input className='w-full py-2 bg-accent mt-5 rounded-sm font-bold text-white hover:bg-accent-focus' type="submit" value="Login" />
                </form>
                <GoogleLogin/>
                <div className='w-full text-center my-5'>
                    <span>Dont have an account? <NavLink to="/registration"><button className='text-primary font-semibold'>Create account</button></NavLink></span>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;