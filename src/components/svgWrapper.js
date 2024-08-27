import React, { useState } from 'react';
import SvgComponent from './svg';
import RightPanel from './rigthPanel.js';
import Util from './../utils/util';
import Edit from './../edit/edit';
import Panel from './../edit/edit';



const SvgWrapper = () => {
	const [matrix, setMatrix] = useState({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 });
	const [gmatrix, setGroupMatrix] = useState({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 });
	const [offset, setOffset] = useState({ x: 0, y: 0 });
	const svg = document.querySelector('svg')

	const [radiusX, setRadiusX] = useState(30);
	const [radiusY, setRadiusY] = useState(20);

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

	const startDrag = (e) =>{
		if (e.target && e.buttons === 4) {            
			let off = getMousePosition(e);
			let transforms = document.getElementById("group1").transform.baseVal.consolidate().matrix
            off.x -= transforms.e;
            off.y -= transforms.f;
			setOffset({x:off.x,y:off.y})			 
        }
	}

	const endDrag =(e) =>{}

	const drag =(e) =>{
		console.log (e.buttons)
		if (e.target && e.buttons === 4){
			var coord = getMousePosition(e);
 			gmatrix.e = (coord.x - offset.x)
			gmatrix.f = (coord.y - offset.y)
 
			setGroupMatrix({
				a: gmatrix.a,
				b: gmatrix.b,
				c: gmatrix.c,
				d: gmatrix.d,
				e: gmatrix.e,
				f: gmatrix.f,
			})
		}
	}

    const getMousePosition = (evt) => {
		var svg = document.getElementById("svg")
    	let CTM = svg.getScreenCTM();
        
        return   {
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
					<SvgComponent matrix={matrix} gmatrix={gmatrix} radiusX={radiusX} radiusY={radiusY} />
					<RightPanel setRadiusX={setRadiusX} setRadiusY={setRadiusY} radiusX={radiusX} radiusY={radiusY}/>
				</div>
			</div>
		</main>

	);
};

export default SvgWrapper;