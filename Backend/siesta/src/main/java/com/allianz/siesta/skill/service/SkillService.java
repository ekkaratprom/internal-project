package com.allianz.siesta.skill.service;

import com.allianz.siesta.skill.Skill;
import com.allianz.siesta.skill.SkillRequest;

public interface SkillService {

    Skill addSkill(SkillRequest skillRequest);

    Iterable<Skill> getAllSkills();
}
