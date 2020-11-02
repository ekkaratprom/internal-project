package com.allianz.siesta.card;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.assignment.request.AssignmentRequest;
import com.allianz.siesta.card.request.CardRequest;
import com.allianz.siesta.card.request.DeleteStatusRequest;
import com.allianz.siesta.card.request.UpdateCardRequest;
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

    @CrossOrigin
    @PatchMapping(path = "/v1/{id}/updatecard")
    public Card updateCard(@PathVariable (value = "id") Long id, @RequestBody UpdateCardRequest updateCardRequest) {
        return cardService.updateCard(updateCardRequest, id);
    }

    @CrossOrigin
    @PatchMapping(path = "/v1/{id}/updatedeletestatus")
    public Card deleteCard(@PathVariable (value = "id") Long id, @RequestBody DeleteStatusRequest deleteStatusRequest) {
        return cardService.deleteCard(deleteStatusRequest, id);
    }
}
