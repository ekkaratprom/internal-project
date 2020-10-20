package com.allianz.siesta.card;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.card.response.AssignmentResponse;
import com.allianz.siesta.card.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

//    @CrossOrigin
//    @GetMapping(path = "/v2/card")
//    public Iterable<AssignmentResponse> getAllCardsWithQuery() {
//        return cardService.getAllCardsWithQuery();
//    }

    @CrossOrigin
    @PostMapping(path = "/v1/addcard")
    public Card addCard(@RequestBody CardRequest cardRequest) {
        return cardService.addCard(cardRequest);
    }

    @CrossOrigin
    @GetMapping(value = "/v1/cardlist/{assignmentId}")
    public Iterable<Card> getCardList(@PathVariable(value = "assignmentId") Long assignmentId){

    return cardService.findCardListByAssignmentId(assignmentId);
    }

}
