<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 

<!-- context를 변수로 설정 -->
<c:set var="contextPath"  value="${pageContext.request.contextPath}"  />



<!-- 
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ * bootstrap menu																										 │
│     - 태그구조와 class명을 bootstrap menu기준에 맞게 작성하면 bootstrap이 자동으로 적용된다.											 │
│     																													 │	
│ * bootstrap multi dropdown																							 │	
│     - 메뉴 하위에 메뉴가 있고 그 하위에 또 메뉴가 있는 구조를 생성하게 해준다. 																 │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘ 
-->

<%@ page
		import="java.util.*" 
		import="java.io.*"
		import="com.myco.X.main.VO.*"
 %>
<%
	List<ProgramInfoVO> menuList = (List<ProgramInfoVO>)request.getAttribute("menuList");
%>
<%!
	public String makeMenu(List<ProgramInfoVO> menuList){
		String result = "";
		for( ProgramInfoVO programInfoVO : menuList ){
			result += ( programInfoVO.isMainCategory() ) ? mainCategory(programInfoVO) 
					  :  ( programInfoVO.isMiddleCategory() ) ? middleCategory(programInfoVO) 
					  :  ( programInfoVO.isExecuteCategory() ) ? executeCategory(programInfoVO) : "" ;
		};
		return result;
	};
	
	
	public String mainCategory( ProgramInfoVO programInfoVO ){
		return	  "	<li class='dropdown'>"	
				+ "		<a id='navbarDropdown' role='button' data-toggle='dropdown' class='dropdown-toggle' data-target='#' href='/page.html'>"	
				+ 			programInfoVO.getProgramName()	
				+ "			<span class='caret'></span>"	
				+ "		</a>"	
				+ "		<ul class='dropdown-menu multi-level' role='menu' aria-labelledby='dropdownMenu'>"	
				+ 			makeMenu(programInfoVO.getChildMenu())
				+ "		</ul>"	
				+ "	</li>";
	};
	
	
	public String middleCategory( ProgramInfoVO programInfoVO ){
		return	  "	<li class='dropdown-submenu'>"
				+ "		<a tabindex='-1' href='#'>" + programInfoVO.getProgramName() + "</a>"
				+ "		<ul class='dropdown-menu'>"
				+ 			makeMenu(programInfoVO.getChildMenu())
				+ "		</ul>"
				+ "	</li>";
	};
	
	
	public String executeCategory( ProgramInfoVO programInfoVO ){
		return 	 "	<li>"
				+"		<a href='#' "
				+" 		   class='dropdown-item' " 
				+"		   name='" + programInfoVO.getProgramCode() +" ' "
				+" 		   rel='/PaySystem"+programInfoVO.getProgramURL() +"'>" 
				+				programInfoVO.getProgramName() 
				+"		</a>"
				+"	</li>";
	};
%>



<nav class="navbar navbar-default">
	<div class="container-fluid">
		<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" style="float: left;">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
	</div>
	<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		<ul class="nav navbar-nav"> 
			<%= makeMenu(menuList) %>
		</ul>
	</div>
</nav>









