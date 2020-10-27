package com.allianz.siesta.assignment.request;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.project.Project;

public class AssignmentRequest {
    private String assignmentName;
    private Double estimateTime;
    private Double billableTime;
    private Boolean completedStatus;
    private Long projectId;

    public String getAssignmentName() {
        return assignmentName;
    }

    public void setAssignmentName(String assignmentName) {
        this.assignmentName = assignmentName;
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

    public Boolean getCompletedStatus() {
        return completedStatus;
    }

    public void setCompletedStatus(Boolean completedStatus) {
        this.completedStatus = completedStatus;
    }

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public Assignment assignmentRequest() {
        Assignment assignment = new Assignment();
        assignment.setAssignmentName(assignmentName);
        assignment.setBillableTime(billableTime);
        assignment.setEstimateTime(estimateTime);
        assignment.setCompletedStatus(completedStatus);
        assignment.setProject(new Project(projectId));

        return assignment;
    }
}
