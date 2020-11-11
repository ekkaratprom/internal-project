package com.allianz.siesta.assignment.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class AssignmentNotFoundException extends Exception {

    public AssignmentNotFoundException(String message) {
        super("Assignment not found!");
    }


}
