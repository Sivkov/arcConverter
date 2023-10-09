import React, { useState, useRef } from 'react';

const SvgComponent = (matrix) => {
	const wrapperRef = useRef(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	// Обработчик события для перемещения элемента
	const handleMove = () => {
		// Обновите состояние, чтобы изменить позицию
		setPosition({ x: 100, y: 100 });
	};

 	const matrixValues =[
		[1, 0, 0, 1, 10, 89],
		[1, 0, 0, 1, 100, 19],	]; 


	return (

	<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" id="svg" viewBox="0.00 0.00 206.00 184.00" style={{ overflow: 'visible' }} version="1.1">
		<g id="group2" transform-origin="center" transform="rotate(-90)">
			<g id="group1" transform="translate(0 0)">
				
				<g id="group" ref={wrapperRef}  transform={`matrix(${matrix.matrix.a||1} ${matrix.matrix.b||0} ${matrix.matrix.c||0} ${matrix.matrix.d||1} ${matrix.matrix.e||0} ${matrix.matrix.f||0})`}>
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
						<g id="part_1" className="part" part-code="???" data-width="50.000" data-height="35.000">
							<g vectorEffect="non-scaling-stroke" fill="#ba783b" className="outer" stroke="orange" strokeWidth="0.1"><path d="M47.0,5.0A3.0,3.0 0 0,1 50.0,8.0v24.0A3.0,3.0 0 0,1 47.0,35.0H3.0A3.0,3.0 0 0,1 0.0,32.0V8.0A3.0,3.0 0 0,1 3.0,5.0h44.0A2.0,2.0 0 0,0 48.5,1.7zM47.04,19.06A0.63,0.63 0 0,0 46.70,18.08A2.00,2.00 0 1,0 48.14,20.00A2.00,2.00 0 0,0 46.70,18.08zM48.12,30.43A2.00,2.00 0 0,0 44.11,30.43A2.00,2.00 0 0,0 48.12,30.43zM30.9,19.2A171.3,171.3 0 0,0 30.8,12.9h-1.7v14.8h2.1l7.6,-11.8A4.5,4.5 0 0,0 39.3,15.0h0.1A129.0,129.0 0 0,0 39.3,27.7h1.7V12.9h-2.2l-1.1,1.7A469.1,469.1 0 0,1 31.3,24.6A9.0,9.0 0 0,0 30.8,25.5A171.3,171.3 0 0,0 30.9,19.2A0.3,0.3 0 0,0 30.6,19.0zM20.7,23.2l0.1,0.3A10.3,10.3 0 0,1 19.7,25.3A2.6,2.6 0 0,1 18.1,26.4A3.1,3.1 0 0,1 16.1,25.9v1.7A4.1,4.1 0 0,0 21.1,26.2A14.6,14.6 0 0,0 22.7,23.4l4.6,-10.5h-1.8l-3.8,8.9A102.7,102.7 0 0,0 17.8,12.9h-2.0l4.9,10.3A0.4,0.4 0 0,0 21.3,23.3zM13.1,27.7h1.8l-4.7,-7.5l4.7,-7.3h-2.0l-0.4,0.6A143.0,143.0 0 0,1 10.1,17.6A11.5,11.5 0 0,0 9.1,19.1A10.3,10.3 0 0,0 8.6,18.2L5.6,12.9H3.4l4.6,7.4l-5.0,7.4h2.2l3.9,-6.4A5.7,5.7 0 0,0 9.4,22.0l3.4,5.7h0.3A0.4,0.4 0 0,0 13.5,27.2z"></path></g>
							<g vectorEffect="non-scaling-stroke" fill="None" className="engrave" stroke="#000" strokeWidth="0.1"><path d="M31.52,8.45h1.67A1.97,1.97 0 0,0 37.02,9.09l0.16,-0.64h1.66A3.67,3.67 0 0,1 31.52,8.45"></path><path d="M48.45,10.05A2.00,2.00 0 0,0 44.44,10.05A2.00,2.00 0 0,0 48.45,10.05"></path></g>
							<g vectorEffect="non-scaling-stroke" fill="None" className="contour" stroke="orange" strokeWidth="0.1"><path d="M47.04,19.06A0.63,0.63 0 0,0 46.70,18.08A2.00,2.00 0 1,0 48.14,20.00A2.00,2.00 0 0,0 46.70,18.08"></path><path d="M48.12,30.43A2.00,2.00 0 0,0 44.11,30.43A2.00,2.00 0 0,0 48.12,30.43"></path><path d="M30.6,19.0A0.3,0.3 0 0,1 30.9,19.2A171.3,171.3 0 0,1 30.8,25.5A9.0,9.0 0 0,1 31.3,24.6A469.1,469.1 0 0,0 37.7,14.6l1.1,-1.7h2.2v14.8h-1.7A129.0,129.0 0 0,1 39.4,15.0h-0.1A4.5,4.5 0 0,1 38.8,15.9l-7.6,11.8h-2.1V12.9h1.7A171.3,171.3 0 0,1 30.9,19.2"></path><path d="M48.5,1.7A2.0,2.0 0 0,1 47.0,5.0H3.0A3.0,3.0 0 0,0 0.0,8.0v24.0A3.0,3.0 0 0,0 3.0,35.0h44.0A3.0,3.0 0 0,0 50.0,32.0V8.0A3.0,3.0 0 0,0 47.0,5.0"></path></g>
							<g vectorEffect="non-scaling-stroke" fill="none" className="incut" stroke="#CEC97D" strokeWidth="0.1"><path data-pos="5" data-class="open" d="M47.0,0.0l1.5,1.7"></path><path data-pos="2" data-class="open" d="M45.98,20.51l1.06,-1.45"></path><path data-pos="4" data-class="open" d="M29.8,19.2l0.8,-0.2"></path><path data-pos="4" data-class="inner" d="M22.0,22.6l-0.7,0.7"></path>
								<path data-pos="5" data-class="inner" d="M13.1,26.3l0.4,0.9"></path></g>
							<g fill="red" className="incut_start" stroke="none"><circle cx="47.0" cy="0.0" r="0.1" data-pos="5" data-class="open"></circle><circle cx="31.52" cy="8.45" r="0.1" data-pos="0" data-class="engraving"></circle><circle cx="48.45" cy="10.05" r="0.1" data-pos="1" data-class="engraving"></circle><circle cx="45.98" cy="20.51" r="0.1" data-pos="2" data-class="open"></circle><circle cx="48.12" cy="30.43" r="0.1" data-pos="3" data-class="open"></circle><circle cx="29.85" cy="19.2" r="0.1" data-pos="4" data-class="open"></circle><circle cx="21.99" cy="22.57" r="0.1" data-pos="4" data-class="inner"></circle><circle cx="13.13" cy="26.27" r="0.1" data-pos="5" data-class="inner"></circle></g>
							<g vectorEffect="non-scaling-stroke" fill="none" className="outlet" stroke="#CEC97D" strokeWidth="0.1"><path data-pos="5" data-class="open" d=""></path></g>
						</g>
					</defs>
					<g fill="#333333" id="outer" className="sheet"><rect height="184" width="206" x="0" y="0" fill="url(#grid)" transform-origin="50% 50%" stroke="white" strokeWidth="0.5"></rect></g>
					<g className="parts">
					{matrixValues.map((matrixValue, index) => (
						<use key={index} xlinkHref="#part_1" id="pos_1_0" transform={`matrix(${matrixValue.join(' ')})`} />
					))}
					</g>
				</g>
			</g>
		</g>
	</svg>





	);
};

export default SvgComponent;





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