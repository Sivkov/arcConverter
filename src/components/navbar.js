import React from 'react';
import ThemeSwitcher from './themeSwitcher';

const Navbar = () => {

	const load = {}
	const parser ={}
	const panels = {}
	
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'var(--bgMain1)', borderBottom: '1px solid var(--paleColor)' }}>
			<ThemeSwitcher />
    </nav>
  );
};

export default Navbar;



