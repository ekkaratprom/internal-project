package com.allianz.siesta.card;

import com.allianz.siesta.card.exception.CardNotFoundException;
import com.allianz.siesta.card.request.CardRequest;
import com.allianz.siesta.card.request.DeleteStatusRequest;
import com.allianz.siesta.card.request.UpdateCardRequest;
import com.allianz.siesta.card.response.AssignmentResponse;
import com.allianz.siesta.card.service.CardService;
import com.allianz.siesta.card.response.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/api")
public class CardController {

    @Autowired
    private CardService cardService;

    @GetMapping(path = "/v1/card")
    public Iterable<AssignmentResponse> getAllCards() {
        return cardService.getAllCards();
    }


    @PostMapping(path = "/v1/addcard")
    public ResponseEntity<Card> addCard(@RequestBody CardRequest cardRequest) {
        return ResponseEntity.accepted().body(cardService.addCard(cardRequest));
    }

    @PostMapping(path = "/v2/addcards")
    public ResponseEntity<List<CardRequest>> addCards(@RequestBody List<CardRequest> cardRequestList) {
        return ResponseEntity.accepted().body(cardService.addCards(cardRequestList));
    }

    @GetMapping(path = "/v1/availabletime")
    public Iterable<UserResponse> getAllAvailableTime() {
        return cardService.getAllAvailableTime();
    }


    @PatchMapping(path = "/v1/{id}/updatecard")
    public ResponseEntity<Card> updateCard(@PathVariable (value = "id") Long id, @RequestBody UpdateCardRequest updateCardRequest) throws CardNotFoundException {
        return ResponseEntity.accepted().body(cardService.updateCard(updateCardRequest, id));
    }


    @PatchMapping(path = "/v1/{id}/updatedeletestatus")
    public ResponseEntity<Card> deleteCard(@PathVariable (value = "id") Long id, @RequestBody DeleteStatusRequest deleteStatusRequest) throws CardNotFoundException{
        return ResponseEntity.accepted().body(cardService.deleteCard(deleteStatusRequest, id));
    }

}
