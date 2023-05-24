import React, { useContext, useState } from 'react';
import logo from '../../assets/logos/logo.png'
import GoogleLogin from '../ShareableComponent/GoogleLogin';
import { NavLink, useNavigate } from 'react-router-dom';
import { Authcontext } from '../AuthContextLayout/AuthcationContext';
import { BiError } from "react-icons/bi";
import Swal from 'sweetalert2';
import moment from 'moment/moment';
import { updateProfile } from 'firebase/auth';


const Registration = () => {
    const {handleCreteUser} = useContext(Authcontext);
    const [errorMessage, setErrorMessage] = useState(null);
    const nevigate = useNavigate();

    const createUser = (event)=>{
        event.preventDefault();
        setErrorMessage(null);
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const BirthDate = form.date.value;
        const description = form.description.value;
        const password = form.password.value;
        const RegistrationDate = moment(new Date()).format("MMM Do YY");
        const registerObject = {name,email,description,RegistrationDate,BirthDate};

        if(!name || !email || !BirthDate || !description || !password){
            setErrorMessage("Please Fill up all input field!");
            return;
        };
        if(password.length<6){
            setErrorMessage("Your password sould more then 6 characters")
            return;
        };

        handleCreteUser(email,password)
        .then(res=>{
            updateProfile(res.user,{
                displayName: name
            });
            
            // new volunteer function is here
            try {
                fetch("https://volunteer-server-side.vercel.app/newvolunteer",{
                method: "POST",
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(registerObject)
                }).then(res=> res.json()).then(data=>{
                    Swal.fire({
                        icon: 'success',
                        title: 'User Create successfully!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      form.reset();
                      nevigate("/");
                })
            } catch (error) {
                setErrorMessage("Something wrong Try again!")
            };

        }).catch(error=>{
            setErrorMessage(error.message);
        })

    };

    return (
        <div className='w-11/12 mx-auto'>
            <div className='w-full'><img className='w-52 mx-auto my-5' src={logo} alt="" /></div>
            <div className='md:w-3/5 mx-auto border rounded-md md:p-20 p-5 my-10'>
                <form onSubmit={createUser}>
                    <h1 className='md:text-3xl text-lg font-bold mb-5'>Registration Account</h1>
                    <div>
                        <label className='font-semibold text-gray-500' htmlFor="email">Name</label>
                        <input className='w-full text-gray-500 border px-3 py-2 rounded-sm outline-none my-1' type="name" name="name" id="name" />
                    </div>
                    <div>
                        <label className='font-semibold text-gray-500' htmlFor="email">Email Address</label>
                        <input className='w-full text-gray-500 border px-3 py-2 rounded-sm outline-none my-1' type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label className='font-semibold text-gray-500' htmlFor="email">Birth Date</label>
                        <input className='w-full text-gray-500 border px-3 py-2 rounded-sm outline-none my-1' type="date" name="date" id="date" />
                    </div>
                    <div>
                        <label className='font-semibold text-gray-500' htmlFor="email">Description</label>
                        <input className='w-full text-gray-500 border px-3 py-2 rounded-sm outline-none my-1' type="text" name="description" id="description" />
                    </div>
                    <div className='mb-2'>
                        <label className='font-semibold text-gray-500' htmlFor="email">Password</label>
                        <input className='w-full text-gray-500 border px-3 py-2 rounded-sm outline-none my-1' type="password" name="password" id="password" />
                    </div>
                    {
                        errorMessage && <span className='mt-5 text-sm text-red-500 flex items-center gap-3'>
                        <BiError/>
                        <span>{errorMessage}</span>
                        </span>
                    }
                    <input className='w-full py-2 bg-accent mt-5 rounded-sm font-bold text-white hover:bg-accent-focus' type="submit" value="Registration" />
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