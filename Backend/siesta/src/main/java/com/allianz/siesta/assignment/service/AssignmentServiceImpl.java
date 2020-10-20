package com.allianz.siesta.assignment.service;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.assignment.AssignmentRepository;
import com.allianz.siesta.assignment.AssignmentRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssignmentServiceImpl implements AssignmentService {

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Override
    public Assignment addAssignment(AssignmentRequest assignmentRequest) {
        Assignment assignment = assignmentRequest.assignmentRequest();
        assignment.setDeletedStatus(false);
        return assignmentRepository.save(assignment);
    }

    @Override
    public Iterable<Assignment> getAllAssignments(){
        return assignmentRepository.findAll();
    }

    @Override
    public Assignment editAssignment(AssignmentRequest assignmentRequest) {
        Assignment assignment = assignmentRequest.assignmentRequest();
        return assignmentRepository.save(assignment);
    }
}
