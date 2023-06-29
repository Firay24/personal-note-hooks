import React from 'react'
import { BiMoon, BiSun } from "react-icons/bi";
import { ThemeConsumer } from '../contexts/ThemeContext';

function ToggleThemeButton() {
  return (
    <ThemeConsumer>
        {({ theme, toggleTheme }) => {
            return <button className='toggle-button' onClick={toggleTheme}>{theme === 'light' ? <BiMoon /> : <BiSun />}</button>
        }}
    </ThemeConsumer>
  )
}

export default ToggleThemeButton
