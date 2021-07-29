<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 



<!-- 연말정산 급여 조회 -->




<div id="content">


	<div id="procHeader">
		<form>
			<div id="searchData">
				<c:set var="elemntMap" value="${elementMap }"></c:set>
				<label for="year">년도: </label>
				<select id="year" name="year">
					<c:forEach var="yearList" items="${elementMap.yearList }">
						<option>${yearList }</option>
					</c:forEach>
				</select>
				<label for="department">부서: </label>
				<select id="department">
					<option value="">없음</option>
					<c:forEach var="departmentList" items="${elementMap.departmentList }">
						<option>${departmentList }</option>
					</c:forEach>
				</select>
				<label for="position">직위: </label>
				<select id="position">
					<option value="">없음</option>
					<c:forEach var="positionList" items="${elementMap.positionList }">
						<option>${positionList }</option>
					</c:forEach>
				</select>			
				<label for="emplnumb" >사번: </label>
				<input type="Text" id="emplnumb" />
				<label for="koreName">성명: </label>
				<input id="koreName" type="text"/>		
			</div>
			<div>
				<input id='new' type="button" value="신규 작성"/>
			</div>
			<div id="button">
				<input id="clear" type="button" value="초기화"/>
				<input id="select" type="button" value="조회"/>
				<input id="insert" type="button" value="저장"/>
				<input id="delete" type="button" value="삭제"/>
				<input id="exit" type="button" value="닫기"/>			
			</div>
		</form>
	</div>


	<div id="procContent">
			<table id="JqGrid1"></table>
			<table id="JqGrid2"></table>
			<div id='pager'></div>	
	</div>
	
		
</div>


<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/G.payroll/A.payStatsSearch/payStatsSearch.css"> 
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/G.payroll/A.payStatsSearch/payStatsSearch.js"></script>

