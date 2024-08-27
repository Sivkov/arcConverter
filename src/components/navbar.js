import React from 'react';
import ThemeSwitcher from './themeSwitcher';

const Navbar = () => {

	const load = {}
	const parser ={}
	const panels = {}
	
  return (
    <nav className="navbar" id="navBar">
			<ThemeSwitcher />
    </nav>
  );
};

export default Navbar;



