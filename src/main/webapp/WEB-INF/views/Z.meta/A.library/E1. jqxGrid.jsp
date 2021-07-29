<%@ page language="java" contentType="text/html; charset=UTF-8"    pageEncoding="UTF-8"%>

    
    
<!-- 
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ * jqxGrid 사용을 위한 설정
│     - 라이브러리를 추가하는 설정이다.      
│     - 최종적으로 meta.jsp에 import된다.       
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘ -->
<!-- jqxGrid 사용을 위한 jqwidgets추가 (CSS) -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/jqwidgets/styles/jqx.base.css? " type="text/css"/>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/jqwidgets/styles/jqx.light.css " type="text/css"/>
<!-- jqxGrid 사용을 위한 jqwidgets추가 (JavaScript) -->
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxcore.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxdata.js"></script> 
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxbuttons.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxscrollbar.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxlistbox.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxdropdownlist.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxmenu.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxgrid.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxgrid.pager.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxgrid.sort.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxgrid.filter.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxgrid.storage.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxgrid.columnsresize.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxgrid.columnsreorder.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxgrid.selection.js"></script> 
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxpanel.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxcheckbox.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxgrid.edit.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxcheckbox.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxnumberinput.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxdate.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxcalendar.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxdatetimeinput.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxgrid.aggregates.js"></script> 
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxwindow.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxtreegrid.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxdata.export.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxgrid.export.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxcombobox.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/jqwidgets/jqxsplitter.js"></script>    
    
    
    