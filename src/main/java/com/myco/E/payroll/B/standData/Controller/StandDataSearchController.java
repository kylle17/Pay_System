package com.myco.E.payroll.B.standData.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class StandDataSearchController {

	@RequestMapping(value="/payroll/StandDataSearchMain")
	public ModelAndView StandDataSearchMain() {
		ModelAndView mav = new ModelAndView("/StandDataSearch");
		return mav;
	}	
	
}
