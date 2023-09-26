import React, { useRef, useState } from 'react';
import SvgComponent from './svg';
import Util from './../utils/util';


const SvgWrapper = () => {
	const wrapperRef = useRef(null);
	const [matrix, setMatrix] = useState({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 });
	const handleMouseWheel = (event) => {
		var svg = document.getElementById("svg")
		var gTransform = svg.createSVGMatrix()
		var group = document.getElementById("group").transform.baseVal.consolidate().matrix

		let coords = Util.convertScreenCoordsToSvgCoords(event.clientX, event.clientY);
		//let scale = group.a - (event.deltaY * 0.001); 
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

	return (
		<main className="container-fluid h-100">
			<div className="w-100 h-100">
				<div id="wrapper_svg" className="container-fluid" ref={wrapperRef} onWheel={handleMouseWheel}>
					<SvgComponent matrix={matrix} />
				</div>
			</div>
		</main>

	);
};

export default SvgWrapper;