package com.allianz.siesta.skill;

import com.allianz.siesta.project.ProjectResponse;
import com.allianz.siesta.skill.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @CrossOrigin
    @PostMapping(value = "/v1/addSkill")
    public Skill addSkill(@RequestBody SkillRequest skillRequest) {
        return skillService.addSkill(skillRequest);
    }

    @CrossOrigin
    @GetMapping (value = "/v1/skill")
    public Iterable<Skill> getAllSkills(){
        return skillService.getAllSkills();
    }
}
