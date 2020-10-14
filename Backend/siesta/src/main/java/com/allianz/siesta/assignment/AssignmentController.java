package com.allianz.siesta.assignment;


import com.allianz.siesta.assignment.service.AssignmentService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
public class AssignmentController {

    @Autowired
    private AssignmentService assignmentService;

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

}
