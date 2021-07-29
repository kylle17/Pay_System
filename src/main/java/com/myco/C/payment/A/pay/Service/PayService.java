package com.myco.C.payment.A.pay.Service;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myco.C.payment.A.pay.DAO.PayDAO;
import com.myco.C.payment.A.pay.VO.PayVO;

@Service
public class PayService {
	
	@Autowired
	PayDAO payDAO;
	
	
	public List<String> getPayYearList() throws IOException {
    	return payDAO.getPayYearList(); 
	}
	
	public List<HashMap<String,String>> getPayMonthList( String payYear ) throws IOException {
    	return payDAO.getPayMonthList(payYear); 
	}	
	
	public List<PayVO> getPayDetailList( String payYearMonth ) throws IOException {
    	return payDAO.getPayDetailList(payYearMonth); 
	}
	
	public HashMap<String,Object> getPayDetail( HashMap<String,Object> info ) throws IOException {
		return payDAO.getPayDetail(info); 
	}
	
	
	
	
	

	

};


