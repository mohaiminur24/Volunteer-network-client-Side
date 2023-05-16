import React from 'react';
import logo from "../../assets/logos/logo.png"
import { NavLink } from 'react-router-dom';
import { SlPeople, SlPlus, SlHome } from "react-icons/sl";


const SideBar = () => {
    return (
        <div className='bg-white p-10'>
            <img className='w-full' src={logo} alt="" />
            <div className='my-10 font-inter font-semibold text-sm flex flex-col space-y-2'>
                <NavLink to="/">
                    <button className='flex focus:text-blue-500 items-center gap-2'>
                        <SlHome/>
                        Home
                    </button>
                </NavLink>
                <NavLink to="/event/volunteerlist" className={({isActive})=> isActive && "text-blue-500"}>
                    <button className='flex items-center gap-2'>
                        <SlPeople/>
                        Volunteer register list
                    </button>
                </NavLink>
                <NavLink to="/event/addevent" className={({isActive})=> isActive && "text-blue-500"}>
                    <button className='flex items-center gap-2'>
                        <SlPlus/>
                        Add event
                    </button>
                </NavLink>

            </div>
        </div>
    );
};

export default SideBar;