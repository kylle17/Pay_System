



async function myAjax( type , url , jsonData ){
	let result;
	await $.ajax({
		type : type ,
		url : url,						
		data : jsonData ,								
		dataType : "json",
		contentType: "application/json",		
		success : function ( data ){
			result = data;
		}
    });	
	return result;
};

