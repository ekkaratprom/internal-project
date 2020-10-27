package com.allianz.siesta.assignment;


import com.allianz.siesta.assignment.request.AssignmentRequest;
import com.allianz.siesta.assignment.request.DeleteStatusRequest;
import com.allianz.siesta.assignment.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "/api")
public class AssignmentController {

    @Autowired
    private AssignmentService assignmentService;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @CrossOrigin
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/v1/addAssignment")
    public Assignment addAssignment(@RequestBody AssignmentRequest assignmentRequest) {
        return assignmentService.addAssignment(assignmentRequest);
    }

    @CrossOrigin
    @GetMapping(path = "/v1/assignment")
    public Iterable<Assignment> getAllAssignments() {
        return assignmentService.getAllAssignments();
    }

    @CrossOrigin
    @GetMapping(value = "/v2/assignmentlist")
    public Iterable<AssignmentListResponse> getAllAssignmentList() {
        return assignmentService.getAllAssignmentList();
    }

    @CrossOrigin
    @PatchMapping(value = "/v1/{id}/deleteassignment")
    public Assignment deleteAssignment(@PathVariable(value = "id") Long id, @RequestBody DeleteStatusRequest deleteStatusRequest) {
        return assignmentService.deleteAssignment(deleteStatusRequest, id);
    }

    @CrossOrigin
    @PatchMapping(value = "/v1/{id}/updateassignment")
    public Assignment updateAssignment(@PathVariable(value = "id") Long id, @RequestBody AssignmentRequest assignmentRequest) {
        return assignmentService.updateAssignment(assignmentRequest, id);
    }
}
