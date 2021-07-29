package com.myco.E.payroll.A.payStatsSearch.Controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.myco.E.payroll.A.payStatsSearch.Service.PayStatsSearchService;
import com.myco.E.payroll.A.payStatsSearch.VO.PayStatsSearchDetailVO;
import com.myco.E.payroll.A.payStatsSearch.VO.PayStatsSearchMonthVO;
import com.myco.E.payroll.A.payStatsSearch.VO.PayStatsSearchSelectElementVO;

@RestController
public class PayStatsSearchController {
	
	@Autowired
	PayStatsSearchService payStatsSearchService;

	@RequestMapping(value="/payroll/payStatsSearchMain" , method= {RequestMethod.GET , RequestMethod.POST })
	public ModelAndView payStatsSearchMain( HttpServletResponse response ) throws IOException {
		System.out.println("연말정산 급여 조회 실행");
		
    	HashMap<String , List<String>> elementMap = payStatsSearchService.payStatsSearchSelect();
    	if (elementMap == null) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            return null;
        }
		
		ModelAndView mav = new ModelAndView("/payStatsSearch");
		mav.addObject( "elementMap" , elementMap);
		return mav;
	}
	
	
//    @GetMapping("/payroll/payStatsSearchSelect")
//    @PostMapping("/payroll/payStatsSearchSelect")
    @RequestMapping(value="/payroll/payStatsSearchSelect" , method= {RequestMethod.GET , RequestMethod.POST })
    public ResponseEntity test( HttpServletResponse response) throws IOException {
    	ResponseEntity resEntity = null;
    	HttpHeaders responseHeader = new HttpHeaders();
    	responseHeader.add("Content-Type", "application/json; charset=UTF-8");
    	HashMap<String , List<String>> elementMap = payStatsSearchService.payStatsSearchSelect();
    	if (elementMap == null) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            return null;
        }
    	
    	System.out.println(elementMap.get("yearList").get(0));
    	System.out.println(elementMap.get("yearList").get(1));
    	System.out.println(elementMap.get("yearList").get(2));
    	
    	
//    	System.out.println(payStatsSearchVO.getEMPLNUMB());
//    	System.out.println(payStatsSearchVO.getKORENAME());
//    	System.out.println(payStatsSearchVO.getPAYMONTH());
    	String test = "<div><input tyep='text' value='태그 전달 완료'/></div>";
    	resEntity = new ResponseEntity( elementMap , responseHeader , HttpStatus.CREATED);
    	return resEntity;
    }
    
    
    @RequestMapping(value="/payroll/payStatsSearchYearSelect" , method= {RequestMethod.GET , RequestMethod.POST })
    public ResponseEntity yearSelect( HttpServletResponse response) throws IOException {
    	
    	List<String> payStatsSearchYearList 
    		= payStatsSearchService.payStatsSearchYearSelect();
    	
    	HttpHeaders responseHeader = new HttpHeaders();
    	responseHeader.add("Content-Type", "application/json; charset=UTF-8");
    	
    	ResponseEntity resEntity = null;
    	resEntity = new ResponseEntity( payStatsSearchYearList , responseHeader, HttpStatus.CREATED );
    	return resEntity;
    }
    
    
    @RequestMapping(value="/payroll/payStatsSearchMonthSelect" , method= {RequestMethod.GET , RequestMethod.POST })
    public ResponseEntity monthSelect( @RequestBody String year , HttpServletResponse response) throws IOException {
    	
    	List<PayStatsSearchMonthVO> payStatsSearchMonthList 
    		= payStatsSearchService.payStatsSearchMonthSelect(year);
    	
    	HttpHeaders responseHeader = new HttpHeaders();
    	responseHeader.add("Content-Type", "application/json; charset=UTF-8");
    	
    	ResponseEntity resEntity = null;
    	resEntity = new ResponseEntity( payStatsSearchMonthList , responseHeader, HttpStatus.CREATED );
    	return resEntity;
    }
    
    
    @RequestMapping(value="/payroll/payStatsSearchDetailSelect" , method= {RequestMethod.GET , RequestMethod.POST})
    public ResponseEntity detailSelect(@RequestBody PayStatsSearchSelectElementVO selectElement) throws Exception {
    	
    	List<PayStatsSearchDetailVO> payStatsSearchDetailList
    		= payStatsSearchService.payStatsSearchDetailSelect(selectElement);
    	
    	System.out.println(selectElement.getPayMonth());
    	
    	HttpHeaders responseHeader = new HttpHeaders();
    	responseHeader.add("Content-Type" , "application/json; charset=UTF-8" );
    	
    	ResponseEntity resEntity = new ResponseEntity(payStatsSearchDetailList , responseHeader, HttpStatus.CREATED );
    	return resEntity;
    }
    
    
    @RequestMapping(value="/payroll/payStatsSearchDetailInsert" , method= {RequestMethod.GET , RequestMethod.POST})
    public ResponseEntity detailInsert(@RequestBody List<PayStatsSearchDetailVO> detailList) throws Exception {
    	
    	//저장하기.
    	payStatsSearchService.payStatsSearchDetailInsert(detailList);
    	
    	HttpHeaders responseHeader = new HttpHeaders();
    	responseHeader.add("Content-Type" , "application/json; charset=UTF-8" );
    	
    	ResponseEntity resEntity = new ResponseEntity("성공" , responseHeader, HttpStatus.CREATED );
    	return resEntity;
    }
	
}
