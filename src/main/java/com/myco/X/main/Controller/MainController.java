package com.myco.X.main.Controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.myco.X.main.Service.MainService;
import com.myco.X.main.VO.ProgramInfoVO;


@Controller
public class MainController {
	
	@Autowired
	private MainService mainService;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView home(HttpServletRequest request) {
		ModelAndView mav = new ModelAndView("/index");	
		List<ProgramInfoVO> menuList = mainService.selectMenuList();
		mav.addObject("menuList",menuList);	
		return mav;
	}
	
	
}
