import React, { useEffect, useState } from 'react';

function RightPanel({ setRadiusX, setRadiusY, setSegments }) {
	const segmentsHandler = (e) => setSegments(Number(e.currentTarget.value))
	const radiusXHandler = (e) => setRadiusX(Number(e.currentTarget.value));
	const radiusYHandler = (e) => setRadiusY(Number(e.currentTarget.value));

	return (
		<div className="form-check" 
			style={{ marginRight: '60px', display:'flex', flexDirection:'column' }}>
			<div className='rightPanelItem'>
				<label htmlFor="radiusX">Radius X</label>
				<input
					className=""
					type="number"
					id="radiusX"
					onChange={radiusXHandler}
					style={{ marginLeft: '0' }}
					placeholder={50}
				/>
			</div>
			<div className='rightPanelItem'>
				<label htmlFor="radiusY">Radius Y</label>
				<input
					className=""
					type="number"
					id="radiusY"
					onChange={radiusYHandler}
					style={{ marginLeft: '0' }}
					placeholder={20}
				/>
			</div> 
			<div className='rightPanelItem'> 
				<label htmlFor="segments">Segments</label>
				<input
					className=""
					type="number"
					id="segments"
					onChange={segmentsHandler}
					style={{ marginLeft: '0' }}
					placeholder={14}
					min={4}
				/>
			</div>
			<div className='rightPanelItem'>
				<button className='btn btn-lg button btn-primary'>Check</button>
			</div>
			

		</div>
	);
}

export default RightPanel;
