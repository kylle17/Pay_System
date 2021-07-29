package com.myco.X.main.DAO;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.myco.X.main.VO.ProgramInfoVO;

@Repository
public class MainDAO {

	@Autowired
	private SqlSession sqlSession;
	
	public List<ProgramInfoVO> selectMenuList(){	
		return sqlSession.selectList("mapper.main.selectMenuList");  
	}
	
}
