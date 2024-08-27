import React, { useEffect, useState } from 'react';

function RightPanel() {
	// Corrected handler functions
	const radiusXHandler = (e) => console.log(e.currentTarget.value);
	const radiusYHandler = (e) => console.log(e.currentTarget.value);
	const segmentsHandler = (e) => console.log(e.currentTarget.value);

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
					value={30}
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
					value={20}
				/>
			</div> 
			<div className='rightPanelItem'> 
				<label htmlFor="radiusY">Radius Y</label>
				<input
					className=""
					type="number"
					id="segments"
					onChange={segmentsHandler}
					style={{ marginLeft: '0' }}
					value={14}
				/>
			</div> 
		</div>
	);
}

export default RightPanel;
