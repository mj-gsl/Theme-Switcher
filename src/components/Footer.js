import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { theme } = useTheme();
    return (
        <footer className={`p-4 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} sticky bottom-0 text-center`}>
            <p>Footer Content © 2024</p>
        </footer>
    );
};

export default Footer;
