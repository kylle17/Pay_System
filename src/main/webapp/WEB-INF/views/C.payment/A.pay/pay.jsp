<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 



<!-- 급여 처리 -->



<div id="C_payment_A_pay" onmousemove='C_payment_A_pay( "C_payment_A_pay" );' >

	<div style='height:10px;'></div>
	<div>급여</div>
	<div style='height:10px;'></div>





	<div style="display:flex">
	
		<div style="display:flex" >
		
			<div style=" width:395px; ">
				<label class='smallTitle' style=" width:100%;">급여 목록</label>
				<div>
					<div class='condition' style="width:50%; ">
						<label>년도</label>
						<select id='payYearList' class='select' >
					</select>
					</div>
					<div style="width:50%">
					</div>

				</div>
				<div id='jqxWidget' style="flex: 1; border: 1px solid #64707F; height:500px;">
			  		<div id="payMonth_jqxgrid"></div>
				</div>
			</div>
			
			<div style="width:295px; ">
				<label class='smallTitle' style=" width:100%;">직원 목록</label>
				<div>
					<div  class='condition' style="width:50%; ">
						<label>사번</label>
						<input type="text" />
					</div>
					<div style="width:50%">
					</div>
				</div>
				<div id='jqxWidget' style="flex: 1; border: 1px solid #64707F; height:500px;">
					<div id="payDetail_jqxgrid"></div>
				</div>	
			</div>
	
			<div style=" width:50px; "></div>

			<div style=" width:200px; ">
				<label class='smallTitle' style=" width:100%;">직원 정보</label>
				<div id='jqxWidget' style="flex: 1; border: 1px solid #64707F; height:500px;">
			  		<div id="employee_jqxgrid"></div>
				</div>
			</div>
			
			<div style=" width:215px; ">
				<label class='smallTitle' style=" width:100%;">지급</label>
				<div id='jqxWidget' style="flex: 1; border: 1px solid #64707F; height:500px;">
			  		<div id="pay_jqxgrid"></div>
				</div>
			</div>
			
			<div style="width:215px; ">
				<label class='smallTitle'  style=" width:100%;">공제</label>
				<div id='jqxWidget' style="flex: 1; border: 1px solid #64707F; height:500px;">
					<div id="deduction_jqxgrid"></div>
				</div>	
			</div>
		
		</div>
	
	</div>




</div>







