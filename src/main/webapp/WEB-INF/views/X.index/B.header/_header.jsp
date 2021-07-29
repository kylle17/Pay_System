<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<!-- JSTL 사용을 위한 설정 -->
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!-- context를 변수로 설정 -->
<c:set var="contextPath"  value="${pageContext.request.contextPath}"  />








<!-- 타이틀 로고 & 로그인 메뉴 삽입 -->
<%@include file="/WEB-INF/views/X.index/B.header/A.titleLogo_and_loginMenu.jsp" %>


<!-- 메뉴바 삽입 -->
<%@include file="/WEB-INF/views/X.index/B.header/B.menuBar_and_tabs_boot.jsp" %>






