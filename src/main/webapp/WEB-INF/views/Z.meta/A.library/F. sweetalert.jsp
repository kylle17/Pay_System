<%@ page language="java" contentType="text/html; charset=UTF-8"    pageEncoding="UTF-8"%>





<!-- 
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ * Sweet Alert 2 사용을 위한 설정
│     - 최종적으로 meta.jsp에 import된다.       
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<!-- CSS -->
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/sweetalert/sweetalert2.min.css" type="text/css"/>





<!-- JS -->
	<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@7.1.0/dist/promise.min.js"></script>

	<!-- 기존의 회사 프로젝트에서 사용하는 버전 -->
	<!-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>  -->

	<!-- 신규 최신버전 -->
	<script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>





 <style>
 	/**
 		- 스윗얼럿의 크기를 다시 한번 지정해준다. 
 		- bootstrap 라이브러리가 html태그 전체에 크기를 조절하면서 sweet alert의 크기가 작아지는 현상이 발생했다.
 		- 그래서 강제로 스위트얼럿의 크기를 새로 지정해줬다.  
 	**/
 	.swal2-popup{
 		font-size : 17px;
 	}
 </style>
