package com.example.demo.controller;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.MonitoringRepository;
import com.example.demo.repository.PerformanceRepostiory;
import com.example.demo.repository.PlanRepository;
import com.example.demo.repository.TagTrendRepository;
import com.example.demo.repository.UserRepostiory;
import com.example.demo.service.PerformanceService;
import com.example.demo.service.PlanService;
import com.example.demo.vo.JoborderResultVo;
import com.example.demo.vo.JoborderVo;
import com.example.demo.vo.UserVo;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageConfig;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api")
public class ApiController {
	@Autowired
	private TagTrendRepository tagTrendRepository;
	@Autowired
	private MonitoringRepository monitoringRepository;
	@Autowired
	private PlanRepository planRepository;
	@Autowired
	private PerformanceService performanceService;
	@Autowired
	private UserRepostiory userRepository;
	@Autowired
	private PerformanceRepostiory performanceRepository;

	// @Autowired
	// private PerformanceService performanceService;

	@Autowired
	private PlanService planService;

	// 로그인
	@PostMapping("/login")
	public ResponseEntity<JsonResult> login(@RequestBody UserVo vo) {
		System.out.println(vo);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(userRepository.findByEmailAndPassword(vo)));
	}

	// Tag 트랜드
	@PostMapping("/Tag")
	public ResponseEntity<JsonResult> read(@RequestBody List<Map<String, String>> map) {
		log.info("Request [POST/api/Tag]");
		System.out.println(map.get(0).get("label"));
		System.out.println(map);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(tagTrendRepository.findTag(map)));
	}
	
	//	Tag 트랜드 - history
	@PostMapping("/history")
	public ResponseEntity<JsonResult> read(@RequestBody Map<String, String> map) {
		log.info("Request [POST/api/history]");
		System.out.println(map);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(tagTrendRepository.findHistory(map)));
	}

	// 공정 모니터링
	@PostMapping("/monitoring")
	public ResponseEntity<JsonResult> index(String row) {
		// 수행 시간 알아볼 때 좋음
		// StopWatch stopWatch = new StopWatch();
		// stopWatch.start();
		// stopWatch.stop();
		// System.out.println("수행시간 >> {}"+ stopWatch.getTotalTimeSeconds());
		log.info("Request [POST/api/monitoring]");
		try {
			return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(monitoringRepository.findAll(row)));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(JsonResult.fail(e.getMessage()));
		}

	}

	// 생산 계획 조회
	@GetMapping("/plan")
	public ResponseEntity<JsonResult> readPlan(JoborderVo joborderVo,
			@RequestParam(value = "kw", required = true, defaultValue = "") String keyword) {
		log.info("Request [GET /api/plan]");

		System.out.println("-----controller-----");
		System.out.println(joborderVo);
		System.out.println("-----controller-----");

		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(planRepository.findPlan(keyword)));

	}

	// 생산계획 등록
	@PostMapping("/registration")
	public ResponseEntity<JsonResult> insert(@RequestBody JoborderVo joborderVo) {
		log.info("Request [POST/api/registration]");
		System.out.println(joborderVo.toString());

		System.out.println("-----------------------");
		System.out.println(joborderVo);
		System.out.println("-----------------------");
		// System.out.println(JsonResult.success(planRepository.insertPlan(joborderVo)));

		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(planService.insertPlan(joborderVo)));
		// System.out.println(JsonResult.success(planRepository.insertPlan(joborderVo)));

	}
	// 생산 실적 조회
	@GetMapping("/performance")
	public ResponseEntity<JsonResult> readPerformance() {
		System.out.println("실적");
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(performanceRepository.findAll()));

	}

	// 앱 통신
	@GetMapping("/performance/{joborderJobname}")
	public ResponseEntity<JsonResult> appRead(@PathVariable("joborderJobname") String joborderJobname) {
		log.info("Request [GET//performance addRead]");
		System.out.println("-----controller-----");
		System.out.println(joborderJobname);
		System.out.println("-----controller-----");

		return ResponseEntity.status(HttpStatus.OK)
				.body(JsonResult.success(performanceRepository.conPerformance(joborderJobname)));
	}

	// 앱 생산실적 시작
	@PostMapping("/performance/{joborderResultJoborderId}")
	public ResponseEntity<JsonResult> appInsert(@PathVariable("joborderResultJoborderId") Integer joborderId,
			@RequestBody JoborderResultVo joborderResultVo) {
		log.info("Request [GET//performance appInsert]");
		System.out.println("-----controller-----");
		System.out.println(joborderResultVo);
		System.out.println("-----controller-----");

		return ResponseEntity.status(HttpStatus.OK)
				.body(JsonResult.success(performanceService.insertPerformance(joborderResultVo)));
	}

	// 앱 생산실적 마무리
	@PutMapping("/performance/{joborderResultJoborderId}")
	public ResponseEntity<JsonResult> appUpdate(@PathVariable("joborderResultJoborderId") Integer joborderId,
			@RequestBody JoborderResultVo joborderResultVo) {

		System.out.println("-----controller-----");
		System.out.println(joborderResultVo);
		System.out.println("-----controller-----");

		return ResponseEntity.status(HttpStatus.OK)
				.body(JsonResult.success(performanceRepository.updatePerformance(joborderResultVo)));
	}

	@GetMapping("qr")
	public String makeQr() throws WriterException, IOException {

		String savePath = "C:\\qr\\"; // 파일 경로

		// 파일 경로가 없으면 생성하기
		File file = new File(savePath);
		if (!file.exists()) {
			file.mkdirs();
		}

		// 링크로 할 URL주소
		String url = planRepository.makeQR();
		System.out.println(url);

		// 링크 생성값
		String codeurl = new String(url.getBytes("UTF-8"), "ISO-8859-1");

		// QRCode 색상값
		int qrcodeColor = 0xFF2e4e96;
		// QRCode 배경색상값
		int backgroundColor = 0xFFFFFFFF;

		// QRCode 생성
		QRCodeWriter qrCodeWriter = new QRCodeWriter();
		BitMatrix bitMatrix = qrCodeWriter.encode(codeurl, BarcodeFormat.QR_CODE, 200, 200); // 200,200은 width, height

		MatrixToImageConfig matrixToImageConfig = new MatrixToImageConfig(qrcodeColor, backgroundColor);
		BufferedImage bufferedImage = MatrixToImageWriter.toBufferedImage(bitMatrix, matrixToImageConfig);

		// 파일 이름에 저장한 날짜를 포함해주기 위해 date생성
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss.SSS");
		String fileName = "C1040_" + sdf.format(new Date());

		// 파일 경로, 파일 이름 , 파일 확장자에 맡는 파일 생성
		File temp = new File(savePath + fileName + ".png");

		// ImageIO를 사용하여 파일쓰기
		ImageIO.write(bufferedImage, "png", temp);

		// 리턴은 사용자가 원하는 값을 리턴한다.
		// 작성자는 QRCode 파일의 이름을 넘겨주고 싶었음.
		return fileName + ".png";
	}

}
