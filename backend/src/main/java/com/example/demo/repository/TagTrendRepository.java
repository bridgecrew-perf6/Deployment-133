package com.example.demo.repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.PressVo;

@Repository
public class TagTrendRepository {

	@Autowired
	private SqlSession sqlSession;

	public List<PressVo> findTag(List<Map<String, String>> seletItem) {
		System.out.println(seletItem);
		//
		// System.out.println(Integer.parseInt(map.get(0).get("startRow")));
		// List<TagVo> i= sqlSession.selectList("tag.findTag", new HashMap<String,
		// Object>() {{
		// put("equip_id", map.get(0).get("value"));
		// put("start_row", Integer.parseInt(map.get(0).get("startRow")));
		// }});
		List<PressVo> i = sqlSession.selectList("tag.findTag", new HashMap<String, Object>() {
			{
				put("seletItem", seletItem);
				put("start_row", Integer.parseInt(seletItem.get(0).get("startRow")));
			}
		});
		System.out.println(i);
		return i;
	}


	public List<Map<String,String>> findHistory(Map<String, String> map) {
		System.out.println(map);
		return sqlSession.selectList("tag.findHistory", map);
	}
	
}
