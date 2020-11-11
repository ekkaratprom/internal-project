package com.allianz.siesta.project.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ProjectNotFoundException extends Exception{
    public ProjectNotFoundException(String message) {
        super("Project not found!");
    }
}
