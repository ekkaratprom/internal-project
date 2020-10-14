package com.allianz.siesta.position;

import com.allianz.siesta.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "position")
public class Position {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(nullable = false, name = "position_name")
    private String positionName;

    @OneToMany(mappedBy = "position", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<User> users = new ArrayList<User>();
}
