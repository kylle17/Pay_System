package com.myco.C.payment.A.pay.Controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.myco.C.payment.A.pay.Service.PayService;
import com.myco.C.payment.A.pay.VO.PayVO;

@RestController
@RequestMapping("/A.payment/A.pay")
public class PayController {

	@Autowired
	PayService payService;
	
	
	
	@RequestMapping("")
	public ModelAndView main(){
		ModelAndView mav = new ModelAndView("/payMain");
		return mav;
	}
	
	@RequestMapping(value="/payYearList", method=RequestMethod.GET)
	public @ResponseBody List<String> getPayYearList() throws IOException {
    	return payService.getPayYearList(); 
	}
	
	@RequestMapping(value="/payMonthList", method=RequestMethod.GET)
	public @ResponseBody List<HashMap<String,String>> getPayMonthList( String payYear ) throws IOException {
    	return payService.getPayMonthList(payYear); 
	}
	
	
	@RequestMapping(value="/payDetailList", method=RequestMethod.GET)
	public @ResponseBody List<PayVO> getPayDetailList( String payYearMonth ) throws IOException {
    	return payService.getPayDetailList(payYearMonth); 
	}
	
	
	@RequestMapping(value="/payDetail", method=RequestMethod.GET)
	public @ResponseBody HashMap<String,Object> getPayDetail( @RequestParam HashMap<String,Object> info ) throws IOException {
		System.out.println(info);
		return payService.getPayDetail(info); 
	}
	

	
//	@RequestMapping(value="/payDetail", method=RequestMethod.GET)
//	public HashMap<String, Object> getComCodeMng(@RequestParam("TRKIND") String TRKIND){
//    	return comCodeMngService.selectBaster(TRKIND); 
//	}
//	
//	@RequestMapping(value="/payDetail", method=RequestMethod.POST)
//	public HashMap<String, Object> postComCodeMng(@RequestBody HashMap<String, String> param){
//		return comCodeMngService.insertBaster(param); 
//	}
//	
//	@RequestMapping(value="/payDetail", method=RequestMethod.PUT)
//	public HashMap<String, Object> putComCodeMng(@RequestBody HashMap<String, String> param){
//		return comCodeMngService.updateBaster(param); 
//	}
//	
//	@RequestMapping(value="/payDetail", method=RequestMethod.DELETE)
//	public HashMap<String, Object> deleteComCodeMng(@RequestBody HashMap<String, String> param){
//		return comCodeMngService.deleteBaster(param); 
//	}
	
	
	
	
	


	

	
	



	
};
