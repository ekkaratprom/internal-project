package com.allianz.siesta.assignment.service;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.assignment.AssignmentListResponse;
import com.allianz.siesta.assignment.AssignmentRequest;

public interface AssignmentService {

    Assignment addAssignment(AssignmentRequest assignmentRequest);

    Iterable<Assignment> getAllAssignments();

    Assignment editAssignment(AssignmentRequest assignmentRequest);

    Iterable<AssignmentListResponse> getAllAssignmentList();
}
