import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Main = () => {
    const { theme } = useTheme();
    return (
        <main className={`p-4 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} min-h-screen`}>
            <p>Willkommen bei Mein Online Shop!</p>
        </main>
    );
};

export default Main;
