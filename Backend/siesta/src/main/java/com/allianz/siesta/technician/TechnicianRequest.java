package com.allianz.siesta.technician;

import com.allianz.siesta.skill.Skill;
import com.allianz.siesta.user.User;

public class TechnicianRequest {
    private Long userId;
    private Long skillId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getSkillId() {
        return skillId;
    }

    public void setSkillId(Long skillId) {
        this.skillId = skillId;
    }

    public Technician technicianRequest() {
        Technician technician = new Technician();
        technician.setUser(new User(userId));
        technician.setSkill(new Skill(skillId));

        return technician;
    }
}
