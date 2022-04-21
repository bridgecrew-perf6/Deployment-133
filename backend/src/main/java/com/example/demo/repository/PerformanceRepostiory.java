package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.JoborderResultVo;
import com.example.demo.vo.JoborderVo;

@Repository
public class PerformanceRepostiory {

	@Autowired
	private SqlSession sqlSession;

	// 앱 통신
	public List<JoborderVo> conPerformance(String joborderJobname) {

		System.out.println("-----repository-----");
		System.out.println(joborderJobname);
		System.out.println("-----repository-----");

		return sqlSession.selectList("plan.conPerformance", joborderJobname);
	}

	// 앱 생산실적 시작
	public Boolean insertPerformance(JoborderResultVo joborderResultVo) {

		System.out.println("-----repository-----");
		System.out.println(joborderResultVo);
		System.out.println("-----repository-----");

		return sqlSession.insert("performance.insertPerformance", joborderResultVo) == 1;
	}

	// 앱 생산실적 마무리
	public Boolean updatePerformance(JoborderResultVo joborderReusultVo) {

		System.out.println("-----repository-----");
		System.out.println(joborderReusultVo);
		System.out.println("-----repository-----");

		return sqlSession.update("performance.updatePerformance", joborderReusultVo) == 1;
	}

	// 생산실적 조회
	public List<JoborderResultVo> readPerformance(String keyword) {

		System.out.println("-----repository-----");
		System.out.println(keyword);
		System.out.println("-----repository-----");

		return sqlSession.selectList("performance.readPerformance", keyword);
	}

	public List<JoborderResultVo> findAll() {
		return sqlSession.selectList("performance.readPerformance");
	}

	// status 변경
	public Boolean updateStatus(JoborderResultVo joborderReusultVo) {

		System.out.println("-----updateStatus-----");
		System.out.println(joborderReusultVo);
		System.out.println("-----repository-----");

		return sqlSession.update("performance.updateStatus", joborderReusultVo) == 1;
	}

	// // 앱 생산실적 테스트
	// public Boolean appInsertTest(JoborderResultVo joborderResultVo) {
	// System.out.println(joborderResultVo);
	// return sqlSession.insert("performance.insertTest", joborderResultVo) == 1;
	// }
	//
	// // 앱 생산실적 마무리 테스트
	// public Boolean appUpdateTest(JoborderResultVo joborderReusltVo) {
	// System.out.println(joborderReusltVo);
	// return sqlSession.update("performance.updateTest", joborderReusltVo) ==1;
	// }
}
