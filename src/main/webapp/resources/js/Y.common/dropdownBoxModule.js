




function dropdownBoxModule( procName , $containerTag , URL ){
	
	// 모든 select태그를 조회한다. 
	$dropdownBoxTag = $containerTag.querySelectorAll('select') ;

	
	let $resetTarget = [];
	let $selectCondition = [];
	let $detailTag = [];
	let $saveTarget = [];
	let $deleteCondition = [];

	fillTag(URL);
	sortOutTag();
	
	
	

	
	
	async function fillTag( URL ){
		
		let url = URL+'/payYearList';
		

		let resultData = await myAjax('get' , url , null );
		
		$dropdownBoxTag.forEach( function( select , index , arr ){
			select.options.length = 0; 
//			select.innerHTML("<option value =''selected></option>");
			var itemList = resultData;
			itemList.forEach( function( item ){
				let option = document.createElement('option');
				option.value = item;
				option.innerText = item;
				select.append(option);
			} );
		} );
	};
	
	
	function sortOutTag(){
		$dropdownBoxTag.forEach(function( item , index){
			if( item.className.indexOf('resetTarget') !== -1 )	$resetTarget.push(item);
			if( item.className.indexOf('selectCondition') !== -1 )	$selectCondition.push(item);
			if( item.className.indexOf('detailTag') !== -1 )  $detailTag.push(item);
			if( item.className.indexOf('saveTarget') !== -1 )  $saveTarget.push(item);
			if( item.className.indexOf('deleteCondition') !== -1 )  $deleteCondition.push(item);
		});
	};
	
	
	
	let goReset  = function(){
		// resetTarget배열에 담긴 tag를 돌면서 값을 초기화 한다.
		$resetTarget.forEach(function(item, index, arr) {
			item.value = '';
		});			
	};
	
	
	let goSelect = function(){
		let obj = {};
		// selectCondition배열에 담긴 tag들을 돌면서 값을 가져와 obj객체에 담는다.
		$selectCondition.forEach(function(item, index, arr) {
			// select태그에서 선택된 option의 index값을 가져와서 최종적으로 option의 값을 가져온다. 
			obj[item.name] = item.options[item.selectedIndex].value;
		});
		return obj;		
	};
	
	
	let selectDetail = function( rowdata ){
		// detailTag배열에 담긴 tag들을 돌면서 그리드에서 전달받은 값을 넣는다.
		$detailTag.forEach(function( item , index){
			$('#'+item.id).val(rowdata[item.id]==undefined?"":rowdata[item.id]);
		});
	};
	
	
	let goSave = function(){
		
		
	};
	
	
	let goDelete = function(){
	
		
	};
	
	
	
	
	return {
		goReset : goReset ,
		goSelect : goSelect ,
		selectDetail : selectDetail ,
		goSave : goSave , 
		goDelete : goDelete
	};
	
	
};




