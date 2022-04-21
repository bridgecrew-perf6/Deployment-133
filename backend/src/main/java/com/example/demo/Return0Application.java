package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Return0Application {

	public static void main(String[] args) {
		SpringApplication.run(Return0Application.class, args);
	}

	/*
	 * @Bean public ApplicationRunner scriptRunner() { return new
	 * ApplicationRunner() {
	 * 
	 * @Autowired private SqlSessionFactory sqlSessionFactory;
	 * 
	 * 
	 * // 화살표로 못 바꿈
	 * 
	 * @Override public void run(ApplicationArguments args) throws Exception {
	 * ScriptRunner scriptRunner = new
	 * ScriptRunner(sqlSessionFactory.getConfiguration().getEnvironment().
	 * getDataSource().getConnection());
	 * scriptRunner.runScript(Resources.getResourceAsReader("sql/db-setup.sql")); }
	 * }; }
	 */
}
