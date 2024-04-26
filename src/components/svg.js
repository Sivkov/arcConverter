import React, { useState, useRef } from 'react';
import { ReactSVG } from 'react-svg'


const SvgComponent = ({matrix, gmatrix}) => {
	const wrapperRef = useRef(null);
	const matrixM = matrix.a + ' '+ matrix.b + ' '+matrix.c + ' '+matrix.d + ' '+matrix.e + ' '+matrix.f 
	const matrixG = gmatrix.a + ' '+ gmatrix.b + ' '+gmatrix.c + ' '+gmatrix.d + ' '+gmatrix.e + ' '+gmatrix.f 
	return (

 		<svg
			id="svg"
			baseProfile="full"
			viewBox="0.00 0.00 100 100"
			style={{ overflow: 'visible' }}
 			version="1.1"
			>
			<defs>
			<svg className="grid">
				<pattern id="xsGrid" width="1" height="1" fill="var(--gridColorFill)" patternUnits="userSpaceOnUse">
				<path d="M 0 0 1 0 1 1 0 1 0 0" fill="var(--gridColorFill)" stroke="white" strokeWidth="0.05"></path>
				</pattern>
				<pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
				<rect width="100" height="100" fill="url(#xsGrid)"></rect>
				<path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.2"></path>
				</pattern>
				<pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
				<rect width="100" height="100" fill="url(#smallGrid)"></rect>
				<path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.7"></path>
				</pattern>
			</svg>
			</defs>
			<g id="group2">
				<g id="group1" transform={`matrix(${matrixG})`} >
					<g id="group" transform={`matrix(${matrixM})`} className="grab">
					<g id="contours">
						<rect id="dimensionalGrid" height="100" width="100" x="0" y="0" fill="url(#grid)"  stroke="white" strokeWidth="0.5"></rect>
					</g>
					</g>
				</g>
			</g>
		</svg>
   );
};
 


export default SvgComponent;
