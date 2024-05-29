import React from 'react';
import './styles/darkModeToggle.css';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  const handleToggle = () => {
    toggleDarkMode();
    const root = document.getElementById('root');
    if (darkMode) {
      root.classList.remove('dark-mode');
      removeOverlay();
    } else {
      root.classList.add('dark-mode');
      addOverlay();
    }
  };

  const addOverlay = () => {
    const overlay = document.createElement('div');
    overlay.classList.add('dark-mode-overlay');
    document.body.appendChild(overlay);
  };

  const removeOverlay = () => {
    const overlay = document.querySelector('.dark-mode-overlay');
    if (overlay) {
      overlay.remove();
    }
  };

  return (
    <div className="dark-mode-toggle">
      <input
        type="checkbox"
        className="dark-mode-checkbox"
        id="dark-mode-checkbox"
        checked={darkMode}
        onChange={handleToggle}
      />
      <label className="dark-mode-label" htmlFor="dark-mode-checkbox">
        <FaSun className="sun-icon" />
        <FaMoon className="moon-icon" />
        <div className="toggle-ball"></div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
