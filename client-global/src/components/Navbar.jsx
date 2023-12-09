import React from 'react';
import logo from '../assets/logo.png'; // Replace with your logo image
import profilePic from '../assets/profile_pic.jpg'; // Replace with your profile picture

const Navbar = () => {
  return (
    <nav className="navbar bg-emerald-900 text-white flex items-center justify-between p-4 border-r-2">
      <div className="logo flex items-center">
        <img src={logo} alt="Logo" className="w-10 mr-3" />
        <span className="font-bold text-xl pl-5">Your Company Name</span>
      </div>
      <div className="profile flex items-center">
        <img src={profilePic} alt="Profile Picture" className="w-8 h-8 rounded-full pr-12 mr-3" />
        <span className="font-bold text-lg">Tushar</span> {/* Replace with user's name */}
      </div>
    </nav>
  );
};

export default Navbar;



