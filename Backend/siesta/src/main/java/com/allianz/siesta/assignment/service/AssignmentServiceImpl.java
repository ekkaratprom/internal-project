package com.allianz.siesta.assignment.service;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.assignment.AssignmentListResponse;
import com.allianz.siesta.assignment.AssignmentRepository;
import com.allianz.siesta.assignment.request.AssignmentRequest;
import com.allianz.siesta.assignment.request.DeleteStatusRequest;
import com.allianz.siesta.project.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
    public Iterable<AssignmentListResponse> getAllAssignmentList() {
        List<AssignmentListResponse> assignmentListResponseArrayList = new ArrayList<>();
        Iterable<Assignment> assignments = assignmentRepository.findAll();
        for (Assignment assignment : assignments) {
            AssignmentListResponse assignmentListResponse = new AssignmentListResponse(
                    assignment.getId(),
                    assignment.getAssignmentName()
            );
            assignmentListResponseArrayList.add(assignmentListResponse);
        }
        return assignmentListResponseArrayList;
    }

    @Override
    public Assignment deleteAssignment(DeleteStatusRequest deleteStatusRequest, Long id) {
        Assignment assignmentOptional = assignmentRepository.getOne(id);

        assignmentOptional.setDeletedStatus(deleteStatusRequest.getDeletedStatus());

        return assignmentRepository.save(assignmentOptional);
    }

    @Override
    public Assignment updateAssignment(AssignmentRequest assignmentRequest, Long id) {
        Assignment assignment = assignmentRepository.getOne(id);

        if (assignmentRequest.getAssignmentName() != null) {
            assignment.setAssignmentName(assignmentRequest.getAssignmentName());
        }

        if (assignmentRequest.getBillableTime() != null) {
            assignment.setBillableTime(assignmentRequest.getBillableTime());
        }

        if (assignmentRequest.getEstimateTime() != null) {
            assignment.setEstimateTime(assignmentRequest.getEstimateTime());
        }

        if (assignmentRequest.getCompletedStatus() != null) {
            assignment.setCompletedStatus(assignmentRequest.getCompletedStatus());
        }

        if (assignmentRequest.getProjectId() != null ){
            assignment.setProject(new Project(assignmentRequest.getProjectId()));
        }

        return assignmentRepository.save(assignment);
    }
}
