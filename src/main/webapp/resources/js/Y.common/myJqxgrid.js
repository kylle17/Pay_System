

function makeJqxgridObject( gridAttribute ){
	
	
	var jqxGrid = function(){
		
		let thisJqxGrid = $("#"+gridAttribute.gridName);
		let data = makeData();
		let dataFields = gridAttribute.dataFields;
		let source =	{
						    datatype: "json",
						    localdata: data,
						    datafields: dataFields
						};
		let dataAdapter = new $.jqx.dataAdapter(source);
		let columns = gridAttribute.columns;
		let gridDesign = gridAttribute.gridDesign;
		makeGrid( columns , dataAdapter , gridDesign );	
		
		
		
		function makeData(){
			let data =	[{
							"":	""	,
							"":	""	,
							"":	""	
						}];
			return JSON.stringify(data);
		};   

		
		function makeGrid( columns , dataAdapter , gridDesign ){
			let gridDataDesign = {
			    source: dataAdapter,
			    columns: columns	
			};
			thisJqxGrid.jqxGrid( Object.assign( gridDataDesign , gridDesign ) ); 	
		}
		
		
		let goSelect = function( data ){
			source.localdata = JSON.stringify(data);
			let thisJqxgrid =  thisJqxGrid;
			thisJqxGrid.jqxGrid({ source: source });
		};

		
		let goReset = function(){
			let dataFilterArray = [];
			source.localdata = JSON.stringify(dataFilterArray);
			dataAdapter = new $.jqx.dataAdapter(source);
			let thisJqxgrid =  thisJqxGrid;
			thisJqxgrid.jqxGrid({ source: source });
			selectedGirdData = null;
		};
		
		
		let goSave = function(){
			alert('저장 완료');
		}; 
		
		
		let goDelete = function(){
			alert('삭제 완료');
		};
				
		let selectedGirdData = function(){
			let thisJqxgrid =  thisJqxGrid;
			let selectedrowindex = thisJqxGrid.jqxGrid('selectedrowindex');
			return thisJqxGrid.jqxGrid('getrowdata', selectedrowindex);
		}
		
	
			
	
		
		return {
			goSelect : goSelect ,
			goReset : goReset ,
			goSave : goSave ,
			goDelete : goDelete ,
			selectedGirdData : selectedGirdData ,
		};
		
	}();
	
	
	return jqxGrid;
}