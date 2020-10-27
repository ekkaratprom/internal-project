package com.allianz.siesta.assignment.request;


public class DeleteStatusRequest {
    private Boolean deletedStatus;

    public DeleteStatusRequest(Boolean deletedStatus) {
        this.deletedStatus = deletedStatus;
    }

    public Boolean getDeletedStatus() {
        return deletedStatus;
    }

    public void setDeletedStatus(Boolean deletedStatus) {
        this.deletedStatus = deletedStatus;
    }

    public DeleteStatusRequest() {
    }
}
