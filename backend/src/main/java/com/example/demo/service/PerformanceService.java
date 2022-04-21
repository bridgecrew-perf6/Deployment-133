package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.PerformanceRepostiory;
import com.example.demo.vo.JoborderResultVo;
import com.example.demo.vo.JoborderVo;

@Service
public class PerformanceService {

	
	@Autowired
	private PerformanceRepostiory performanceRepository;
	
	// 앱 통신
	public List<JoborderVo> conPerformance(String joborderJobname){

		System.out.println("-----service-----");
		System.out.println(joborderJobname);
		System.out.println("-----service-----");

		return performanceRepository.conPerformance(joborderJobname);
	}
		
	// 앱 생산실적 시작
	public Boolean insertPerformance(JoborderResultVo joborderResultVo) {
		
		System.out.println("-----service-----");
		System.out.println(joborderResultVo);
		System.out.println("-----service-----");
		performanceRepository.updateStatus(joborderResultVo);
		
		
		return performanceRepository.insertPerformance(joborderResultVo);		
	}	
	
	// 앱 생산실적 마무리
	public Boolean updatePerformance(JoborderResultVo joborderReusltVo) {

		System.out.println("-----service-----");
		System.out.println(joborderReusltVo);
		System.out.println("-----service-----");
		
		return performanceRepository.updatePerformance(joborderReusltVo);		

	}
	
	// 생산실적 조회
	public List<JoborderResultVo> readPerformance(String keyword) {
		
		System.out.println("-----service-----");
		System.out.println(keyword);
		System.out.println("-----service-----");
		
		return performanceRepository.readPerformance(keyword);
	}
	
	
}
