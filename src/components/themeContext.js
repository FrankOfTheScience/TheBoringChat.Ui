import React, { useState } from 'react';

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? 'dark-mode' : ''}> 
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
