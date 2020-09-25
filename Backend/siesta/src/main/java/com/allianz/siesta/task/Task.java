package com.allianz.siesta.task;

import java.util.Date;

import javax.persistence.*;

import com.allianz.siesta.project.Project;
import com.allianz.siesta.user.User;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "task")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(nullable = false, name = "task_name")
    private String taskName;

    @Column(nullable = true, name = "task_description")
    private String taskDescription;

    @Column(nullable = false, name = "estimate_time")
    private Double estimateTime;

    @Column(name = "billable_time")
    private Double billableTime;

    @Column(name = "actual_time")
    private Double actualTime;

    @Column(name = "reference_link")
    private String referenceLink;

    @Column(nullable = false, name = "task_date")
    private String taskDate;

    @Column(nullable = false, name = "create_date")
    private Date createDate;

    @Column(nullable = false, name = "completed_status")
    private Boolean completedStatus;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true)
    @JsonManagedReference
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "project_id", nullable = true)
    @JsonManagedReference
    private Project project;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getTaskDescription() {
        return taskDescription;
    }

    public void setTaskDescription(String taskDescription) {
        this.taskDescription = taskDescription;
    }

    public Double getEstimateTime() {
        return estimateTime;
    }

    public void setEstimateTime(Double estimateTime) {
        this.estimateTime = estimateTime;
    }

    public Double getBillableTime() {
        return billableTime;
    }

    public void setBillableTime(Double billableTime) {
        this.billableTime = billableTime;
    }

    public Double getActualTime() {
        return actualTime;
    }

    public void setActualTime(Double actualTime) {
        this.actualTime = actualTime;
    }

    public String getReferenceLink() {
        return referenceLink;
    }

    public void setReferenceLink(String referenceLink) {
        this.referenceLink = referenceLink;
    }

    public String getTaskDate() {
        return taskDate;
    }

    public void setTaskDate(String taskDate) {
        this.taskDate = taskDate;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Boolean getCompletedStatus() {
        return completedStatus;
    }

    public void setCompletedStatus(Boolean completedStatus) {
        this.completedStatus = completedStatus;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}
