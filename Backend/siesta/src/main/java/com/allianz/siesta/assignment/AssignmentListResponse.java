package com.allianz.siesta.assignment;

public class AssignmentListResponse {
    private Long id;
    private String assignmentName;

    public AssignmentListResponse(Long id, String assignmentName) {
        this.id = id;
        this.assignmentName = assignmentName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAssignmentName() {
        return assignmentName;
    }

    public void setAssignmentName(String assignmentName) {
        this.assignmentName = assignmentName;
    }
}
