package com.allianz.siesta.card.response;

public class SkillResponse {
    private String skillName;

    public SkillResponse(String skillName) {
        this.skillName = skillName;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }
}
