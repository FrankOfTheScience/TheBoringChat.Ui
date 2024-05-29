import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <React.StrictMode>
      <div id="root" className={darkMode ? 'dark-mode' : ''}>
        <App darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

reportWebVitals();
