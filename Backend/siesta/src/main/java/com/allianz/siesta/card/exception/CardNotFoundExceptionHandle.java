package com.allianz.siesta.card.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class CardNotFoundExceptionHandle {
    @ResponseBody
    @ExceptionHandler({CardNotFoundException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String cardNotFoundExceptionHandler(CardNotFoundException ex){
        return ex.getMessage();
    }
}
