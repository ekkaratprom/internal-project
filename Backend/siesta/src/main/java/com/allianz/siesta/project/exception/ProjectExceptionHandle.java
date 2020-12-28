package com.allianz.siesta.project.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ProjectExceptionHandle {
    @ResponseBody
    @ExceptionHandler({ProjectNotFoundException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String projectNotFoundExceptionHandler(ProjectNotFoundException ex){
        return ex.getMessage();
    }
}