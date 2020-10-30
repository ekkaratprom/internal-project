package com.allianz.siesta.assignment.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class AssignmentNotFoundExceptionHandle {
    @ResponseBody
    @ExceptionHandler({AssignmentNotFoundException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String assignmentNotFoundExceptionHandler(AssignmentNotFoundException ex){
        return ex.getMessage();
    }

}
