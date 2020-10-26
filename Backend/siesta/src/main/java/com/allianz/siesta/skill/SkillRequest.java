package com.allianz.siesta.skill;

public class SkillRequest {
    private String skillName;

    public SkillRequest(String skillName) {
        this.skillName = skillName;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }

    public Skill skillRequest() {
        Skill skill = new Skill();
        skill.setSkillName(skillName);

        return skill;
    }
}
