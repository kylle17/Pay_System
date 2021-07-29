/**
 * 연말정산 급여 조회
 */

$(document).ready( function(){
	
	// 년 select목록 채우기
	$.get("/PaySystem/payroll/payStatsSearchYearSelect", function(data, status){
	    $.each(data, function(i, field){
	        $("#year").append( "<option value="+ field +">" + field +"</option>" );
	      });
	});

	
    // 급여자료 월별목록 그리드
    $("#JqGrid1").jqGrid({
//    	// 요청경로
//    	url:'/PaySystem/payroll/payStatsSearchMonthSelect',
//    	//전송방식 GET,POST ?? 안되는것 같음 
//    	type:'post',
//    	// 서버에 전달할 값의 자료형
//    	contentType : 'text/html',
//    	// 서버에 전달할 값
//    	postData : year = $('#year option:selected').val(),
        //응답값
        datatype: "local",
        // 그리드 넓이
        width: 300,
        //그리드 높이
        height: 400,
        //한페이지에 표시할 행 갯수.
       	rowNum:12,
        //컬럼명들
        colNames:['월구분' , '급여 총액' , '소득세'],
        //컬럼모델
        colModel:[
            {name:'payMonth', width:70 , align:'center'}, 
            {name:'payTotal', width:100 , align:'right'
            		  // 천단위 끊기
            		, formatter:'integer', formatoptions: { defaultValue: '', thousandsSeparator: ',' } },
            {name:'incomeTaxTotal', width:100 , align:'right' 
            		  // 천단위 끊기
            		, formatter:'integer', formatoptions: { defaultValue: '', thousandsSeparator: ',' } },
        ],
        //그리드타이틀
        caption: "월목록",
        //정렬할 column
        sortname: "korename",
        sortorder: "desc",

    	// cell click 이벤트 등록
        onCellSelect : function( rowid , index , contents , event ){
//            var cm = $(this).jqGrid('getGridParam', 'colModel');
//            console.log(cm);
//            if (cm[index].name=='payMonth'){
//            	alert($(this).jqGrid('getCell', rowid, 'payMonth')); 
//            }        	
        	
        	var payMonth = $(this).jqGrid('getCell', rowid, 'payMonth');
        	selectDetailGrid(payMonth);
        } 
    });
    
    
    // 급여자료 직원별 상세 그리드
    $("#JqGrid2").jqGrid({
        //응답값
        datatype: "local", 
        // 그리드 넓이
        width: 1500,
        //그리드 높이
        height: 600,
        //텍스트 정렬
        align: "center",
       	//page생성
       	pager: '#pager',
       	// 가로 스크롤 생성 (width를 자동설정 해주는 기능을  false시키면 스크롤이 생긴다.)
        shrinkToFit:false,  
        //컬럼명들
        colNames:['해당년월','사번','성명', '급여 총액' , '소득세'  ],
        //컬럼모델
        colModel:[
            {name:'payMonth', width:100 , align:'center' },        	
            {name:'emplnumb', width:100 , align:'center' },
            {name:'koreName', width:100 , align:'center' }, 
            {name:'pay', width:100 , align:'right' 
      		  // 천단위 끊기
        		 , formatter:'integer', formatoptions: { defaultValue: '', thousandsSeparator: ',' } 
            }, 
            {name:'incomeTax', width:100 , align:'right' 
      		  // 천단위 끊기
        		, formatter:'integer', formatoptions: { defaultValue: '', thousandsSeparator: ',' } 
            }, 
        ],
//        //체크박스 활성화
//        viewrecords: true,
        // 다중선택 
    	multiselect: "1",
        //그리드타이틀
        caption: "급여 상세 정보",
    });

	
	// 초기화
	$('#clear').on('click' , function(){
		$("#JqGrid1").clearGridData();		
		$("#JqGrid2").clearGridData();		
	});	
	
	
	// 조회(월별목록 , 화면 생성시 한번 실행)
	selectMonthGrid();
	
	// 조회 (월별 목록 , 년도 변할 때 마다 실행)
	$('#year').on('change', function(){	
		selectMonthGrid();
		}			
	);
	
	// 함수 - 조회 (월별목록)
	function selectMonthGrid() {
		$("#JqGrid1").clearGridData();
		$("#JqGrid2").clearGridData();
    	var reveiveData = null;
    	$.ajax({
    		type : "post",										// 요청방식.
    		url : '/PaySystem/payroll/payStatsSearchMonthSelect',	// URL.
    		contentType: "application/json",					// 보내는 데이터 자료형
    		data : $('#year option:selected').val(),							// 보내는 데이터.
    		async : true,										// 비동기 방식 설정.
    		dataType : "json",									// 반환받는 데이터의 자료형. 
    		success : function(data , status ){

    			// 스크립트 변수에 담겨있는 json데이터의 길이만큼
    	        for(var i=0 ; i<=data.length ; i++){
    	                //jqgrid의 addRowData를 이용하여 각각의 row에 gridData변수의 데이터를 add한다
    	                $("#JqGrid1").jqGrid('addRowData',i+1,data[i]);
    	        }
    	        $("#JqGrid1").trigger('reloadGrid');
    		}
    	});		
	}
	
	
	// 조회 (사원별 상세내용)
	$('#select').on('click' , function(){	
		var rowid, data;	    
	    rowid  = $('#JqGrid1').jqGrid('getGridParam', 'selrow' ); // 선택한 열의 아이디값
	    payMonth = $('#JqGrid1').jqGrid('getRowData', rowid).payMonth; // 선택한 열중에서 grid내의 정보를 가져온다.
	    selectDetailGrid(payMonth);		
	});	
	
	// 조회 (사원별 상세내용)
	$('#emplnumb , #koreName').keydown(function(event) {
		  if (event.keyCode == '13') {
				var rowid, data;	    
			    rowid  = $('#JqGrid1').jqGrid('getGridParam', 'selrow' ); // 선택한 열의 아이디값
			    payMonth = $('#JqGrid1').jqGrid('getRowData', rowid).payMonth; // 선택한 열중에서 grid내의 정보를 가져온다.
			    selectDetailGrid(payMonth);	
		  }
	});
	
	
	// 함수 - 조회 (사원별 상세내용)
	function selectDetailGrid(payMonth){
        var sendData = {}; ;
        sendData.payMonth = payMonth;
        sendData.department = $('#department option:selected').val();	
        sendData.position = $('#position option:selected').val();	
        sendData.emplnumb = $('#emplnumb').val();	
        sendData.koreName = $('#koreName').val();	
        var sendJSONData = JSON.stringify(sendData);            

		$("#JqGrid2").clearGridData();
    	$.ajax({
    		type : "post",										    	  // 요청방식.
    		url : '/PaySystem/payroll/payStatsSearchDetailSelect',	      // URL.
    		contentType: "application/json",					    	  // 보내는 데이터 자료형
    		data : sendJSONData,									      // 보내는 데이터.
    		async : true,										  	      // 비동기 방식 설정.
    		dataType : "json",									          // 반환받는 데이터의 자료형. 
    		success : function(data , status ){

    			// 스크립트 변수에 담겨있는 json데이터의 길이만큼
    	        for(var i=0 ; i<=data.length ; i++){
    	                //jqgrid의 addRowData를 이용하여 각각의 row에 gridData변수의 데이터를 add한다
    	                $("#JqGrid2").jqGrid('addRowData',i+1,data[i]);
    	        }
    	        $("#JqGrid2").trigger('reloadGrid');
    		}
    	});
	}
	
	
	


	
	
	// 조회 (사원별 상세내용)
//	$('#select').on('click', function(){	
//			$("#JqGrid2").clearGridData();
//	    	var reveiveData = null;
//	    	$.ajax({
//	    		type : "post",										// 요청방식.
//	    		url : '/PaySystem/payroll/payStatsSearchSelect',	// URL.
//	    		contentType: "application/json",					// 보내는 데이터 자료형
//	//    		data :  PayStatsSearchVO ,							// 보내는 데이터.
//	    		async : true,										// 비동기 방식 설정.
//	    		dataType : "json",									// 반환받는 데이터의 자료형. 
//	    		success : function(data , status ){
//	
//	    			// 스크립트 변수에 담겨있는 json데이터의 길이만큼
//	    	        for(var i=0 ; i<=data.length ; i++){
//	    	                //jqgrid의 addRowData를 이용하여 각각의 row에 gridData변수의 데이터를 add한다
//	    	                $("#JqGrid2").jqGrid('addRowData',i+1,data[i]);
//	    	        }
//	    	        $("#JqGrid2").trigger('reloadGrid');
//	    	        
//	    		}
//	    	})
//		}			
//	);	
	
	
	
	// 저장
	$('#insert').on('click' , function(){
		// 그리드의 모든 데이터 가져오기
		var fullData = jQuery("#JqGrid2").jqGrid('getRowData');
		console.log(fullData);
    	$.ajax({
    		type : "post",										    	  // 요청방식.
    		url : '/PaySystem/payroll/payStatsSearchDetailInsert',	      // URL.
    		contentType: "application/json",					    	  // 보내는 데이터 자료형
    		data : fullData,									      // 보내는 데이터.
    		async : true,										  	      // 비동기 방식 설정.
    		dataType : "json",									          // 반환받는 데이터의 자료형. 
    		success : function(data , status ){
    			
    		}
    	});

	})
	
	
	// 삭제
	
	
 
        
         
	


   

    
    
    
	



});



