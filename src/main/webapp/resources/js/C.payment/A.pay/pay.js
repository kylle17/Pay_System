




function C_payment_A_pay( programName ){
	
	let $containerTag = document.querySelector('#'+programName);
	$containerTag.setAttribute("onmousemove","");
	const URL = '/PaySystem/A.payment/A.pay';
	$select = document.querySelector("select");
	$payMonth_jqxgrid = document.querySelector("#payMonth_jqxgrid");
	$payDetail_jqxgrid = document.querySelector("#payDetail_jqxgrid");
	
	
	let DropdownBoxModule = dropdownBoxModule( programName , $containerTag , URL ); 
	
	let monthGridModule = makeMonthGridModule();
	let detailGridModule = makeDetailGridModule();
	let employeeGridModule = makeEmployeeGridModule();
	let payGridModule = makePayGridModule();
	let deductionGridModule = makeDeductionGridModule();
	
	
	
	
	
	//===== 이벤트 등록 =============================
		
	$('#goSelect').click(function(){
		detailGridModule.goSelect();
	});
	
	
	$('#clearGrid').click(function(){
		detailGridModule.goReset();
	});
	
	
	$select.addEventListener( "change" , function(){
		selectPayMonthList();
	});
	
	$payMonth_jqxgrid.addEventListener( "click" , function(){
		selectPayDetailList();
	});
	
	$payDetail_jqxgrid.addEventListener( "click" , function(){
		selectPayDetail();
	});
	
	async function selectPayMonthList(){
		
		monthGridModule.goReset();
		detailGridModule.goReset();
		employeeGridModule.goReset();
		payGridModule.goReset();
		deductionGridModule.goReset();
		
		const data = await myAjax( 'get' , URL+'/payMonthList' , sendData() ); 
		monthGridModule.goSelect(data);
		
		function sendData(){
			return 'payYear='+$select.options[$select.selectedIndex].value;
			
		};
	};
	
	
	async function selectPayDetailList(){
		
		detailGridModule.goReset();
		employeeGridModule.goReset();
		payGridModule.goReset();
		deductionGridModule.goReset();
		
		console.log(monthGridModule.selectedGirdData());
		
		const data = await myAjax( 'get' , URL+'/payDetailList' , sendData() ); 
		detailGridModule.goSelect(data);
		
		function sendData(){
			return 'payYearMonth='+monthGridModule.selectedGirdData().PAYMONTH  ;
			
		};
	};
	
	
	async function selectPayDetail(){
		
		employeeGridModule.goReset();
		payGridModule.goReset();
		deductionGridModule.goReset();
		
		const data = await myAjax( 'get' , URL+'/payDetail' , sendData() ); 
		
		employeeGridModule.goSelect(data.employee_data);
		payGridModule.goSelect(data.pay_data);
		deductionGridModule.goSelect(data.deduction_data);
		
		function sendData(){
			return 'employee='+detailGridModule.selectedGirdData().employee_number  
				   +'&payYearMonth='+monthGridModule.selectedGirdData().PAYMONTH;
			
		};
	};
	
	
	
	
	function makeMonthGridModule(){
		let gridName = 'payMonth_jqxgrid';
		let dataFields = [
						    { name: 'PAYMONTH', 	type: 'string' },
						    { name: 'COUNT', 		type: 'string' },
						    { name: 'ATOTAMNT', 	type: 'string' },
						    { name: 'DTOTAMNT', 	type: 'string' },
						    { name: 'RTOTAMNT', 	type: 'string' },
						 ];
		let columns = [
					    { datafield: 'PAYMONTH', 	text: '월', 		width: 80, cellsalign: 'center', align: 'center' },
					    { datafield: 'COUNT', 		text: '인원', 		width: 40, cellsalign: 'center', align: 'center' },
					    { datafield: 'ATOTAMNT', 	text: '소득합계', 	width: 90, cellsalign: 'right', align: 'center' },
					    { datafield: 'DTOTAMNT', 	text: '공제합계', 	width: 90, cellsalign: 'right', align: 'center' },
					    { datafield: 'RTOTAMNT', 	text: '지급합계', 	width: 90, cellsalign: 'right', align: 'center' },
					  ]; 
		let gridDesign = {
					    	width: '100%',
					    	height: '100%',
					        columnsresize: true,
					        sortable: true,
					        theme: 'office',
					        filterable: true,
					        showfilterrow: false,
					        showstatusbar: true,
					        statusbarheight: 30,
					        showaggregates: true
						};
		let gridAttribute = {
								gridName : gridName , 
								dataFields : dataFields , 
								columns : columns ,
								gridDesign : gridDesign 
							};
		
		return makeJqxgridObject( gridAttribute );
	};
	
	
	function makeDetailGridModule(){
		let gridName = 'payDetail_jqxgrid';
		let dataFields = [
						    { name: 'employee_number', 	type: 'string' },
						    { name: 'korea_name',	 	type: 'string' },
						    { name: 'retire_date', 		type: 'string' },
						 ];
		let columns = [
					    { datafield: 'employee_number',	text: '사번', width: 70, cellsalign: 'center', align: 'center' },
					    { datafield: 'korea_name', 		text: '이름', width: 120, cellsalign: 'center', align: 'center' },
					    { datafield: 'retire_date', 	text: '퇴사일', width: 85, cellsalign: 'center', align: 'center' },
					  ]; 
		let gridDesign = {
					    	width: '100%',
					    	height: '100%',
					        columnsresize: true,
					        sortable: true,
					        theme: 'office',
					        filterable: true,
					        showfilterrow: false,
					        showstatusbar: true,
					        statusbarheight: 30,
					        showaggregates: true
						};
		let gridAttribute = {
								gridName : gridName , 
								dataFields : dataFields , 
								columns : columns ,
								gridDesign : gridDesign 
							};
		return makeJqxgridObject( gridAttribute );
	};
	
	
	function makeEmployeeGridModule(){
		let gridName = 'employee_jqxgrid';
		let dataFields = [
						    { name: 'item',		 type: 'string' },
						    { name: 'item_name', type: 'string' },
						    { name: 'data',		 type: 'string' },
						 ];
		let columns = [
					    { datafield: 'item_name',	text: '항목', width: 90, cellsalign: 'center', align: 'center' },
					    { datafield: 'data', 		text: '내용', width: 105, cellsalign: 'center', align: 'center' },
					  ]; 
		let gridDesign = {
					    	width: '100%',
					    	height: '100%',
					        columnsresize: true,
					        sortable: true,
					        theme: 'office',
					        filterable: true,
					        showfilterrow: false,
					        showstatusbar: true,
					        statusbarheight: 30,
					        showaggregates: true
						};
		let gridAttribute = {
								gridName : gridName , 
								dataFields : dataFields , 
								columns : columns ,
								gridDesign : gridDesign 
							};
		return makeJqxgridObject( gridAttribute );
	};
	
	
	function makePayGridModule(){
		let gridName = 'pay_jqxgrid';
		let dataFields = [
						    { name: 'FTGDCODE', type: 'string' },
						    { name: 'CODECONT', type: 'string' },
						    { name: 'PROCAMNT', 	type: 'string' },
						 ];
		let columns = [
					    { datafield: 'CODECONT', 	text: '항목', width: 90, cellsalign: 'center', align: 'center' },
					    { datafield: 'PROCAMNT', 	text: '금액', width: 105, cellsalign: 'right', align: 'center' },
					  ]; 
		let gridDesign = {
					    	width: '100%',
					    	height: '100%',
					        columnsresize: true,
					        sortable: true,
					        theme: 'office',
					        filterable: true,
					        showfilterrow: false,
					        showstatusbar: true,
					        statusbarheight: 30,
					        showaggregates: true
						};
		let gridAttribute = {
								gridName : gridName , 
								dataFields : dataFields , 
								columns : columns ,
								gridDesign : gridDesign 
							};
		return makeJqxgridObject( gridAttribute );
	};
	
	
	
	function makeDeductionGridModule(){
		let gridName = 'deduction_jqxgrid';
		let dataFields = [
						    { name: 'FTGDCODE', type: 'string' },
						    { name: 'CODECONT', type: 'string' },
						    { name: 'PROCAMNT', 	type: 'string' },
						 ];
		let columns = [
						    { datafield: 'CODECONT', 	text: '항목', width: 90, cellsalign: 'center', align: 'center' },
						    { datafield: 'PROCAMNT', 	text: '금액', width: 105, cellsalign: 'right', align: 'center' },
					  ]; 
		let gridDesign = {
					    	width: '100%',
					    	height: '100%',
					        columnsresize: true,
					        sortable: true,
					        theme: 'office',
					        filterable: true,
					        showfilterrow: false,
					        showstatusbar: true,
					        statusbarheight: 30,
					        showaggregates: true
						};
		let gridAttribute = {
								gridName : gridName , 
								dataFields : dataFields , 
								columns : columns ,
								gridDesign : gridDesign 
							};
		return makeJqxgridObject( gridAttribute );
	};
	
	
	
	
	
};














    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    