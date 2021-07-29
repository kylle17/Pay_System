package com.myco.E.payroll.A.payStatsSearch.Service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myco.E.payroll.A.payStatsSearch.DAO.PayStatsSearchDAO;
import com.myco.E.payroll.A.payStatsSearch.VO.PayStatsSearchDetailVO;
import com.myco.E.payroll.A.payStatsSearch.VO.PayStatsSearchMonthVO;
import com.myco.E.payroll.A.payStatsSearch.VO.PayStatsSearchSelectElementVO;

@Service
public class PayStatsSearchService {
	
	@Autowired
	PayStatsSearchDAO payStatsSearchDAO;
	
	public HashMap<String , List<String>> payStatsSearchSelect () {
		return payStatsSearchDAO.payStatsSearchSelect();
	}
	
	public List<String> payStatsSearchYearSelect(){
		return payStatsSearchDAO.payStatsSearchYearSelect();
	}
	
	public List<PayStatsSearchMonthVO> payStatsSearchMonthSelect(String year){
		return payStatsSearchDAO.payStatsSearchMonthSelect(year);
	}
	
	public List<PayStatsSearchDetailVO> payStatsSearchDetailSelect(PayStatsSearchSelectElementVO selectElement){
		return payStatsSearchDAO.payStatsSearchDetailSelect(selectElement);
	}
	
	public void payStatsSearchDetailInsert(List<PayStatsSearchDetailVO> detailList){
		payStatsSearchDAO.payStatsSearchDetailInsert(detailList);
	}
}
