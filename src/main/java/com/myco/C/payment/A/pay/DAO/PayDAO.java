package com.myco.C.payment.A.pay.DAO;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.TreeMap;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.myco.C.payment.A.pay.VO.PayVO;

@Repository
public class PayDAO {
	
	@Autowired
	SqlSession sqlSession;
	
	
	public List<String> getPayYearList() throws IOException {
    	return sqlSession.selectList("mapper.pay.getPayYearList");
	}
	
	public List<HashMap<String,String>> getPayMonthList( String payYear ) throws IOException {
    	return sqlSession.selectList("mapper.pay.getPayMonthList" , payYear );
	}	
	
	public List<PayVO> getPayDetailList( String payYearMonth ) throws IOException {
    	return sqlSession.selectList("mapper.pay.getPayDetailList" , payYearMonth );
	}
	
	public HashMap<String,Object> getPayDetail( HashMap<String,Object> info ) throws IOException {
		
		List<HashMap<String,Object>> employee_data_DB = sqlSession.selectList("mapper.pay.getEmployeeInfo" , info );
		List<HashMap<String,Object>> pay_and_deduction_data_DB = sqlSession.selectList("mapper.pay.getPayDetail" , info );
		
		HashMap<String,Object> result = new HashMap<String,Object>();
		result.put("employee_data", employee_data(employee_data_DB) );
		result.put("pay_data", pay_data(pay_and_deduction_data_DB) );
		result.put("deduction_data", deduction_data(pay_and_deduction_data_DB) );
		return result;
	}
	
	
	private List<HashMap<String,Object>> employee_data(List<HashMap<String,Object>> employee_data_DB_List){
		List<HashMap<String,Object>> employee_data = new ArrayList<HashMap<String,Object>>();
		HashMap<String,Object> employee_data_DB = employee_data_DB_List.get(0);
		for( String key : employee_data_DB.keySet() ) {
			HashMap<String,Object> temp_map = new HashMap<String,Object>();
			temp_map.put("item", key);
			temp_map.put("item_name", item_name(key));
			temp_map.put("data", employee_data_DB.get(key));
			employee_data.add( temp_map );
		}
		return employee_data;
	}
	

	private List<HashMap<String,Object>> pay_data(List<HashMap<String,Object>> pay_and_deduction_DB){
		List<HashMap<String,Object>> result = new ArrayList<HashMap<String,Object>>();
		for( HashMap<String,Object> pay_and_deduction_DB_map  : pay_and_deduction_DB) {
			if( pay_and_deduction_DB_map.get("GDGUBNCD").equals("G") ) {
				result.add(pay_and_deduction_DB_map);
			}
		}
		return result;
	}
	
	
	private List<HashMap<String,Object>> deduction_data(List<HashMap<String,Object>> pay_and_deduction_DB){
		List<HashMap<String,Object>> result = new ArrayList<HashMap<String,Object>>();
		for( HashMap<String,Object> pay_and_deduction_DB_map  : pay_and_deduction_DB) {
			if( pay_and_deduction_DB_map.get("GDGUBNCD").equals("D") ) {
				result.add(pay_and_deduction_DB_map);
			}
		}
		return result;
	}
	
	
	private String item_name(String key) {
		return (key.equals("EMPLNUMB"))? "사번"
				: (key.equals("KORENAME"))? "성명"
				: (key.equals("BIRTHDAY"))? "생일"
				: (key.equals("EMPLDATE"))? "입사일"
				: (key.equals("RETRDATE"))? "퇴사일"
				: (key.equals("DEPTCODE"))? "소속"
				: (key.equals("JIGWICOD"))? "직위"
				: (key.equals("JIGCHAEG"))? "직책"
				: (key.equals("JIGGEUBC"))? "직급"
				: (key.equals("HOBONGCD"))? "호봉"
				: "";		
	}
	
	private String item_sqe(String key) {
		return (key.equals("EMPLNUMB"))? "0"
				: (key.equals("KORENAME"))? "1"
				: (key.equals("BIRTHDAY"))? "2"
				: (key.equals("EMPLDATE"))? "3"
				: (key.equals("RETRDATE"))? "4"
				: (key.equals("DEPTCODE"))? "5"
				: (key.equals("JIGWICOD"))? "6"
				: (key.equals("JIGCHAEG"))? "7"
				: (key.equals("JIGGEUBC"))? "8"
				: (key.equals("HOBONGCD"))? "9"
				: "";		
	}
	
	
	
	
	
	
}
