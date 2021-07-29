package com.myco.E.payroll.D.payrollResult.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class PayrollResultController {

	
	@RequestMapping(value="/payroll/payrollResultMain")
	public ModelAndView payrollResultMain() {
		ModelAndView mav = new ModelAndView("/payrollResult");
		return mav;
	}
		
}
