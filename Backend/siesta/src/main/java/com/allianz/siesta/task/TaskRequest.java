package com.allianz.siesta.task;

public class TaskRequest {
    private String taskName;
    private Double estimateTime;
    private Double actualTime;
    private String referenceLink;
    private Double taskDate;
    private Boolean completedStatus;
    private Long userId;
    private Long projectId;

    public TaskRequest(String taskName, Double estimateTime, Double actualTime, String referenceLink, Double taskDate, Boolean completedStatus, Long userId, Long projectId) {
        this.taskName = taskName;
        this.estimateTime = estimateTime;
        this.actualTime = actualTime;
        this.referenceLink = referenceLink;
        this.taskDate = taskDate;
        this.completedStatus = completedStatus;
        this.userId = userId;
        this.projectId = projectId;
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

    public Double getTaskDate() {
        return taskDate;
    }

    public void setTaskDate(Double taskDate) {
        this.taskDate = taskDate;
    }

    public Boolean getCompletedStatus() {
        return completedStatus;
    }

    public void setCompletedStatus(Boolean completedStatus) {
        this.completedStatus = completedStatus;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }



}
