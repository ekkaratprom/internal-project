package com.allianz.siesta.assignment;

import com.allianz.siesta.assignment.exception.AssignmentNotFoundException;
import com.allianz.siesta.assignment.request.AssignmentRequest;
import com.allianz.siesta.assignment.request.DeleteStatusRequest;
import com.allianz.siesta.assignment.service.AssignmentService;
import com.allianz.siesta.project.exception.ProjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/api")
public class AssignmentController {

    @Autowired
    private AssignmentService assignmentService;


    @PostMapping(value = "/v1/addAssignment")
    public ResponseEntity<Assignment> addAssignment(@RequestBody AssignmentRequest assignmentRequest) throws ProjectNotFoundException {
        return ResponseEntity.accepted().body(assignmentService.addAssignment(assignmentRequest));
    }

//    @PostMapping(value = "/v2/addAssignment")
//    public ResponseEntity<List<AssignmentRequest>> addAssignments(@RequestBody List<AssignmentRequest> assignmentRequestList)  {
//        return ResponseEntity.accepted().body(assignmentService.addAssignments(assignmentRequestList));
//    }


    @GetMapping(path = "/v1/assignment")
    public Iterable<Assignment> getAllAssignments() {
        return assignmentService.getAllAssignments();
    }



    @GetMapping(value = "/v2/assignmentlist")
    public Iterable<AssignmentListResponse> getAllAssignmentList() {
        return assignmentService.getAllAssignmentList();
    }



    @PatchMapping(value = "/v1/{id}/deleteassignment")
    public ResponseEntity<Assignment> deleteAssignment (@PathVariable(value = "id") Long id, @RequestBody DeleteStatusRequest deleteStatusRequest) throws AssignmentNotFoundException {
        return ResponseEntity.accepted().body(assignmentService.deleteAssignment(deleteStatusRequest, id));
    }


    @PatchMapping(value = "/v1/{id}/updateassignment")
    public ResponseEntity<Assignment> updateAssignment(@PathVariable(value = "id") String id, @RequestBody AssignmentRequest assignmentRequest) throws AssignmentNotFoundException, ProjectNotFoundException {
        return ResponseEntity.accepted().body(assignmentService.updateAssignment(assignmentRequest, id));
    }
}
