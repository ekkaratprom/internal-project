package com.allianz.siesta.card.service;

import com.allianz.siesta.card.Card;
import com.allianz.siesta.card.exception.CardNotFoundException;
import com.allianz.siesta.card.request.CardRequest;
import com.allianz.siesta.card.request.DeleteStatusRequest;
import com.allianz.siesta.card.request.UpdateCardRequest;
import com.allianz.siesta.card.response.AssignmentResponse;
import com.allianz.siesta.card.response.UserResponse;

import java.util.List;


public interface CardService {

    Iterable<AssignmentResponse> getAllCards();

    Card addCard(CardRequest cardRequest);

    List<CardRequest> addCards(List<CardRequest> cardRequestList);


    Iterable<UserResponse> getAllAvailableTime();

    Card updateCard(UpdateCardRequest updateCardRequest, Long id) throws CardNotFoundException;

    Card deleteCard(DeleteStatusRequest deleteStatusRequest, Long id) throws CardNotFoundException;

}
