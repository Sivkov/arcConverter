import React, { useState } from 'react';
import SvgComponent from './svg';
import Util from './../utils/util';
import Edit from './../edit/edit';



const SvgWrapper = () => {
	const [matrix, setMatrix] = useState({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 });
	const [gmatrix, setGroupMatrix] = useState({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 });
	const svg = document.querySelector('svg')

	const handleMouseWheel = (event) => {
		var svg = document.getElementById("svg")
		var gTransform = svg.createSVGMatrix()
		var group = document.getElementById("group").transform.baseVal.consolidate().matrix
		let coords = Util.convertScreenCoordsToSvgCoords(event.clientX, event.clientY);
		let scale = 1.0 + (-event.deltaY * 0.001);

		gTransform = gTransform.translate(coords.x, coords.y);
		gTransform = gTransform.scale(scale, scale);
		gTransform = gTransform.translate(-coords.x, -coords.y);

		let comboMatrix = Util.multiplyMatrices(group, gTransform)
		setMatrix({
			a: comboMatrix.a,
			b: comboMatrix.b,
			c: comboMatrix.c,
			d: comboMatrix.d,
			e: comboMatrix.e,
			f: comboMatrix.f
		});
	};

	const startDrag =(e) =>{}
	const endDrag =(e) =>{}
	const drag =(e) =>{}


    const getMousePosition = (evt) => {
    	let CTM = svg.getScreenCTM();
        let coord
        return    coord = {
            x: (evt.clientX + CTM.f)/ CTM.a,
            y: (evt.clientY + CTM.e)/ CTM.d
        }; 
    }

	return (
		<main className="container-fluid h-100">
			<div className="w-100 h-100">
				<div id="wrapper_svg" className="container-fluid" 
				onWheel={handleMouseWheel} 
				onMouseDown={startDrag}
				onMouseMove={drag}
 				onMouseUp={endDrag}
				onMouseLeave={endDrag}>		 
					<SvgComponent matrix={matrix} />
				</div>
			</div>
		</main>

	);
};

export default SvgWrapper;