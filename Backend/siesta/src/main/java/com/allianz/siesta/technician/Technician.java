package com.allianz.siesta.technician;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.skill.Skill;
import com.allianz.siesta.user.User;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name = "technician")
public class Technician {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true)
    @JsonManagedReference
    private User user;

    @ManyToOne
    @JoinColumn(name = "skill_id", nullable = true)
    @JsonManagedReference
    private Skill skill;
}
