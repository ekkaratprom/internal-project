package com.allianz.siesta.assignment.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class AssignmentIdException extends Exception {

    public AssignmentIdException(String message) {
        super("Wrong data format!");
    }

    public AssignmentIdException(String message, Throwable cause) {
        super(message, cause);
    }

}
