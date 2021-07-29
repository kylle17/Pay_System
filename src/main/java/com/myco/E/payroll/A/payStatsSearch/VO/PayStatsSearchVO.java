package com.myco.E.payroll.A.payStatsSearch.VO;

import com.fasterxml.jackson.annotation.JsonInclude;

public class PayStatsSearchVO {
	
	@JsonInclude(JsonInclude.Include.NON_DEFAULT)
	String PAYMONTH;
	
	@JsonInclude(JsonInclude.Include.NON_DEFAULT)
	String EMPLNUMB;
	
	@JsonInclude(JsonInclude.Include.NON_DEFAULT)
	String KORENAME;
	
	public String getPAYMONTH() {
		return PAYMONTH;
	}
	public void setPAYMONTH(String pAYMONTH) {
		PAYMONTH = pAYMONTH;
	}
	public String getEMPLNUMB() {
		return EMPLNUMB;
	}
	public void setEMPLNUMB(String eMPLNUMB) {
		EMPLNUMB = eMPLNUMB;
	}
	public String getKORENAME() {
		return KORENAME;
	}
	public void setKORENAME(String kORENAME) {
		KORENAME = kORENAME;
	}
	

	
}
