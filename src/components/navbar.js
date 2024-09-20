import React from 'react';

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
      <a href="https://github.com/Sivkov/arcConverter" className="github-button" target="_blank">
			<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Icon" className="github-icon" width="20" height="20"/>
					<div id='github'>Code on GitHub</div>
			</a>
    </nav>
  );
};

export default Navbar;



