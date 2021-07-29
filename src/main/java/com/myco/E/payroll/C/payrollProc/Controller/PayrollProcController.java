package com.myco.E.payroll.C.payrollProc.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class PayrollProcController {

	@RequestMapping(value="/payroll/payrollProcMain")
	public ModelAndView payrollProcMain() {
		ModelAndView mav = new ModelAndView("/payrollProc");
		return mav;
	}
}
