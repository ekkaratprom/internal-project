package com.allianz.siesta.task;

import java.util.Date;

public class TaskResponse {
    private String taskName;
    private String taskDescription;
    private Double estimateTime;
    private Double actualTime;
    private String referenceLink;
    private Date taskDate;
    private Date createDate;
    private Boolean completedStatus;

    public TaskResponse(String taskName, String taskDescription, Double estimateTime, Double actualTime, String referenceLink, Date taskDate, Date createDate, Boolean completedStatus) {
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

    public Date getTaskDate() {
        return taskDate;
    }

    public void setTaskDate(Date taskDate) {
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

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
}
