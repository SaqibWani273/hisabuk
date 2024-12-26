// components/Button.jsx
import React from 'react';

const Button = ({ text, onClick }) => (
    <button
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={onClick}
    >
        {text}
    </button>
);

export default Button;
