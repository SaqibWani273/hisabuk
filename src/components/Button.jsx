// components/Button.jsx
import React from 'react';

const Button = ({ text, onClick }) => (
    <button
        className="px-2 py-1 md:px-6 md:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 "
        onClick={onClick}
    >
        <p className='text-sm md:text-xl font-semibold'>{text} </p>
    </button>
);

export default Button;
