import React, { useContext } from 'react';
import './BtnToggle.css';
import { ThemeContext } from '../../Context/ThemeContext';

export default function BtnToggle() {

    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
            <button className={theme ? 'btn-toggle toggle-white' : 'btn-toggle toggle-dark'} onClick={toggleTheme} >
                {theme ? 'LightMode' : 'DarkMode'}
            </button>
    );
};