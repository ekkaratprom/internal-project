package com.allianz.siesta.task;

import com.allianz.siesta.project.Project;
import com.allianz.siesta.user.User;

import java.time.LocalDate;

public class TaskRequest {
    private String taskName;
    private Double estimateTime;
    private Double actualTime;
    private String referenceLink;
    private LocalDate taskDate;
    private Boolean completedStatus;
    private User user;
    private Project project;


    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public Double getEstimateTime() {
        return estimateTime;
    }

    public void setEstimateTime(Double estimateTime) {
        this.estimateTime = estimateTime;
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

    public LocalDate getTaskDate() {
        return taskDate;
    }

    public void setTaskDate(LocalDate taskDate) {
        this.taskDate = taskDate;
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

    public Task taskRequest() {
        Task task = new Task();
        task.setTaskName(taskName);
        task.setEstimateTime(estimateTime);
        task.setActualTime(actualTime);
        task.setReferenceLink(referenceLink);
        task.setTaskDate(taskDate);
        task.setCompletedStatus(completedStatus);
        task.setUser(user);
        task.setProject(project);
        return task;
    }


}
