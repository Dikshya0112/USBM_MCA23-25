
import React, { useContext } from 'react';
import ThemeContext, {ThemeProvider} from './components/ThemeProvider'; 
import './App.css';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button 
            onClick={toggleTheme} 
            className="px-4 py-2 mt-4 text-lg font-medium text-white bg-blue-500 rounded hover:bg-blue-700"
        >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold mb-4">
                    Theme Toggle with Context API
                </h1>
                <ThemeToggleButton />
            </div>
        </ThemeProvider>
    );
};

export default App;

// App.css
