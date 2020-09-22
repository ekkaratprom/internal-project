package com.allianz.siesta.project;


import com.allianz.siesta.task.Task;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "project")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id")
    private Long id;

    @Column(nullable = false, name = "project_name")
    private String projectName;
//
//    @OneToMany(mappedBy = "project", fetch = FetchType.LAZY)
//    private List<Task> tasks = new ArrayList<Task>();

}
