import React from "react";

    const Navbar = () => {
      return (
        <nav className="flex items-center justify-between bg-black p-4">

          <h1 className="text-purple-600 text-3xl font-bold">PlotaLoom</h1>
    
          <ul className="flex justify-center">
            <li>
              <a href="/" className="text-purple-600 text-lg mr-2 font-medium hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/market" className="text-purple-600 text-lg mr-2 font-medium hover:underline">
                Market
              </a>
            </li>
            <li>
              <a href="/create" className="text-purple-600 text-lg mr-2 font-medium hover:underline">
                Create
              </a>
            </li>
            <li>
              <a href="/contact" className="text-purple-600 text-lg font-medium hover:underline">
                Contact
              </a>
            </li>
          </ul>
    
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md p-2">
            Connect Wallet
          </button>
        </nav>
      
      )
    }
    

export default Navbar;

