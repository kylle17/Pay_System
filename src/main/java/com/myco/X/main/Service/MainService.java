package com.myco.X.main.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myco.X.main.DAO.MainDAO;
import com.myco.X.main.VO.ProgramInfoVO;

@Service
public class MainService {
	
	@Autowired
	private MainDAO mainDAO;
	
	public  List<ProgramInfoVO> selectMenuList(){
		
		List<ProgramInfoVO> menuList = new ArrayList<ProgramInfoVO>();
		List<ProgramInfoVO> programInfoVO_List = mainDAO.selectMenuList();
		
		for( ProgramInfoVO target_ProgramInfoVO  : programInfoVO_List ) {
			if( target_ProgramInfoVO.isMainCategory() ) {
				mainCategory_insert_into_menuList( target_ProgramInfoVO , menuList );
			}else {
				child_insert_into_parent( target_ProgramInfoVO , programInfoVO_List );
			}
		}
		
		return menuList;
	}

	
	public void mainCategory_insert_into_menuList( ProgramInfoVO target_ProgramInfoVO , List<ProgramInfoVO> menuList ) {
		menuList.add(target_ProgramInfoVO);
	};

	
	public void child_insert_into_parent( ProgramInfoVO child_ProgramInfoVO , List<ProgramInfoVO> parent_programInfoVO_List ) {
		for( ProgramInfoVO parent_ProgramInfoVO  : parent_programInfoVO_List ) {
			if( isMyParent( child_ProgramInfoVO , parent_ProgramInfoVO ) ) {
				parent_ProgramInfoVO.getChildMenu().add(child_ProgramInfoVO);
			};
		};
	};
	
	
	public boolean isMyParent( ProgramInfoVO child_ProgramInfoVO , ProgramInfoVO parent_ProgramInfoVO ) {
		return child_ProgramInfoVO.getParentId().hashCode() == parent_ProgramInfoVO.hashCode();
	};
	
	
	
	
	
	
	
	
	
}
