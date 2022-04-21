package com.example.demo.repository;

import com.example.demo.vo.UserVo;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepostiory {

	@Autowired
	private SqlSession sqlSession;

	public UserVo findByEmailAndPassword(UserVo vo) {

		return sqlSession.selectOne("user.findByIdAndPassword", vo);
	}
}
