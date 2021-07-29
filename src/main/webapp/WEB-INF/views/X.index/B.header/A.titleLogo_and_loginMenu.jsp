<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<!-- context를 변수로 설정 -->
<c:set var="contextPath"  value="${pageContext.request.contextPath}"  />


<div id="leftHeader">
	<!-- 상단 로고 -->
    <div class="titleName"  style="position:relative; height:70px;">
      <div style="position:absolute; top:6px; left:20px;">
		<a href="index">
		<!-- 타이틀로고 임시로 제거 -->
		<!--  <img src="${pageContext.request.contextPath}/resources/img/index/title_logo.png" /> -->
		</a>
      </div>
    </div>
</div>


<div id="rightHeader">
	<!-- 로그인 메뉴 -->
	<div id="loginHeader">
			<ul>
			   <c:choose>
				     <c:when test="${isLogOn==true and not empty memberInfo }">
					   <li><a href="${contextPath}/member/logout.do">로그아웃</a></li>
					   <li><a href="${contextPath}/mypage/myPageMain.do">마이페이지</a></li>
					   <li><a href="${contextPath}/cart/myCartList.do">장바구니</a></li>
					   <li><a href="#">주문배송</a></li>
					 </c:when>
					 <c:otherwise>
					   <li><a href="${contextPath}/member/loginForm.do">로그인</a></li>
					   <li><a href="${contextPath}/member/memberForm.do">회원가입</a></li> 
					 </c:otherwise>
				</c:choose>
				<li><a href="#">고객센터</a></li>
	     		<c:if test="${isLogOn==true and memberInfo.member_id =='admin' }">  
		   	   		<li class="no_line"><a href="${contextPath}/admin/goods/adminGoodsMain.do">관리자</a></li>
		    	</c:if>			  
			</ul>
</div>








