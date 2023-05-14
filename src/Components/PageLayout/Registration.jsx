import React from 'react';
import logo from '../../assets/logos/logo.png'
import GoogleLogin from '../ShareableComponent/GoogleLogin';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='w-full'><img className='w-52 mx-auto my-5' src={logo} alt="" /></div>
            <div className='w-3/5 mx-auto border rounded-md p-20 my-10'>
                <form>
                    <h1 className='text-3xl font-bold mb-5'>Registration Account</h1>
                    <div>
                        <label className='font-semibold text-gray-500' htmlFor="email">Name</label>
                        <input className='w-full text-gray-500 border px-3 py-2 rounded-sm outline-none my-1' type="name" name="name" id="name" />
                    </div>
                    <div>
                        <label className='font-semibold text-gray-500' htmlFor="email">Email Address</label>
                        <input className='w-full text-gray-500 border px-3 py-2 rounded-sm outline-none my-1' type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label className='font-semibold text-gray-500' htmlFor="email">Date</label>
                        <input className='w-full text-gray-500 border px-3 py-2 rounded-sm outline-none my-1' type="date" name="date" id="date" />
                    </div>
                    <div>
                        <label className='font-semibold text-gray-500' htmlFor="email">Description</label>
                        <input className='w-full text-gray-500 border px-3 py-2 rounded-sm outline-none my-1' type="text" name="description" id="description" />
                    </div>
                    <div>
                        <label className='font-semibold text-gray-500' htmlFor="email">Password</label>
                        <input className='w-full text-gray-500 border px-3 py-2 rounded-sm outline-none my-1' type="password" name="password" id="password" />
                    </div>
                    <input className='w-full py-2 bg-accent mt-5 rounded-sm font-bold text-white hover:bg-accent-focus' type="submit" value="Login" />
                </form>
                <GoogleLogin/>
                <div className='w-full text-center my-5'>
                    <span>Already i have an account? <NavLink to="/login"><button className='text-primary font-semibold'>Login account</button></NavLink></span>
                </div>
            </div>
        </div>
    );
};

export default Registration;