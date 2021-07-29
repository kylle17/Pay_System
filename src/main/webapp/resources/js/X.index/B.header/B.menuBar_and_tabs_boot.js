/**
 * header file 
 **/


$(document).ready( function(){
	tabControl();	
	whenTabClose();
	
});


function tabControl(){
	const menuItemList = $(".dropdown-item");
	menuItemList.click(function() {
		const clickedMenuTag = $(this); 
		const currentTabList = $('#jqxtabs').find('li');
		let matchTabIndex = findMatchTabIndex( clickedMenuTag , currentTabList ); 
		( matchTabIndex > -1 ) ? goTab(matchTabIndex) : addTab(clickedMenuTag) ;
	});
};


function whenTabClose(){
	$('#jqxtabs').on('removed', function (event) {
//		console.log('탭이 닫힐 때 실행;');
//	    console.log(event);
//	    console.log(event.args.title);
	});	
};


function findMatchTabIndex( clickedMenuTag , currentTabList ){
	var result = -1;
	currentTabList.each( function( index ){
		clickedMenuTagName = $(clickedMenuTag).text();
		currentTabName = $(this).text();
		if( currentTabName == '' ) return;
		if( clickedMenuTagName == currentTabName ){
			result = index ;
			return;
		};			
	} );
	return result;
};


function goTab(matchTabIndex){	
	$('#jqxtabs').jqxTabs('select', matchTabIndex);
};

		
function addTab( clickedMenuTag ) {
	const newTabName = $(clickedMenuTag).text();
	const newTabId = $(clickedMenuTag).attr("id");
	const newTabContent = makeNewTabContent(clickedMenuTag);		
	makeTabFrame();
	insertTabContent( newTabName , newTabContent );
	showTab();
};


function makeNewTabContent( clickedMenuTag ){
	let result ;
	const newTabURL = clickedMenuTag.attr("rel");
	$.ajax({
        type : "GET",
        url : newTabURL,
        async:false,
        dataType : "text",
        success : function(data){
        	result = "<div style=' width:1300px; height:600px;'>"+data+"</div>";
        }
    });
    return result;
}


function makeTabFrame(){
	$('#jqxtabs').jqxTabs({ 
		height: "100%", 
		width: "99.9%",  
		position: 'top',
		reorder: false,
		showCloseButtons: true, 
		closeButtonSize:20
	});
};


function insertTabContent( newTabName , newTabContent ){
	$('#jqxtabs').jqxTabs('addLast', newTabName , newTabContent);
};


function showTab(){
	$('#jqxtabs').show();
};



