package com.example.demo.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserVo {
	private Integer userId;
	private String userPw;
	private String userName;
	private String userWorktype;
	private String userGroup;
	
}
