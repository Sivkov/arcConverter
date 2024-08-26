import React, { useEffect, useState } from 'react';

function RightPanel() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the current theme in localStorage
    const theme = localStorage.getItem('theme');
	setTheme( theme );
    if (theme === 'theme_dark') {
      setIsDarkMode(true);
    } else {
		setIsDarkMode(false);
	}
  }, []); // Empty dependency array to run this code once

  const toggleTheme = () => {
    if (isDarkMode) {
      setTheme('theme_light');
    } else {
      setTheme('theme_dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const setTheme = (themeName = 'theme_dark') => {
	if (!themeName) themeName = 'theme_dark';
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  };

  return (
    <div className="form-check form-switch themeSwitcher" style={{ marginRight: '60px' }}>
      <label className="form-check-label" style={{ marginRight: '55px' }}>Свет</label>
      <input
        className="form-check-input"
        type="checkbox"
        id="themeSwitcher"
        onChange={toggleTheme}
        style={{ marginLeft: '38px' }}
        checked={isDarkMode}
      />
      <label className="form-check-label">Тьма</label>
    </div>
  );
}

export default RightPanel;
