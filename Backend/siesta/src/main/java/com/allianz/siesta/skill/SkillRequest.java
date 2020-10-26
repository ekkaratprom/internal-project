package com.allianz.siesta.skill;

public class SkillRequest {
    private String skillName;
    private String iconPath;

    public SkillRequest(String skillName, String iconPath) {
        this.skillName = skillName;
        this.iconPath = iconPath;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }

    public String getIconPath() {
        return iconPath;
    }

    public void setIconPath(String iconPath) {
        this.iconPath = iconPath;
    }

    public Skill skillRequest() {
        Skill skill = new Skill();
        skill.setSkillName(skillName);
        skill.setIconPath(iconPath);

        return skill;
    }
}
