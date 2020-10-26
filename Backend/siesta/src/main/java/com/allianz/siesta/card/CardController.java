package com.allianz.siesta.card;

import com.allianz.siesta.card.response.AssignmentResponse;
import com.allianz.siesta.card.service.CardService;
import com.allianz.siesta.card.response.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping(path = "/v1/addcard")
    public Card addCard(@RequestBody CardRequest cardRequest) {
        return cardService.addCard(cardRequest);
    }


    @CrossOrigin
    @GetMapping(path = "/v1/availabletime")
    public Iterable<UserResponse> getAllAvailableTime() {
        return cardService.getAllAvailableTime();
    }

}
