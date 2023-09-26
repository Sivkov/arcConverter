import React, { useState } from 'react';

const Panels = () => {

	return (

			<div>Panels</div>
	);
};

export default Panels;





/*


		<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" id="svg" viewBox="0.00 0.00 102.00 101.00" style={{ overflow: 'visible' }} version="1.1">
			<defs>
				<svg className="grid">
					<pattern id="xsGrid" width="1" height="1" fill="#333333" patternUnits="userSpaceOnUse">
						<path d="M 0 0 1 0 1 1 0 1 0 0" fill="#333333" stroke="#FFFFFF" strokeWidth="0.05"></path>
					</pattern>
					<pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
						<rect width="100" height="100" fill="url(#xsGrid)"></rect>
						<path d="M 10 0 L 0 0 0 10" fill="none" stroke="#FFFFFF" strokeWidth="0.2"></path>
					</pattern>
					<pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
						<rect width="100" height="100" fill="url(#smallGrid)"></rect>
						<path d="M 100 0 L 0 0 0 100" fill="none" stroke="#FFFFFF" strokeWidth="0.7"></path>
					</pattern>
				</svg>
				<g id="part_1" className="part" >
					<g vectorEffect="non-scaling-stroke" fill="#b73217" className="outer" stroke="orange" strokeWidth="0.1"><path d="M71.4,6.4l3.7,3.9A9.9,9.9 0 0,1 77.7,17.7l-2.2,29.5l-2.6,2.5l0.4,0.4A37.5,37.5 0 1,1 28.4,2.5l0.4,0.4l2.7,-2.5L61.1,0.0A10.0,10.0 0 0,1 67.7,2.5l3.7,3.9z"></path></g>
					<g vectorEffect="non-scaling-stroke" fill="none" className="incut" stroke="#CEC97D" strokeWidth="0.1"><path d="M77.2,0.9"></path></g>
					<g fill="red" className="incut_start" stroke="none">
						<circle cx="77.23" cy="0.91" r="0.1" data-pos="0"></circle></g>
					<g vectorEffect="non-scaling-stroke" fill="none" className="outlet" stroke="#CEC97D" strokeWidth="0.1">
						<path data-pos="0" >
						</path></g>
				</g>
			</defs>
			<g id="group2" transform-origin="center center" transform="rotate(-90)">

				<use xlinkHref="#part_1" transform={`translate(${position.x} ${position.y})`} />
				<use xlinkHref="#part_1" transform={`translate(${100} ${100})`} />

				<circle cx="50" cy="50" r="5" fill="blue" />
				<button onClick={handleMove}>Move</button>
			</g>
		</svg>*/ 