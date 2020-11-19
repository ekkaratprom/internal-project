package com.allianz.siesta.assignment.service;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.assignment.AssignmentListResponse;
import com.allianz.siesta.assignment.exception.AssignmentNotFoundException;
import com.allianz.siesta.assignment.request.AssignmentRequest;
import com.allianz.siesta.assignment.request.DeleteStatusRequest;
import com.allianz.siesta.project.exception.ProjectNotFoundException;

import java.util.List;

public interface AssignmentService {

    Assignment addAssignment(AssignmentRequest assignmentRequest) throws ProjectNotFoundException;

//    List<AssignmentRequest> addAssignments(List<AssignmentRequest> assignmentRequestList);

    Iterable<Assignment> getAllAssignments();

    Iterable<AssignmentListResponse> getAllAssignmentList();

    Assignment deleteAssignment(DeleteStatusRequest deleteStatusRequest, Long id) throws AssignmentNotFoundException;

    Assignment updateAssignment(AssignmentRequest assignmentRequest, String id) throws AssignmentNotFoundException, ProjectNotFoundException;
}
