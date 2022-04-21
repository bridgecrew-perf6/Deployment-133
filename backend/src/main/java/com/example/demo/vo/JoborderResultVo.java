package com.example.demo.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class JoborderResultVo {

	private Integer joborderResultId;
	private Integer joborderResultJoborderId;
	private Integer joborderResultWorkerId;
	private Integer joborderResultStauts;
	private String joborderResultStartTime;
	private String joborderResultFinishTime;
	private String joborderResultTime;

	private Integer joborderResultWeight;
	private String materialLotno;
	private Integer joborderOrdernum;
	private Integer joborderWidth;
	private String userName;
	private Integer joborderWeight;
	private Integer weightDifference;
	private String warehouseName;
	private String materialProdName;

	private Integer joborderSlitterNo;

}
