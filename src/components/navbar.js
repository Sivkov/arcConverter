import React from 'react';
import ThemeSwitcher from './themeSwitcher';

const Navbar = () => {

	const load = {}
	const parser ={}
	const panels = {}
	
  return (
    <nav className="navbar" id="navBar">
      <div className="mx-4 d-flex flex-column">
        <div className='navbar__regular_note'>Elliptical to circular arc converter</div>
        <div className='navbar__small_note'>with counting deviation and showing deviation point</div>

      </div>
			<ThemeSwitcher />
    </nav>
  );
};

export default Navbar;



