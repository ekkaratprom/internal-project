package com.allianz.siesta.assignment.service;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.assignment.AssignmentListResponse;
import com.allianz.siesta.assignment.request.AssignmentRequest;
import com.allianz.siesta.assignment.request.DeleteStatusRequest;

import java.util.Optional;

public interface AssignmentService {

    Assignment addAssignment(AssignmentRequest assignmentRequest);

    Iterable<Assignment> getAllAssignments();

    Iterable<AssignmentListResponse> getAllAssignmentList();

    Assignment deleteAssignment(DeleteStatusRequest deleteStatusRequest, Long id);

    Assignment updateAssignment(AssignmentRequest assignmentRequest, Long id);
}
