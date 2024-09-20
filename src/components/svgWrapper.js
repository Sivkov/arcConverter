import React, { useState, useEffect } from 'react';
import SvgComponent from './svg';
import RightPanel from './rigthPanel.js';
import Util from './../utils/util';
import Arc from './../utils/arc.js';
import Intro from './intro.js';


const SvgWrapper = () => {
	const [matrix, setMatrix] = useState({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 });
	const [gmatrix, setGroupMatrix] = useState({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 });
	const [offset, setOffset] = useState({});

	const [deviation, setDeviation] = useState({deviation:0,maxDeviationPoint:{x:0,y:0}});
	const [radiusX, setRadiusX] = useState(30);
	const [radiusY, setRadiusY] = useState(20);
	const [segments, setSegments] = useState(14);
	const [ell, setEllipse] = useState('M0 0');
    const [arcs, setArcs] = useState('M0 0');

    const ellepsisPath = (r1, r2) => {
        const widthSVG = 100;
        const heightSVG = 60;

        if (r1 && r2) {
            return `M${widthSVG * 0.5 - r1} ${heightSVG * 0.5} A${r1} ${r2} 0 0 0 ${widthSVG * 0.5 + r1} ${heightSVG * 0.5} A ${r1} ${r2} 0 0 0 ${widthSVG * 0.5 - r1} ${heightSVG * 0.5}`;
        } else {
            const pathElement = document.querySelector('#ellepsis');
            return pathElement ? pathElement.getAttribute('d') : 'M0 0';
        }
    };

    useEffect(() => {
        const calculatedEllipse = ellepsisPath(radiusX, radiusY);
        setEllipse(calculatedEllipse);
        const calculatedArcs = Arc.converting(calculatedEllipse, segments); 
        setArcs(calculatedArcs);
		const calculatedDeviation = Arc.findMaxDeviationPoint(calculatedEllipse, calculatedArcs, 1000 )
		setDeviation(calculatedDeviation)
    }, [radiusX, radiusY, segments]); 

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
		if (e.target && (e.buttons === 4 || e.buttons === 1)) {            
			let off = getMousePosition(e);
			let transforms = document.getElementById("group1").transform.baseVal.consolidate().matrix
            off.x -= transforms.e;
            off.y -= transforms.f;
			setOffset({x:off.x,y:off.y})			 
        }
	}

	const endDrag =(e) =>{}

	const drag =(e) =>{
		//console.log (e.buttons)
		if (e.target && (e.buttons === 4 || e.buttons === 1)){
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
			<div  id="wrapper_svg" className="w-100 h-100">
				<div id='intro'><Intro /></div>
				<div id="wrapper_svg_svg"
				onWheel={handleMouseWheel} 
				onMouseDown={startDrag}
				onMouseMove={drag} 
 				onMouseUp={endDrag}
				onMouseLeave={endDrag}>		 
					<SvgComponent 
						matrix={matrix} 
						gmatrix={gmatrix} 
						ell={ell}
						arcs={arcs}
						deviation={deviation}
						/>
				</div>
				<div>
					<RightPanel 
						setRadiusX={setRadiusX} 
						setRadiusY={setRadiusY}
						setSegments={setSegments} 
						ell={ell} 
						arcs={arcs} 
						deviation={deviation}
						/>
				</div>
			</div>
		</main>

	);
};

export default SvgWrapper;