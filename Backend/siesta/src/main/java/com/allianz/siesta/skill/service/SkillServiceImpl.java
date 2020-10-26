package com.allianz.siesta.skill.service;

import com.allianz.siesta.skill.Skill;
import com.allianz.siesta.skill.SkillRepository;
import com.allianz.siesta.skill.SkillRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SkillServiceImpl implements SkillService{

    @Autowired
    private SkillRepository skillRepository;


    @Override
    public Skill addSkill(SkillRequest skillRequest){
        Skill skill = skillRequest.skillRequest();
        return skillRepository.save(skill);
    }

    @Override
    public Iterable<Skill> getAllSkills() {
        return skillRepository.findAll();
    }
}
