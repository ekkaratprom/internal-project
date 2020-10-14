package com.allianz.siesta.project;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.allianz.siesta.assignment.Assignment;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "project")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(nullable = false, name = "project_name")
    private String projectName;

    @OneToMany(mappedBy = "project", fetch = FetchType.LAZY)
	@JsonBackReference
    private List<Assignment> assignments = new ArrayList<Assignment>();



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public List<Assignment> getAssignments() {
        return assignments;
    }

    public void setAssignments(List<Assignment> assignments) {
        this.assignments = assignments;
    }

    public Project(){

    }
    public Project(Long id) {
        this.id = id;
    }
}
