import React from 'react';

const Panels = () => {

	function __ (w) { return w}
	function mirror () {}
	function deleteP(){}
	const panelInfo = [
		{
			id: 'toolsPopup',
			mini: false,
			fa: (<div className="ms-2 mt-2"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg></div>),
			style: {
				top: '200px',
				left: '600px',
				width: 'auto',
				height: 'auto'
			  },
			content: (
			<div className="d-flex align-items-center btn_block flex-wrap">
		 <button type="button" className="btn text-white mt-1 ms-2 btn_mode btn_arrow_mode">
		 	<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H297.9c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"/></svg>
 		 </button>
		 <button type="button" className="btn mt-1 ms-2 btn_mode btn_inverse_selection">
		 	<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#02feff" viewBox="0 0 320 512"><path fill="--(paleColor)" d="M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H297.9c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"/></svg>
		 </button>
		 <button type="button" className="btn text-white mt-1 ms-2 btn_mode btn_selection_plus">
			<div className="d-flex flex-row align-items-center justify-content-center">
				<i className="fa-solid fa-arrow-pointer"></i>
				<div style={{ marginTop: 11+'px'}}>+</div>
			 </div> 
		</button>
		<button type="button" className="btn text-white mt-1 ms-2 btn_mode btn_selection_minus">
			<div className="d-flex flex-row align-items-center justify-content-center">
				<i className="fa-solid fa-arrow-pointer"></i>
				<div style={{ marginTop: 11+'px'}}>-</div>
			</div> 
		</button>
		<button type="button"
			 className="btn text-white mt-1 ms-2 btn_mode btn_zoom_mode btn_active_mode"><i
				 className="fa-solid fa-hand"></i>
		 </button>
		 <button type="button" className="btn text-white mt-1 ms-2 btn_mode btn_ruler_mode">
			 <i className="fa-solid fa-ruler"></i>
		 </button>
		 <div className="ms-2 mt-1">
		 <div className="d-flex justify-content-center">
		   <div>
			 <input className="form-control form-control angle" type="number" required="" style={{width:71+'px'}} value="90" onChange={()=>{}}></input>
		   </div>
		   <div>
		   <button type="submit" className="btn text-white btn_rotate mt-1">
				<div className="d-flex flex-row align-items-top justify-content-center">
					<i className="fa-solid fa-angle-90"></i>
					<div style={{ fontFamily: 'Font Awesome 6 Pro', marginTop: -7+'px' }}>°</div>
			   </div>
			</button>
		   </div>
		 </div>
		</div>
		 <button type="button" className="btn text-white mt-1 ms-2 btn_rotate_left">
			 <div className="d-flex flex-row align-items-top justify-content-center">
				<i className="fa-solid fa-rotate-left"></i>
				<div style={{ fontFamily: 'Font Awesome 6 Pro', marginTop: -7+'px' }}>°</div>
			</div>
		</button>
		 <button type="button" className="btn text-white mt-1 ms-2 btn_rotate_right">
			<div className="d-flex flex-row align-items-top justify-content-center">
				<i className="fa-solid fa-rotate-right"></i>
				<div style={{ fontFamily: 'Font Awesome 6 Pro', marginTop: -7+'px' }}>°</div>
			</div>
		 </button>
		 <button type="button" className="btn text-white mt-1 ms-2 btn_mirror d-none"
		 onMouseDown={mirror()}>
			 <i className="fa-brands fa-mixer"></i>											
		 </button>
		 <button type="button" className="btn text-white mt-1 ms-2 btn_mirror vertical"
		 onMouseDown={mirror()}>
			 <i className="fa-solid fa-image fa-flip" ></i>
		</button>
		 <button type="button" className="btn text-white mt-1 ms-2 btn_delete"
			 onMouseDown={deleteP()}><i className="fa-solid fa-trash"></i>
		 </button>					
		</div>)
		},
	/*	{
			id: 'sheetPopup',
			mini: false,
			fa: (<i className="fa-solid fa-sheet-plastic"></i>),
			style: {
				top: '400px',
				left: '1000px',
				width: 'auto',
				height: 'auto'
			  },
			content:
				(<div className="d-flex">
		<table className="table">
			<thead className="table-dark">
				<tr>
					<th colspan="3">${__("Sheet data")}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="w-25">
						<div><p>${__("file")}:</p></div>												
					</td>
					<td colspan="2">
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
							<div><p>${__("thickness")}:</p></div>
							<div><p id="info_thickness"></p></div>
						</div>
					</td>
				 </tr>
				<tr>
					<td>
						 <p>${__("Material")}:</p>
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
							<div><p>${__("Parts collide")}:</p></div>
							<div><p id="info_collision">0</p></div>
						</div>
					</td>
					<td>
						<div className="d-flex partIntendPanel">
							<div><p>${__("Part intend")}:</p></div>
							<div><input style={{width:'50px'}} type="number" min={5} placeholder={0} id="partIntend"></input></div>
						</div>
					</td>
					<td>
						<div className="form-check ms-2" id="partInPartPanel">
							<input className="form-check-input" type="checkbox" value={0} id="partInPart" checked></input>
							<label className="form-check-label" for="partInPart">
								${__("Part in part")}
							</label>
						</div>
					</td>
				</tr>
				<tr>
					<td colspan='3'>
						<div className="form-check ms-2 moveInnerPartsPanel">
							<input className="form-check-input" type="checkbox" value="" id="moveInnerParts" checked></input>
							<label className="form-check-label" for="moveInnerParts">
								${__("Move with inner part")}
							</label>
						</div>
						<button type="button" className="btn text-white mt-1 ms-2 btn_rotate_sheet" onMouseDown="edit.rotateSheet()" disabled>
							${__('Rotate sheet 90°')}
						</button>
					</td>
				 </tr>            
				<tr>
					<td colspan="3" id="intednsPanel">
						<div><p>${__('Intends')}:</p></div>
						<div>
							<div className="d-flex justify-content-center align-items-center">
								<div>
									<input style={{width:'50px'}} className="inputIntend" type="number" min={0} placeholder={0} id="intendBottom" value="0"></input>
								</div>
							</div>
							<div className="d-flex justify-content-center align-items-center">
								<div>
									<input style={{width:'50px'}} className="inputIntend" type="number" min={0} placeholder={0} id="intendRight" value="0"></input>
								</div>
								<div id="sheetModel">
									<div id="intendModel">
									</div>
								</div>
								<div>
									<input style={{width:'50px'}} className="inputIntend" type="number" min={0} placeholder={0} id="intendLeft" value="0"></input>
								</div>															
							</div>
							<div className="d-flex justify-content-center align-items-center">
								<div>
									<input style={{width:'50px'}} className="inputIntend" type="number" min={0} placeholder={0} id="intendTop" value="0"></input>
								</div>
							</div>														
						</div>
					 </td>
				</tr>
			</tbody>
		</table>
	</div>)
		},
		{
			id: 'partPopup',
			mini: false,
			fa: (<i className="fa-solid fa-gear"></i>),
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
					<th colspan="4">${__("Part data")}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td colspan='1'>id :</td>
					<td colspan='3' id="info_id"></td>												
				</tr>
				<tr>
					<td>__: </td>
					<td id="info_x"></td>
					<td>| : </td>
					<td id="info_y"></td>
				</tr>
				<tr>
					<td>${__("width")}: </td>
					<td id="info_width"></td>
					<td>${__("height")}: </td>
					<td id="info_height"></td>
				</tr>
				<tr>
					<td>${__("angle")}: </td>
					<td id="info_angle"></td>
					<td>
						<div className="d-flex align-items-center"><div>${__("angle")}:</div>
						<div className="ms-2" id="set_angle" contenteditable></div></div>
					</td>
					<td></td>
				</tr>
				<tr id="rulerPanel">
					<td className='w-25'>${__("Ruler")}</td>
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
						<div>${__('Distance')}:</div>
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
			fa: (<i className="fa-solid fa-list"></i>),
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
						<th className="header longText longText5" scope="col">${__("id")}</th>
						<th className="header longText" scope="col">${__("part_code")}</th>
						<th className="header" scope="col">${__("amount")}</th>
						<th className="header" scope="col">${__("pic")}</th>
						<th className="header" scope="col">${__("action")}</th>
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
			fa: (<i className="fa-regular fa-objects-column"></i>),
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
							<td colspan={3} className="d-flex align-items-center justify-content-around">
								<div className="d-none">${__("align")}:</div>
								<button type="button" className="btn text-white mt-1 btn_align btn_align-left" onMouseDown="edit.align()">
									<i className="fa-solid fa-objects-align-left"></i>
								</button>
								<button type="button" className="btn text-white mt-1 btn_align btn_align-center-vertical" onMouseDown="edit.align()">
									<i className="fa-solid fa-objects-align-center-horizontal"></i>
								</button>
								<button type="button" className="btn text-white mt-1 btn_align btn_align-right" onMouseDown="edit.align()">
									<i className="fa-solid fa-objects-align-right"></i>
								</button>	
			
								<button type="button" className="btn text-white mt-1 btn_align btn_align-top" onMouseDown="edit.align()">
									<i className="fa-solid fa-objects-align-left fa-rotate-90"></i>
								</button>
								<button type="button" className="btn text-white mt-1 btn_align btn_align-center-horizontal" onMouseDown="edit.align()">
									<i className="fa-solid fa-objects-align-center-vertical"></i>
								</button>
								<button type="button" className="btn text-white mt-1 btn_align btn_align-bottom" onMouseDown="edit.align()">
									<i className="fa-solid fa-objects-align-right fa-rotate-90"></i>
								</button>
								</td>
							</tr>    
							<tr>
								<td colspan={3} className="d-flex align-items-center">
								<div className="form-check ms-2 moveInnerPartsPanel">
									<input className="form-check-input" type="checkbox" value="" id="alignInnerParts" checked></input>
								<label className="form-check-label" for="alignInnerParts">
									${__("Move with inner part")}														  </label>
							</div>	
							</td>
						</tr>
						<tr>	
							<td colspan={3} className="d-flex align-items-center justify-content-around">
								<div className="d-none">${__("spread")}:</div>
			
								<button type="button" className="btn text-white mt-1 btn_spread btn_spread-left" onMouseDown="edit.spread()">
									<i className="fa-solid fa-arrow-up-wide-short fa-rotate-90"></i>
								</button>									
								<button type="button" className="btn text-white mt-1 btn_spread btn_spread-up" onMouseDown="edit.spread()">
									<i className="fa-solid fa-arrow-up-wide-short"></i>
								</button>
								<button type="button" className="btn text-white mt-1 btn_spread btn_spread-down" onMouseDown="edit.spread()">
									<i className="fa-solid fa-arrow-up-wide-short fa-rotate-180"></i>
								</button>
								<button type="button" className="btn text-white mt-1 btn_spread btn_spread-right" onMouseDown="edit.spread()">
									<i className="fa-solid fa-arrow-up-wide-short fa-rotate-270"></i>
								</button>
								<div className="d-flex align-items-center ms-2 partIntendPanel">
									<div><p className="m-0 ms-2 mf-2">${__('intend')}:</p></div>
									<div><input style={{width:'50px'}} type="number" id="spreadIntend"></input></div>
								</div>
							</td>
						</tr>
						<tr>
							<td colspan={3} className="d-flex align-items-center">
								<div className="form-check ms-2 moveInnerPartsPanel">
									<input className="form-check-input" type="checkbox" value="" id="spreadInnerParts" checked></input>
									<label className="form-check-label" for="spreadInnerParts">
											${__("Move with inner part")}														  </label>
								</div>	
							</td>												
						</tr>
						<tr>	
							<td colspan={3} className="d-flex align-items-center justify-content-around">
								<div className="d-flex align-items-center ms-2">
									<div className="mr-2"><i className="fa-solid fa-grip-lines"></i></div>
									<div><input style={{width:'50px'}} type="number" id="cloneRows" value={2} min="1" max="1000"></input></div>
								</div>
								<div className="d-flex align-items-center ms-2">
									<div className="mr-2"><i className="fa-solid fa-grip-lines-vertical"></i></div>
									<div><input style={{width:'50px'}} type="number" id="cloneColumnns" value={2} min="1" max="1000"></input></div>
								</div>
								<button type="button" className="btn btn-sm btn-info mt-1 ms-2 btn_clone" onMouseDown="edit.clone()">
									${__('Clone')}
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
			fa: (<i className="fa-solid fa-route"></i>),
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
				<tr><th><div>${__('Residual cut')}</div></th></tr>
			</thead>
			<tbody>											
				<tr>
					<td>
						<div className="d-flex align-items-center justify-content-center">
							<button type="button" className="btn text-white btn_delete_residualCut" onMouseDown="rcut.residualCut()">
								<i className="fa-solid fa-trash-can"></i>
							</button>
							<button type="button" className="btn text-white btn_add_residualCut_auto" onMouseDown="rcut.residualCut()">
								<i className="fa-solid fa-robot"></i>
							</button>
							<button type="button" className="btn text-white btn_add_residualCut_manual" onMouseDown="rcut.residualCut()">
								<i className="fa-solid fa-hand"></i>
							</button>
							<button type="button" className="btn text-white btn_add_residualCut_save" onMouseDown="rcut.residualCut()">
								<i className="fa-solid fa-floppy-disk"></i>
							</button>
							<button type="button" className="btn text-white btn_show_residualCut_auto" onMouseDown="rcut.residualCut()">
								<i className="fa-solid fa-play"></i>
							</button>
							
						</div>
					 </td>
				</tr>
				<tr>
					<td>
						<div className="d-flex align-items-center">${__('Residual Cut')}:
						<div className="form-outline d-flex align-items-center rcStep"
							data-toggle="toolti p" data-placement="top" title='${__("Size of step for residual cut")}'>
								<label className="form-label mb-0 ms-4" for="rcStep">${__("Step")}</label>
								<input className="w-50 ms-2 form-control" min={10} max={100} type="number" id="rcStep"/>mm
							</div> 
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<table className="table">
			<thead className="table-dark">
				<tr><th><div>${__('Cutting order')}</div></th></tr>
			</thead>
			<tbody>	
				<tr>
					<td>
						<div className="d-flex align-items-center ml-35">
							<div className=""><input className="form-check-input" type="checkbox" value="" id="showCutQueCheckBox"> ${__("Show queque cut")}</input></div>
						  </div>
					</td>
				</tr>
				<tr>
					<td>
						<div className="d-flex align-items-center ml-35">
							 <div className="">
								<input className="form-check-input" type="checkbox" value="" id="showNumberPartCut"> ${__("Show cut number ")}</input></div>
						 </div>
					</td>
				</tr>
				
				<tr>
					<td>
						<div className="d-flex flex-column">
							<div className="d-flex flex-start align-items-center ml-35">
								<input className="form-check-input" type="checkbox" value="" id="showPrograms"> ${__("Show cut  programm numbers")}</input></div>
							<div className="d-flex mt-2">
								<div className="ms-2">
									<button  type="button" className="btn btn-sm btn-secondary" id="yyy">${__("Current")}</button>
								</div>
								<div className="ms-2">
									<button  type="button" className="btn btn-sm btn-secondary" id="xxx">${__("Create auto")}</button>
								</div>
								<div className="ms-2">
									<button  type="button" className="btn btn-sm btn-secondary" id="uuu">${__("Create manual")}</button>
								</div>
								<div className="ms-2">
									<button  type="button" className="btn btn-sm btn-info" id="playCutOrder">
										<i className="fa-solid fa-play"></i>
									</button>
								</div>
							</div>
							<div className="d-flex">
								<div className="ms-2">
									<label for="speedShow" className="form-label">${__("Speed")}</label>
									<input type="range" className="form-range" id="speedShow" step="1" min={1} max={9} value={5}></input>
								</div>
								<div className="rcSector ms-2 form-outline d-flex align-items-center">
									<label className="form-label" for="rectShow">${__("Sector size")}</label>
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
			fa: (<i className="fa-solid fa-clock-rotate-left"></i>),
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
        <div
          key={'panel' + index}
          id={element.id}
          className={element.mini ? 'window popup mini h45' : 'window popup'}
          style={element.style}
        >
          <div className="window-top popup-header">
            <div className="d-flex align-items-center justify-content-between">
              <div className="nav-link">{element.fa}</div>
              <div className="minify_wrapper d-flex align-items-center justify-content-center">
                <div className={element.mini ? 'minified minify' : 'minify'}></div>
              </div>
            </div>
          </div>
          <div className={`window-content ${element.mini ? 'mini' : ''}`}>
            {element.content}
          </div>
        </div>
      ))}
    </>
  );
};

export default Panels;
