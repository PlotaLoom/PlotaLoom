import {Link} from "react-router-dom";
import { useState } from "react";
const Navbar = ({ isLoggedIn, handleLogin }) => {

  return (
    <nav className="flex items-center justify-between bg-black p-4">
      <h1 className="text-white text-3xl pl-2 font-bold">PlotaLoom</h1>

      <ul className="flex justify-center">
        {/* ... Your other navigation links ... */}
      </ul> 


      <button
        onClick={handleLogin}
        className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md p-2"
      >
  
        
        {isLoggedIn ? "Logout" : "Login"}
     
      
    
        {}
      </button>
    </nav>
  );
};

export default Navbar;
