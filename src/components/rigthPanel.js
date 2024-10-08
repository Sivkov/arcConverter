import React from 'react';

function RightPanel({ setRadiusX, setRadiusY, setSegments, ell, arcs, deviation }) {
	const segmentsHandler = (e) => setSegments(Number(e.currentTarget.value))
	const radiusXHandler = (e) => setRadiusX(Number(e.currentTarget.value));
	const radiusYHandler = (e) => setRadiusY(Number(e.currentTarget.value));
	
	return (
		<div className="rightPanel__formCheck">
			<div className='rightPanelItem'>
				<label htmlFor="radiusX">Radius X</label>
				<input
					className=""
					type="number"
					id="radiusX"
					onChange={radiusXHandler}
					style={{ marginLeft: '0' }}
					placeholder={30}
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
				<label htmlFor="segments">Segment</label>
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
				<div id='error'><p className={ deviation.maxDeviation > 0.05 ? 'text-danger' :''}>Max deviation: {Math.round(deviation.maxDeviation*10000)/10000} mm</p></div>		
 			</div>	
			<div className='rightPanelItem rightPanel__pathWrapper rightPanel__pathWrapper_min' >
				<div id='ell'>{ell}</div>		
 			</div>
			 <div className='rightPanelItem rightPanel__pathWrapper'>
				<div id='arcs'>{arcs}</div>		
 			</div>			
		</div>
	);
}

export default RightPanel;
