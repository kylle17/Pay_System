package com.myco.C.payment.B.bonus.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class BonusController {

	@RequestMapping(value="/payment/bonusProc")
	public ModelAndView bonusProc() {
		ModelAndView mav = new ModelAndView("/payment/bonus");
		return mav;
	}
	
}
