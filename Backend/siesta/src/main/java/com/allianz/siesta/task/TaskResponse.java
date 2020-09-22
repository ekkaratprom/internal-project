package com.allianz.siesta.task;

import java.time.LocalDate;

public class TaskResponse {
    private String taskName;
    private String taskDescription;
    private Double estimateTime;
    private Double actualTime;
    private String referenceLink;
    private LocalDate taskDate;
    private LocalDate createDate;
    private Boolean completedStatus;

    public TaskResponse(String taskName, String taskDescription, Double estimateTime, Double actualTime, String referenceLink, LocalDate taskDate, LocalDate createDate, Boolean completedStatus) {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.estimateTime = estimateTime;
        this.actualTime = actualTime;
        this.referenceLink = referenceLink;
        this.taskDate = taskDate;
        this.createDate = createDate;
        this.completedStatus = completedStatus;
    }

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

    public String getTaskDescription() {
        return taskDescription;
    }

    public void setTaskDescription(String taskDescription) {
        this.taskDescription = taskDescription;
    }

    public LocalDate getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDate createDate) {
        this.createDate = createDate;
    }
}
