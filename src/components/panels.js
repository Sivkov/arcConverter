import React, { useState }  from 'react';
import { Icon } from '@iconify/react';
import Panel from './panel';

const Panels = () => {

	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event) => {
	  setInputValue(event.target.value);
	  // You can add your custom logic here when the input value changes
	};

	function __ (w) { return w}
	function mirror () {}
	function deleteP(){}
	const panelInfo = [
		{
			id: 'toolsPopup',
			mini: false,
			fa: (<Icon icon="heroicons:wrench-screwdriver-20-solid"/>),
			style: {
				top: 200,
				left: 800,
				width: 140,
				height:300 
			  },
			content: (
			<div className="d-flex align-items-center btn_block flex-wrap">
		 <button type="button" className="btn text-white mt-1 ms-2 btn_mode btn_arrow_mode">
		 	<Icon icon="fa6-solid:arrow-pointer" />
 		 </button>
		 <button type="button" className="btn mt-1 ms-2 btn_mode btn_inverse_selection">
		 	<Icon icon="fa6-solid:arrow-pointer" color="#02feff" />
		 </button>
		 <button type="button" className="btn text-white mt-1 ms-2 btn_mode btn_selection_plus">
			<div className="d-flex flex-row align-items-center justify-content-center">
				<Icon icon="fa6-solid:arrow-pointer" />
				<div style={{ marginTop: 11+'px'}}>+</div>
			 </div> 
		</button>
		<button type="button" className="btn text-white mt-1 ms-2 btn_mode btn_selection_minus">
			<div className="d-flex flex-row align-items-center justify-content-center">
				<Icon icon="fa6-solid:arrow-pointer" />
				<div style={{ marginTop: 11+'px'}}>-</div>
			</div> 
		</button>
		<button type="button" className="btn text-white mt-1 ms-2 btn_mode btn_zoom_mode">
				<Icon icon="fa6-solid:hand"/>
		 </button>
		 <button type="button" className="btn text-white mt-1 ms-2 btn_mode btn_ruler_mode">
			 <Icon icon="fa6-solid:ruler" />
		 </button>
		 <div className="ms-2 mt-1">
		 <div className="d-flex justify-content-center">
		   <div>
			 <input className="form-control form-control angle" type="number" required="" style={{width:71+'px'}} value="90" onChange={()=>{}}></input>
		   </div>
		   <div>
		   <button type="submit" className="btn text-white btn_rotate mt-1">
				<div className="d-flex flex-row align-items-top justify-content-center">
					<Icon icon="tabler:angle" />
					<div style={{ fontFamily: 'Font Awesome 6 Pro', marginTop: -7+'px' }}>°</div>
			   </div>
			</button>
		   </div>
		 </div>
		</div>
		 <button type="button" className="btn text-white mt-1 ms-2 btn_rotate_left">
			 <div className="d-flex flex-row align-items-top justify-content-center">
				<Icon icon="fa6-solid:rotate-left" />
				<div style={{ fontFamily: 'Font Awesome 6 Pro', marginTop: -7+'px' }}>°</div>
			</div>
		</button>
		 <button type="button" className="btn text-white mt-1 ms-2 btn_rotate_right">
			<div className="d-flex flex-row align-items-top justify-content-center">
				<Icon icon="fa6-solid:rotate-right" />
				<div style={{ fontFamily: 'Font Awesome 6 Pro', marginTop: -7+'px' }}>°</div>
			</div>
		 </button>
		 <button type="button" className="btn text-white mt-1 ms-2 btn_mirror vertical"
		 onMouseDown={mirror()}>
			<Icon icon="octicon:mirror-16" rotate={1} />
		</button>
		 <button type="button" className="btn text-white mt-1 ms-2 btn_delete"
			 onMouseDown={deleteP()}><Icon icon="fa6-solid:trash" />
		 </button>					
		</div>)
		},
		{
			id: 'sheetPopup',
			mini: true,
			fa: (<Icon icon="fa6-solid:sheet-plastic" />),
			style: {
				top: 400,
				left: 600,
				width: 350,
				height: 650
			  },
			content:
				(<div className="d-flex">
		<table className="table">
			<thead className="table-dark">
				<tr>
					<th colSpan="3">{__("Sheet data")}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="w-25">
						<div><p>{__("file")}:</p></div>												
					</td>
					<td colSpan="2">
						<div><p id="info_fileName"></p></div>												
					</td>
				</tr>
				<tr>	
					<td>										
						<div className="d-flex">
							<div><p>__:</p></div>
							<div><p id="info_sheet_w"></p></div>
						</div>
					</td>
					<td>
						<div className="d-flex">
							<div><p>| :</p></div>
							<div><p id="info_sheet_h"></p></div>
						</div>
					</td>
					<td>
						<div className="d-flex">
							<div><p>{__("thickness")}:</p></div>
							<div><p id="info_thickness"></p></div>
						</div>
					</td>
				 </tr>
				<tr>
					<td>
						 <p>{__("Material")}:</p>
					</td>
					<td>
						 <p id ="info_materialCode"></p>
					</td>
					<td>
						<p id ="info_MaterialInfoLabel"></p>
					</td>
				 </tr>
				<tr>
					<td>
						<div className="d-flex">
							<div><p>{__("Parts collide")}:</p></div>
							<div><p id="info_collision">0</p></div>
						</div>
					</td>
					<td>
						<div className="d-flex partIntendPanel">
							<div><p>{__("Part intend")}:</p></div>
							<div>
							<div>
							<input
								style={{ width: '50px' }}
								type="number"
								min={5}
								placeholder={0}
								id="partIntend"
								value={inputValue}
								onChange={handleInputChange}
							/>
							</div>
							</div>
						</div>
					</td>
					<td>
						<div className="form-check ms-2" id="partInPartPanel">
							<input className="form-check-input" type="checkbox" value={0} id="partInPart" 
								onChange={handleInputChange}

							checked></input>
							<label className="form-check-label" htmlFor="partInPart">
								{__("Part in part")}
							</label>
						</div>
					</td>
				</tr>
				<tr>
					<td colSpan='3'>
						<div className="form-check ms-2 moveInnerPartsPanel">
							<input className="form-check-input" type="checkbox" value="" id="moveInnerParts" 
															onChange={handleInputChange}
															checked></input>
							<label className="form-check-label" htmlFor="moveInnerParts">
								{__("Move with inner part")}
							</label>
						</div>
						<button type="button" className="btn text-white mt-1 ms-2 btn_rotate_sheet" onMouseDown={ ()=>{}} disabled>
							{__('Rotate sheet 90°')}
						</button>
					</td>
				 </tr>            
				<tr>
					<td colSpan="3" id="intednsPanel">
						<div><p>{__('Intends')}:</p></div>
						<div>
							<div className="d-flex justify-content-center align-items-center">
								<div>
									<input onChange={handleInputChange} style={{width:'50px'}} className="inputIntend" type="number" min={0} placeholder={0} id="intendBottom" value="0"></input>
								</div>
							</div>
							<div className="d-flex justify-content-center align-items-center">
								<div>
									<input onChange={handleInputChange} style={{width:'50px'}} className="inputIntend" type="number" min={0} placeholder={0} id="intendRight" value="0"></input>
								</div>
								<div id="sheetModel">
									<div id="intendModel">
									</div>
								</div>
								<div>
									<input onChange={handleInputChange} style={{width:'50px'}} className="inputIntend" type="number" min={0} placeholder={0} id="intendLeft" value="0"></input>
								</div>															
							</div>
							<div className="d-flex justify-content-center align-items-center">
								<div>
									<input onChange={handleInputChange} style={{width:'50px'}} className="inputIntend" type="number" min={0} placeholder={0} id="intendTop" value="0"></input>
								</div>
							</div>														
						</div>
					 </td>
				</tr>
			</tbody>
		</table>
	</div>)
		},/*
		{
			id: 'partPopup',
			mini: false,
			fa: (<Icon icon="fa6-solid:gear" />),
			style: {
				top: '600px',
				left: '1000px',
				width: 'auto',
				height: 'auto'
			  },
			content: (<div className="d-flex">
		<table className="table">
			<thead className="table-dark">
				<tr>
					<th colSpan="4">{__("Part data")}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td colSpan='1'>id :</td>
					<td colSpan='3' id="info_id"></td>												
				</tr>
				<tr>
					<td>__: </td>
					<td id="info_x"></td>
					<td>| : </td>
					<td id="info_y"></td>
				</tr>
				<tr>
					<td>{__("width")}: </td>
					<td id="info_width"></td>
					<td>{__("height")}: </td>
					<td id="info_height"></td>
				</tr>
				<tr>
					<td>{__("angle")}: </td>
					<td id="info_angle"></td>
					<td>
						<div className="d-flex align-items-center"><div>{__("angle")}:</div>
						<div className="ms-2" id="set_angle" contenteditable></div></div>
					</td>
					<td></td>
				</tr>
				<tr id="rulerPanel">
					<td className='w-25'>{__("Ruler")}</td>
					<td className='w-25'>
						<div className="d-flex">
							<div>x<sub>1</sub>:</div>
							<div id="ruler_x1">0</div>
						</div>
						<div className="d-flex">
							<div>y<sub>1</sub>:</div>
							<div id="ruler_y1">0</div>
						</div>
					</td>
					<td className='w-25'>
						<div className="d-flex">
							<div>x<sub>2</sub>:</div>
							<div id="ruler_x2">0</div>
						</div>
						<div className="d-flex">
							<div>y<sub>2</sub>:</div>
							<div id="ruler_y2">0</div>
						</div>
					</td>
					<td className='w-25'>
						<div>{__('Distance')}:</div>
						<div id="ruler_distance">0</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>)
		},
		{
			id: 'partListPopup',
			mini: false,
			fa: (<Icon icon="fa6-solid:list" />),
			style: {
				top: '800px',
				left: '1000px',
				width: 'auto',
				height: 'auto'
			  },
			content:
				(
			<>		
			<div className="containerTable">
			<table id="partListContainer" className="table">
				<thead style={{ position: 'sticky',top: '0'}} className="table-dark">
					<tr>
						<th className="header" scope="col">#</th>
						<th className="header longText longText5" scope="col">{__("id")}</th>
						<th className="header longText" scope="col">{__("part_code")}</th>
						<th className="header" scope="col">{__("amount")}</th>
						<th className="header" scope="col">{__("pic")}</th>
						<th className="header" scope="col">{__("action")}</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<div className="ms-2 d-flex">
			<div id="addLeftParts d-none" ></div>
		</div>
		</>)
		},
		{
			id: 'selectionPopup',
			mini: false,
			fa: (<i className="fa-regular fa-objects-column" />),
			style: {
				top: '900px',
				left: '1000px',
				width: 'auto',
				height: 'auto'
			  },
			content: (
			<>
			<div className="d-flex">
				<table className="table table_selection">
					<tbody>											
						<tr >
							<td colSpan={3} className="d-flex align-items-center justify-content-around">
								<div className="d-none">{__("align")}:</div>
								<button type="button" className="btn text-white mt-1 btn_align btn_align-left" onMouseDown="edit.align()">
									<Icon icon="fa6-solid:objects-align-left" />
								</button>
								<button type="button" className="btn text-white mt-1 btn_align btn_align-center-vertical" onMouseDown="edit.align()">
									<Icon icon="fa6-solid:objects-align-center-horizontal" />
								</button>
								<button type="button" className="btn text-white mt-1 btn_align btn_align-right" onMouseDown="edit.align()">
									<Icon icon="fa6-solid:objects-align-right" />
								</button>	
			
								<button type="button" className="btn text-white mt-1 btn_align btn_align-top" onMouseDown="edit.align()">
									<Icon icon="fa6-solid:objects-align-left fa-rotate-90" />
								</button>
								<button type="button" className="btn text-white mt-1 btn_align btn_align-center-horizontal" onMouseDown="edit.align()">
									<Icon icon="fa6-solid:objects-align-center-vertical" />
								</button>
								<button type="button" className="btn text-white mt-1 btn_align btn_align-bottom" onMouseDown="edit.align()">
									<Icon icon="fa6-solid:objects-align-right fa-rotate-90" />
								</button>
								</td>
							</tr>    
							<tr>
								<td colSpan={3} className="d-flex align-items-center">
								<div className="form-check ms-2 moveInnerPartsPanel">
									<input className="form-check-input" type="checkbox" value="" id="alignInnerParts" checked></input>
								<label className="form-check-label" htmlFor="alignInnerParts">
									{__("Move with inner part")}														  </label>
							</div>	
							</td>
						</tr>
						<tr>	
							<td colSpan={3} className="d-flex align-items-center justify-content-around">
								<div className="d-none">{__("spread")}:</div>
			
								<button type="button" className="btn text-white mt-1 btn_spread btn_spread-left" onMouseDown="edit.spread()">
									<Icon icon="fa6-solid:arrow-up-wide-short fa-rotate-90" />
								</button>									
								<button type="button" className="btn text-white mt-1 btn_spread btn_spread-up" onMouseDown="edit.spread()">
									<Icon icon="fa6-solid:arrow-up-wide-short" />
								</button>
								<button type="button" className="btn text-white mt-1 btn_spread btn_spread-down" onMouseDown="edit.spread()">
									<Icon icon="fa6-solid:arrow-up-wide-short fa-rotate-180" />
								</button>
								<button type="button" className="btn text-white mt-1 btn_spread btn_spread-right" onMouseDown="edit.spread()">
									<Icon icon="fa6-solid:arrow-up-wide-short fa-rotate-270" />
								</button>
								<div className="d-flex align-items-center ms-2 partIntendPanel">
									<div><p className="m-0 ms-2 mf-2">{__('intend')}:</p></div>
									<div><input style={{width:'50px'}} type="number" id="spreadIntend"></input></div>
								</div>
							</td>
						</tr>
						<tr>
							<td colSpan={3} className="d-flex align-items-center">
								<div className="form-check ms-2 moveInnerPartsPanel">
									<input className="form-check-input" type="checkbox" value="" id="spreadInnerParts" checked></input>
									<label className="form-check-label" htmlFor="spreadInnerParts">
											{__("Move with inner part")}														  </label>
								</div>	
							</td>												
						</tr>
						<tr>	
							<td colSpan={3} className="d-flex align-items-center justify-content-around">
								<div className="d-flex align-items-center ms-2">
									<div className="mr-2"><Icon icon="fa6-solid:grip-lines" /></div>
									<div><input style={{width:'50px'}} type="number" id="cloneRows" value={2} min="1" max="1000"></input></div>
								</div>
								<div className="d-flex align-items-center ms-2">
									<div className="mr-2"><Icon icon="fa6-solid:grip-lines-vertical" /></div>
									<div><input style={{width:'50px'}} type="number" id="cloneColumnns" value={2} min="1" max="1000"></input></div>
								</div>
								<button type="button" className="btn btn-sm btn-info mt-1 ms-2 btn_clone" onMouseDown="edit.clone()">
									{__('Clone')}
								</button>									
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			</>)
		},
		{
			id: 'cutPopup',
			fa: (<Icon icon="fa6-solid:route" />),
			mini: false,
			style: {
				top: '600px',
				left: '1200px',
				width: 'auto',
				height: 'auto'
			  },
			content: (<div className="d-flex flex-column">
		<table className="table mb-0">
			<thead className="table-dark">
				<tr><th><div>{__('Residual cut')}</div></th></tr>
			</thead>
			<tbody>											
				<tr>
					<td>
						<div className="d-flex align-items-center justify-content-center">
							<button type="button" className="btn text-white btn_delete_residualCut" onMouseDown="rcut.residualCut()">
								<Icon icon="fa6-solid:trash-can" />
							</button>
							<button type="button" className="btn text-white btn_add_residualCut_auto" onMouseDown="rcut.residualCut()">
								<Icon icon="fa6-solid:robot" />
							</button>
							<button type="button" className="btn text-white btn_add_residualCut_manual" onMouseDown="rcut.residualCut()">
								<Icon icon="fa6-solid:hand" />
							</button>
							<button type="button" className="btn text-white btn_add_residualCut_save" onMouseDown="rcut.residualCut()">
								<Icon icon="fa6-solid:floppy-disk" />
							</button>
							<button type="button" className="btn text-white btn_show_residualCut_auto" onMouseDown="rcut.residualCut()">
								<Icon icon="fa6-solid:play" />
							</button>
							
						</div>
					 </td>
				</tr>
				<tr>
					<td>
						<div className="d-flex align-items-center">{__('Residual Cut')}:
						<div className="form-outline d-flex align-items-center rcStep"
							data-toggle="toolti p" data-placement="top" title='{__("Size of step for residual cut")}'>
								<label className="form-label mb-0 ms-4" htmlFor="rcStep">{__("Step")}</label>
								<input className="w-50 ms-2 form-control" min={10} max={100} type="number" id="rcStep"/>mm
							</div> 
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<table className="table">
			<thead className="table-dark">
				<tr><th><div>{__('Cutting order')}</div></th></tr>
			</thead>
			<tbody>	
				<tr>
					<td>
						<div className="d-flex align-items-center ml-35">
							<div className=""><input className="form-check-input" type="checkbox" value="" id="showCutQueCheckBox"> {__("Show queque cut")}</input></div>
						  </div>
					</td>
				</tr>
				<tr>
					<td>
						<div className="d-flex align-items-center ml-35">
							 <div className="">
								<input className="form-check-input" type="checkbox" value="" id="showNumberPartCut"> {__("Show cut number ")}</input></div>
						 </div>
					</td>
				</tr>
				
				<tr>
					<td>
						<div className="d-flex flex-column">
							<div className="d-flex flex-start align-items-center ml-35">
								<input className="form-check-input" type="checkbox" value="" id="showPrograms"> {__("Show cut  programm numbers")}</input></div>
							<div className="d-flex mt-2">
								<div className="ms-2">
									<button  type="button" className="btn btn-sm btn-secondary" id="yyy">{__("Current")}</button>
								</div>
								<div className="ms-2">
									<button  type="button" className="btn btn-sm btn-secondary" id="xxx">{__("Create auto")}</button>
								</div>
								<div className="ms-2">
									<button  type="button" className="btn btn-sm btn-secondary" id="uuu">{__("Create manual")}</button>
								</div>
								<div className="ms-2">
									<button  type="button" className="btn btn-sm btn-info" id="playCutOrder">
										<Icon icon="fa6-solid:play" />
									</button>
								</div>
							</div>
							<div className="d-flex">
								<div className="ms-2">
									<label htmlFor="speedShow" className="form-label">{__("Speed")}</label>
									<input type="range" className="form-range" id="speedShow" step="1" min={1} max={9} value={5}></input>
								</div>
								<div className="rcSector ms-2 form-outline d-flex align-items-center">
									<label className="form-label" htmlFor="rectShow">{__("Sector size")}</label>
									<input className="w-50 ms-2 form-control" min={100} max={500} type="number" id="rectShow"/>mm
								</div>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td>
					<div className="d-flex flex-column" id="editCutSquare"></div>
					</td>
				</tr>
				<tr>
					<td>
					<div className="d-flex flex-column" id="cutModel"></div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>)
		},
		{
			id: 'logPopup',
			fa: (<Icon icon="fa6-solid:clock-rotate-left" />),
			mini: false,
			style: {
				top: `600px`,
				left:`1000px`,
				width:`auto`,
				height:`auto`,
			},
			content: (
		<div id="logger_wrapper">
			<div id="logger"></div>
		</div>)
		}*/
	]
return (
    <>
      {panelInfo.map((element, index) => (
        <Panel key={'panel' + index} element={element} index={index}/>
      ))}
    </>
  );
};

export default Panels;
