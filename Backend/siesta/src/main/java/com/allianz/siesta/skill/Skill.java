package com.allianz.siesta.skill;

import com.allianz.siesta.technician.Technician;
import com.allianz.siesta.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "skill")
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(nullable = false, name = "skill_name")
    private String skillName;

    @Column(nullable = false, name = "icon_path")
    private String iconPath;

    @OneToMany(mappedBy = "skill", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<Technician> technicians = new ArrayList<Technician>();

    public Skill(Long id) {
        this.id = id;
    }

    public Skill() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }

    public List<Technician> getTechnicians() {
        return technicians;
    }

    public void setTechnicians(List<Technician> technicians) {
        this.technicians = technicians;
    }

    public String getIconPath() {
        return iconPath;
    }

    public void setIconPath(String iconPath) {
        this.iconPath = iconPath;
    }

}
