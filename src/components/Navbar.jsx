// components/Navbar.jsx
import React from 'react';
import img from '../assets/images/hisabuk_logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const navbarItems =
    ['Home', 'Templates', 'Progress Tracking', 'Profile', 'About us']
const Navbar = () => {


    return <nav >
        <div className="container mx-auto flex justify-between items-center py-4 px-6 ">
            <div className='flex'>
                <img src={img} alt="" height={"5px"} width={"50px"} />
                <p className="text-xl mt-4 items-center font-bold text-green-600 ">Hisabuk</p>
            </div>
            <ul className="flex space-x-6">
                {navbarItems.map((item) => (
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
}


const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className='flex items-center'>
                    <img src={img} alt="Hisabuk Logo" className="h-10 w-10" />
                    <p className="text-xl ml-2 font-bold text-green-600">Hisabuk</p>
                </div>
                <div className="hidden md:flex space-x-6">
                    {navbarItems.map((item) => (
                        <li key={item} className="list-none text-gray-800 hover:text-blue-600">
                            <a href="">{item}</a>
                        </li>
                    ))}
                </div>
                <div className="hidden md:flex">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Login</button>
                    <button className="ml-4 px-4 py-2 border rounded-md text-blue-600">Register</button>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        {navbarItems.map((item) => (
                            <li key={item} className="text-gray-800 hover:text-blue-600">
                                <a href="">{item}</a>
                            </li>
                        ))}
                        <div className="flex flex-col space-y-4">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Login</button>
                            <button className="px-4 py-2 border rounded-md text-blue-600">Register</button>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
};

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (


        <nav class="">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={img} class="h-8" alt="Hisabuk Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap  font-bold text-green-600">Hisabuk</span>
                </Link>

                <div className="hidden lg:flex space-x-6">
                    {navbarItems.map((item) => (
                        <li key={item} className="list-none text-gray-800 hover:text-blue-600">
                            <a href="">{item}</a>
                        </li>
                    ))}
                </div>
                <div className="hidden sm:flex">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md" onClick={() => navigate('/login')}>Login</button>
                    <button className="ml-4 px-4 py-2 border rounded-md text-blue-600">Register</button>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none   dark:hover:bg-gray-700 " >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
                {
                    isOpen && (
                        <div class="lg:hidden w-full lg:block lg:w-auto dark:bg-gray-900" id="navbar-default">
                            <ul class="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg  lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 dark:border-gray-700">
                                <li>
                                    <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">About</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Services</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Contact</a>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </nav>

    );
};

// export default Navbar;
export default Navbar2;