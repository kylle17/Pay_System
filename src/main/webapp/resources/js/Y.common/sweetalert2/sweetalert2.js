
/** 
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ * sweet alert 함수
│     - 여러가지 창을 띄울 때 사용한다.       
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘ 
**/


//────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
// * 기본 사용법 
function test1_swal(){

		// sweet alert 창 설정. 
		Swal.fire({ 
			type:'success' 	 ,	// alert창의 정해진 형태중 하나를 선택한다.
			title:"여기는 제목" ,  // 제목 입력한다.
			html: "<div>안녕하세요~~!!</div>" , // 태그 생성.  
			confirmButtonText: '수영s 확인', // 확인 버튼의 이름 설정.
			showCancelButton: true,   // 취소 버튼의 사용여부 설정. 
			cancelButtonText:  '수영s 취소', // 취소 버튼의 이름 설정.
		});	
}
function test3_swal(){
	// sweet alert 창 연속해서 실행하기. 
	Swal.mixin({
		//첫번채 창
		type:'success' 	 ,	
		title:"첫번째 창입니다." ,  
	}).queue([
		{
			//두번째 창
			type:'success' 	 ,	
			title:"세번째 창입니다." ,  
		},
		{
			//세번재 창
			type:'success' 	 ,	
			title:"두번째 창입니다." ,  
		}
	]);
}
//────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────









// 성공
function ok_swal(resmsg){
	Swal.fire({
		title: resmsg,
		type: 'success'
	});
}



// 확인
function con_swal(title,text){
	var result="";
	Swal.fire({
		title: title,
		html: text,
		type: 'info',
		showCancelButton: true,
		confirmButtonText: '확인',
		cancelButtonText:  '취소',
	}).then(function (r) {
		result = r.value;
	});
	return result;
}



// 경고
function warning_swal(text,focus){
	Swal.fire({
		allowEscapeKey:false,
		title: '문제가 발생하였습니다.',
		html: text,
		type: 'warning',
		allowEnterKey: false,
		onClose : function() {
			if(focus != undefined){
				setTimeout(function() {
					$(focus).focus();
				}, 300);
			}
		}
	});
}



// 에러
function error_swal(err){
	if(err == undefined) err = '';
	Swal.fire({
		allowEnterKey: false,
		title: '에러가 발생하였습니다!',
		html: err.toString(),
		type: 'error'
	});
}



// 대기
function wait_swal(fn, data, gubun1, gubun2){
	Swal.fire({
		allowEnterKey: false,
		allowOutsideClick: false,
		allowEscapeKey: false,
		title: '처리중입니다!',
		html: '잠시만 기다려주십시오.',
		type: 'info',
		onBeforeOpen: function () {
			Swal.showLoading();
		},
		onOpen: function () {
			if(fn != undefined)
			setTimeout(function() {fn(data, gubun1, gubun2)},100);
		}
	});
}

