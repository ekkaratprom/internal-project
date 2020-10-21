package com.allianz.siesta.card.response;

public class SkillResponse {
    private String skillName;
    private String iconPath;

    public SkillResponse(String skillName, String iconPath) {
        this.skillName = skillName;
        this.iconPath = iconPath;
    }

    public String getIconPath() {
        return iconPath;
    }

    public void setIconPath(String iconPath) {
        this.iconPath = iconPath;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }
}
