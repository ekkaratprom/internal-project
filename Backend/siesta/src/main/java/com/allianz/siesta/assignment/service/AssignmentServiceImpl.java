package com.allianz.siesta.assignment.service;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.assignment.AssignmentListResponse;
import com.allianz.siesta.assignment.AssignmentRepository;
import com.allianz.siesta.assignment.exception.AssignmentIdException;
import com.allianz.siesta.assignment.exception.AssignmentNotFoundException;
import com.allianz.siesta.assignment.request.AssignmentRequest;
import com.allianz.siesta.assignment.request.DeleteStatusRequest;
import com.allianz.siesta.card.Card;
import com.allianz.siesta.card.CardRepository;
import com.allianz.siesta.card.exception.CardNotFoundException;
import com.allianz.siesta.project.Project;
import com.allianz.siesta.project.ProjectRepository;
import com.allianz.siesta.project.exception.ProjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class AssignmentServiceImpl implements AssignmentService {

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private CardRepository cardRepository;

    @Override
    public Assignment addAssignment(AssignmentRequest assignmentRequest) throws ProjectNotFoundException {
        verifyProjectId(assignmentRequest.getProjectId());

            Assignment assignment = assignmentRequest.assignmentRequest();
            assignment.setDeletedStatus(false);


        return assignmentRepository.save(assignment);
    }

//    @Override
//    public List<AssignmentRequest> addAssignments(List<AssignmentRequest> assignmentRequestList){
//        for (AssignmentRequest assignmentRequest : assignmentRequestList) {
//            Assignment assignment = assignmentRequest.assignmentRequest();
//            assignment.setDeletedStatus(false);
//
//            assignmentRepository.save(assignment);
//        }
//        return assignmentRequestList;
//    }

    @Override
    public Iterable<Assignment> getAllAssignments(){
        return assignmentRepository.findAll();
    }


    @Override
    public Iterable<AssignmentListResponse> getAllAssignmentList() {
        List<AssignmentListResponse> assignmentListResponseArrayList = new ArrayList<>();
        Iterable<Assignment> assignments = assignmentRepository.findByDeletedStatus(false);
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
    public Assignment deleteAssignment(DeleteStatusRequest deleteStatusRequest, String assignmentId) throws AssignmentIdException, AssignmentNotFoundException {
        //check assignmentId
        Long id = verifyAssignmentId(assignmentId);
        verifyAssignmentIdIsExist(id);

        Assignment assignmentOptional = assignmentRepository.getOne(id);

        //set deletedStatus all card of assignment to true
        Iterable<Card> cardList = cardRepository.findCardListByAssignmentId(id);
        for(Card card : cardList) {
            card.setDeletedStatus(deleteStatusRequest.getDeletedStatus());
            cardRepository.save(card);
        }

        assignmentOptional.setDeletedStatus(deleteStatusRequest.getDeletedStatus());
        return assignmentRepository.save(assignmentOptional);

    }

    @Override
    public Assignment updateAssignment(AssignmentRequest assignmentRequest, String assignmentId) throws AssignmentIdException, ProjectNotFoundException, AssignmentNotFoundException {
        //check assignmentId
        Long id = verifyAssignmentId(assignmentId);
        verifyAssignmentIdIsExist(id);
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

        if (assignmentRequest.getProjectId() != null ) {
            //check projectId
            verifyProjectId(assignmentRequest.getProjectId());
            assignment.setProject(new Project(assignmentRequest.getProjectId()));
        }

        return assignmentRepository.save(assignment);
    }

    //check projectId
    private Project verifyProjectId (Long id) throws ProjectNotFoundException {
        return projectRepository.findById(id).orElseThrow(() ->
                new ProjectNotFoundException("error"));
    }


    //check assignmentId
    private Long verifyAssignmentId (String assingmentId) throws AssignmentIdException {
      Long id =  0L;
        try {
           id =  Long.parseLong(assingmentId);
        } catch (Exception e) {
            throw  new AssignmentIdException("error");
        }
        return id;
    }

    private Assignment verifyAssignmentIdIsExist (Long id) throws AssignmentNotFoundException {
        return assignmentRepository.findById(id).orElseThrow(() ->
                new AssignmentNotFoundException("error"));
    };



}
