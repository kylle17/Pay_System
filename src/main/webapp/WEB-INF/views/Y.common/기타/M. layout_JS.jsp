<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>

    
    
<!-- 
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ * Layout JavaScript
│     - Layout(header,nav,index,aside,footer)의 JavaScript파일을 Link한다.    
│     - 최종적으로 meta.jsp파일에 import된다.     
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘ -->

<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/B.index/A.layout/_layout.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/B.index/B.header/_header.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/B.index/C.nav/_nav.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/B.index/E.aside/_aside.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/B.index/F.footer/_footer.js"></script>