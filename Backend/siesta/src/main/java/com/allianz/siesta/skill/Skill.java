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

    @OneToMany(mappedBy = "skill", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<Technician> technicians = new ArrayList<Technician>();
}
