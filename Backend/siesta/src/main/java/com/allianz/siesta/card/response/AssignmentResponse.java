package com.allianz.siesta.card.response;


import java.util.List;

public class AssignmentResponse {
    private String assignmentName;
    private Double billableTime;
    private Double estimateTime;
    private Double actualTime;
    private Boolean completedStatus;
    private List cardObj;

    public AssignmentResponse(String assignmentName, Double billableTime, Double estimateTime, Boolean completedStatus) {
        this.assignmentName = assignmentName;
        this.billableTime = billableTime;
        this.estimateTime = estimateTime;
        this.completedStatus = completedStatus;
    }

    public Boolean getCompletedStatus() {
        return completedStatus;
    }

    public void setCompletedStatus(Boolean completedStatus) {
        this.completedStatus = completedStatus;
    }

    public String getAssignmentName() {
        return assignmentName;
    }

    public void setAssignmentName(String assignmentName) {
        this.assignmentName = assignmentName;
    }

    public Double getBillableTime() {
        return billableTime;
    }

    public void setBillableTime(Double billableTime) {
        this.billableTime = billableTime;
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

    public List getCardObj() {
        return cardObj;
    }

    public void setCardObj(List cardObj) {
        this.cardObj = cardObj;
    }
}
