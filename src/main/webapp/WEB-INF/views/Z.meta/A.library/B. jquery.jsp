<%@ page language="java" contentType="text/html; charset=UTF-8"    pageEncoding="UTF-8"%>



<!-- 
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ * jQuery 사용을 위한 설정
│     - jQuery사용을 위해서 라이브러리를 추가한다.        
│     - 최종적으로 meta.jsp에 import된다.       
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘ -->

	<!-- 방식1.  CDN호스트 방식 , 구글의 CDN호스트를 사용한다.  -->
		 <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> --> 
		 
	<!-- 방식2.  CDN호스트방식 , jquery홈페이지의 CDN호스트를 사용한다.  -->	 
		 <!-- <script src="//code.jquery.com/jquery-1.10.2.js"></script> -->
		 
	<!-- 방식3.  라이브러리 직접추가하는 방식 -->
	     <script src="${pageContext.request.contextPath}/resources/jquery-1.11.2.min.js"></script>
	     
	     
	     
	     

<!-- 
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ * 에러처리를 위한 부분 
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<!-- 
	 * msie 에러 처리위한 코드
         - Cannot read property 'msie' of undefined 에러 나올때
         - jQuery import 바로아래에 넣어 주면 됩니다.
 -->
<script>
	jQuery.browser = {};
	(function () {
	    jQuery.browser.msie = false;
	    jQuery.browser.version = 0;
	    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
	        jQuery.browser.msie = true;
	        jQuery.browser.version = RegExp.$1;
	    }
	})();
</script>





     