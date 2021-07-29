package com.myco.C.payment.A.pay.Service;

import org.springframework.beans.factory.annotation.Autowired;

import com.myco.C.payment.A.pay.VO.PayCalculateVO;

public class Pay_Calculate {
	
	@Autowired
	PayService payService;
	
	private PayCalculateVO payCalculateVO = new PayCalculateVO();
	
	

	public Pay_Calculate() {
		
	
	}

	
	
	
};
