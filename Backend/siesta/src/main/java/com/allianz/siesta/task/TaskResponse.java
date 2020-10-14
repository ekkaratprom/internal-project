//package com.allianz.siesta.task;
//
//import com.allianz.siesta.project.Project;
//import com.allianz.siesta.user.User;
//
//import java.util.Date;
//
//public class TaskResponse {
//    private String taskName;
//    private String taskDescription;
//    private Double estimateTime;
//    private Double actualTime;
//    private Double billableTime;
//    private String referenceLink;
//    private String taskDate;
//    private Date createDate;
//    private Boolean completedStatus;
//    private String assignee;
//    private String projectName;
//
//    public TaskResponse(String taskName, String taskDescription, Double estimateTime, Double actualTime, Double billableTime, String referenceLink, String taskDate, Date createDate, Boolean completedStatus) {
//        this.taskName = taskName;
//        this.taskDescription = taskDescription;
//        this.estimateTime = estimateTime;
//        this.actualTime = actualTime;
//        this.billableTime = billableTime;
//        this.referenceLink = referenceLink;
//        this.taskDate = taskDate;
//        this.createDate = createDate;
//        this.completedStatus = completedStatus;
//    }
//
//    public Double getBillableTime() {
//        return billableTime;
//    }
//
//    public void setBillableTime(Double billableTime) {
//        this.billableTime = billableTime;
//    }
//
//    public String getTaskName() {
//        return taskName;
//    }
//
//    public void setTaskName(String taskName) {
//        this.taskName = taskName;
//    }
//
//    public Double getEstimateTime() {
//        return estimateTime;
//    }
//
//    public void setEstimateTime(Double estimateTime) {
//        this.estimateTime = estimateTime;
//    }
//
//    public Double getActualTime() {
//        return actualTime;
//    }
//
//    public void setActualTime(Double actualTime) {
//        this.actualTime = actualTime;
//    }
//
//    public String getReferenceLink() {
//        return referenceLink;
//    }
//
//    public void setReferenceLink(String referenceLink) {
//        this.referenceLink = referenceLink;
//    }
//
//    public String getTaskDate() {
//        return taskDate;
//    }
//
//    public void setTaskDate(String taskDate) {
//        this.taskDate = taskDate;
//    }
//
//    public Boolean getCompletedStatus() {
//        return completedStatus;
//    }
//
//    public void setCompletedStatus(Boolean completedStatus) {
//        this.completedStatus = completedStatus;
//    }
//
//    public String getTaskDescription() {
//        return taskDescription;
//    }
//
//    public void setTaskDescription(String taskDescription) {
//        this.taskDescription = taskDescription;
//    }
//
//    public Date getCreateDate() {
//        return createDate;
//    }
//
//    public void setCreateDate(Date createDate) {
//        this.createDate = createDate;
//    }
//
//    public String getAssignee() {
//        return assignee;
//    }
//
//    public void setAssignee(String assignee) {
//        this.assignee = assignee;
//    }
//
//    public String getProjectName() {
//        return projectName;
//    }
//
//    public void setProjectName(String projectName) {
//        this.projectName = projectName;
//    }
//}
