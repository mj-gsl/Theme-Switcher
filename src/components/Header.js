import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className={`p-4 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} flex justify-between items-center`}>
            <h1 className="text-lg font-bold">Mein Online Shop</h1>
            <button onClick={toggleTheme} className="p-2 rounded-full">
                {theme === 'light' ? <Moon /> : <Sun />}
            </button>
        </header>
    );
};

export default Header;
