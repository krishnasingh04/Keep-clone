import React from 'react';

const Header = ({ toggleTheme, theme }) => {
    return (
        <header className={`d-flex justify-content-between align-items-center p-3 ${theme}`}>
            <h1>Google Keep Clone</h1>
            <button className={`btn btn-secondary ${theme}`} onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </header>
    );
};

export default Header;

