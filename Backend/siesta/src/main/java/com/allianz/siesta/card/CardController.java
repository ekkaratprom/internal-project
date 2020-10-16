package com.allianz.siesta.card;

import com.allianz.siesta.card.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class CardController {

    @Autowired
    private CardService cardService;

    @CrossOrigin
    @GetMapping(path = "/v1/card")
    public Iterable<AssignmentResponse> getAllCards() {
        return cardService.getAllCards();
    }

    @CrossOrigin
    @GetMapping(path = "/v2/card")
    public Iterable<AssignmentResponse> getAllCardsWithQuery() {
        return cardService.getAllCardsWithQuery();
    }
}
