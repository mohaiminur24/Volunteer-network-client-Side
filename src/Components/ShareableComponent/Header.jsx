import React from "react";
import logo from "../../assets/logos/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navmenu = <>
      <li><NavLink className={({isActive})=>isActive && "text-yellow-500 font-bold"}>Home</NavLink></li>
      <li><NavLink>Donation</NavLink></li>
      <li><NavLink>Events</NavLink></li>
      <li><NavLink>Blog</NavLink></li>
      <li><button className="bg-blue-500 hover:bg-primary-focus py-3 my-2 md:my-0 uppercase text-white rounded-md px-10">Register</button></li>
      <li><button className="bg-accent hover:bg-accent-focus py-3 uppercase text-white rounded-md px-10">Admin</button></li>
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
        <ul className="menu-horizontal px-1 flex items-center font-semibold gap-10">
          {navmenu}
        </ul>
      </div>
    </div>
  );
};

export default Header;
