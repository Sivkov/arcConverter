import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

const Panel = ({ element, index }) => {
	const [isMinified, setIsMinified] = useState(element.mini);
	const toggleMinified = () => {
		setIsMinified((prevIsMinified) => !prevIsMinified);
	};
	const [zIndex, setZIndex] = useState(1);

	const handleIncreaseZIndex = () => {
		let index =findHighestZIndex()
		setZIndex(() => index + 1);
	};

	const findHighestZIndex = () => {
		let currentZIndex = 0;
		const popups = document.querySelectorAll('[data-panel]');
		popups.forEach((popup) => {
		  const zIndex = getComputedStyle(popup).getPropertyValue('z-index');
		  const parsedZIndex = parseInt(zIndex, 10);
		  if (!isNaN(parsedZIndex) && parsedZIndex > currentZIndex) {
			currentZIndex = parsedZIndex;
		  }
		});
		return currentZIndex;
	};


	return (
		<Rnd
			key={'panel' + index}
			default={{
				x: element.style.left,
				y: element.style.top,
				
			}}
			data-panel={index}
			dragHandleClassName="drag_handle" 
			style={{ zIndex: zIndex }}>
			<div id={element.id} className='bg_main drag_handle' onMouseDown={handleIncreaseZIndex}>
				<div>
					<div className="">
						<div className="">
							<div className="">{element.fa}</div>
							<div className="">
								<div onClick={toggleMinified}></div>
							</div>
						</div>
					</div>
					<div className="">
						{element.content}
					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default Panel;