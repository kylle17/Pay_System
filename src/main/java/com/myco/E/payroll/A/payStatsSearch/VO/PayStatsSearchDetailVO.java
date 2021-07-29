package com.myco.E.payroll.A.payStatsSearch.VO;

public class PayStatsSearchDetailVO {
	private String payMonth ;
	private String koreName ;
	private String emplnumb ;
	private int pay ;
	private int incomeTax ;
	
	public String getPayMonth() {
		return payMonth;
	}
	public void setPayMonth(String payMonth) {
		this.payMonth = payMonth;
	}
	public String getKoreName() {
		return koreName;
	}
	public void setKoreName(String koreName) {
		this.koreName = koreName;
	}
	public String getEmplnumb() {
		return emplnumb;
	}
	public void setEmplnumb(String emplnumb) {
		this.emplnumb = emplnumb;
	}
	public int getPay() {
		return pay;
	}
	public void setPay(int pay) {
		this.pay = pay;
	}
	public int getIncomeTax() {
		return incomeTax;
	}
	public void setIncomeTax(int incomeTax) {
		this.incomeTax = incomeTax;
	}
	
	
	
}
