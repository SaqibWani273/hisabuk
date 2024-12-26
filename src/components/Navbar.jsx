// components/Navbar.jsx
import React from 'react';
import img from '../assets/images/hisabuk_logo.png'

const Navbar = () => (
    <nav className={``}>
        <div className="container mx-auto flex justify-between items-center py-4 px-6 ">
            <div className='flex'>
                <img src={img} alt="" height={"5px"} width={"50px"} />
                <p className="text-xl mt-4 items-center font-bold text-green-600 ">Hisabuk</p>
            </div>
            <ul className="flex space-x-6">
                {['Home', 'Templates', 'Progress Tracking', 'Profile', 'About us'].map((item) => (
                    <li key={item} className="text-gray-800 hover:text-blue-600">
                        <a href="">{item}</a>
                    </li>
                ))}
            </ul>
            <div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Login</button>
                <button className="ml-4 px-4 py-2 border rounded-md text-blue-600">Register</button>
            </div>
        </div>
    </nav>
);

export default Navbar;
