package com.myco.E.payroll.A.payStatsSearch.DAO;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.myco.E.payroll.A.payStatsSearch.VO.PayStatsSearchDetailVO;
import com.myco.E.payroll.A.payStatsSearch.VO.PayStatsSearchMonthVO;
import com.myco.E.payroll.A.payStatsSearch.VO.PayStatsSearchSelectElementVO;

@Repository
public class PayStatsSearchDAO {

	@Autowired
	SqlSession sqlSession;
	
	public HashMap<String , List<String>> payStatsSearchSelect(){
		HashMap<String , List<String>> elementMap = new HashMap<String , List<String>>();
		List<String> yearList = sqlSession.selectList("mapper.payStatsSearch.selectYearList");
		elementMap.put("yearList" , yearList);
		List<String> departmentList = sqlSession.selectList("mapper.payStatsSearch.selectDepartmentList");
		elementMap.put("departmentList" , departmentList);
		List<String> positionList = sqlSession.selectList("mapper.payStatsSearch.selectPositionList");
		elementMap.put("positionList" , positionList);
		
		return elementMap;
	}
	
	public List<String> payStatsSearchYearSelect(){
		return sqlSession.selectList("mapper.payStatsSearch.selectYearList");
	}
	
	public List<PayStatsSearchMonthVO> payStatsSearchMonthSelect(String year){
		return sqlSession.selectList("mapper.payStatsSearch.selectMonthList" , year);
	}
	
	public List<PayStatsSearchDetailVO> payStatsSearchDetailSelect(PayStatsSearchSelectElementVO selectElement){
		return sqlSession.selectList("mapper.payStatsSearch.selectDetailList" , selectElement);
	}
	
	public void payStatsSearchDetailInsert(List<PayStatsSearchDetailVO> detailList){
		sqlSession.selectList("mapper.payStatsSearch.insertDetailList" , detailList);
	}
	
}
