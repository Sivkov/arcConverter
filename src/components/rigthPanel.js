import React, { useEffect, useState } from 'react';

function RightPanel({ setRadiusX, setRadiusY, radiusX, radiusY }) {
	const segmentsHandler = (e) => console.log(e.currentTarget.value);
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
					value={radiusX}
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
					value={radiusY}
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
					value={14}
				/>
			</div>
			<div className='rightPanelItem'>
				<button className='btn btn-lg button btn-primary'>Check</button>
			</div>
			

		</div>
	);
}

export default RightPanel;
