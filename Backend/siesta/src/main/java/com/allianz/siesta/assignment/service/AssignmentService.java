package com.allianz.siesta.assignment.service;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.assignment.AssignmentListResponse;
import com.allianz.siesta.assignment.exception.AssignmentNotFoundException;
import com.allianz.siesta.assignment.request.AssignmentRequest;
import com.allianz.siesta.assignment.request.DeleteStatusRequest;
import com.allianz.siesta.project.Project;
import com.allianz.siesta.project.exception.ProjectNotFoundException;

import java.util.Optional;

public interface AssignmentService {

    Assignment addAssignment(AssignmentRequest assignmentRequest) throws ProjectNotFoundException;

    Iterable<Assignment> getAllAssignments();

    Iterable<AssignmentListResponse> getAllAssignmentList();

    Assignment deleteAssignment(DeleteStatusRequest deleteStatusRequest, Long id) throws AssignmentNotFoundException;

    Assignment updateAssignment(AssignmentRequest assignmentRequest, Long id) throws AssignmentNotFoundException, ProjectNotFoundException;
}
