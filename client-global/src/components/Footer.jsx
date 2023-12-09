import React from 'react'

const Footer = () => {
      return (
        <footer className="bg-gray-800 text-white p-4 flex justify-center items-center">
          <p className="text-sm">Copyright &copy; {new Date().getFullYear()} Your Company Name</p>
        </footer>
      );
    }

export default Footer;