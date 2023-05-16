import React, { useContext } from "react";
import logo from "../../assets/logos/logo.png";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../AuthContextLayout/AuthcationContext";
import Swal from "sweetalert2";

const Header = () => {
  const {user,loggedout} = useContext(Authcontext);

  const loginout =()=>{
      loggedout().then(res=>{
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'User Logout successfully!',
          showConfirmButton: false,
          timer: 1500
        })
      }).catch(error=>{
        Swal.fire({
          icon: 'error',
          title: 'Something wrong!',
          showConfirmButton: false,
          timer: 1500
        })
      })
  }


  const navmenu = <>
      <li>
        <NavLink to="/" className={({isActive})=>isActive && "text-yellow-500 font-bold"}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/event/addevent" className={({isActive})=>isActive && "text-yellow-500 font-bold"}>Donation</NavLink>
      </li>
      <li>
        <NavLink to="/event" className={({isActive})=>isActive && "text-yellow-500 font-bold"}>Events</NavLink>
      </li>
      <li>
        <NavLink to="/blog" className={({isActive})=>isActive && "text-yellow-500 font-bold"}>Blog</NavLink>
      </li>
      {
        !user ? <li><NavLink to="/registration"><button className="bg-blue-500 hover:bg-primary-focus py-3 my-1 md:my-0 uppercase text-white rounded-md px-5">Register</button></NavLink></li>:<button onClick={loginout} className="bg-red-500 hover:bg-red-600 py-3 uppercase text-white rounded-md px-5">LogOut</button>
      }
      <li><button className="bg-accent hover:bg-accent-focus py-3 uppercase text-white rounded-md px-5">Admin Request</button></li>
  </>;





  return (
    <div className="navbar bg-base-100 bg-transparent h-32">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu-compact font-semibold text-center dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navmenu}
          </ul>
        </div>
        <img className="w-52 ml-10" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 flex items-center font-semibold gap-5">
          {navmenu}
        </ul>
      </div>
    </div>
  );
};

export default Header;
