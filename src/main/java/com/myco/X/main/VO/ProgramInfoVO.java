package com.myco.X.main.VO;

import java.util.ArrayList;
import java.util.List;

public class ProgramInfoVO {
	
	String programCode = null;
	String programName = null;
	String programURL = null;
	int programLevel = 0;
	String parentId = null;
	String isProgram = null;
	List<ProgramInfoVO> childMenu = new ArrayList<ProgramInfoVO>();
	

	
	
	
	public String getProgramCode() {
		return programCode;
	}





	public void setProgramCode(String programCode) {
		this.programCode = programCode;
	}





	public String getProgramName() {
		return programName;
	}





	public void setProgramName(String programName) {
		this.programName = programName;
	}





	public String getProgramURL() {
		return programURL;
	}





	public void setProgramURL(String programURL) {
		this.programURL = programURL;
	}





	public int getProgramLevel() {
		return programLevel;
	}





	public void setProgramLevel(int programLevel) {
		this.programLevel = programLevel;
	}





	public String getParentId() {
		return parentId;
	}





	public void setParentId(String parentId) {
		this.parentId = parentId;
	}





	public boolean isMainCategory() {
		return this.programLevel == 0;
	}
	
	public boolean isMiddleCategory() {
		return this.isProgram.equals("X");
	}
	
	public boolean isExecuteCategory() {
		return this.isProgram.equals("O");
	}
	



	public void setIsProgram(String isProgram) {
		this.isProgram = isProgram;
	}





	public List<ProgramInfoVO> getChildMenu() {
		return childMenu;
	}





	public void setChildMenu(List<ProgramInfoVO> childMenu) {
		this.childMenu = childMenu;
	}





	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return this.programCode.hashCode();
	}
	
	
	
}
