package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.PressVo;

@Repository
public class MonitoringRepository {
	@Autowired
	private SqlSession sqlsession;
	
	public List<PressVo> findAll(String start_row){
		return sqlsession.selectList("press.findAll", start_row);
	}
}
