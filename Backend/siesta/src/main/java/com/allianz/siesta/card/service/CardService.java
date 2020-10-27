package com.allianz.siesta.card.service;

import com.allianz.siesta.card.Card;
import com.allianz.siesta.card.request.CardRequest;
import com.allianz.siesta.card.request.DeleteStatusRequest;
import com.allianz.siesta.card.request.UpdateCardRequest;
import com.allianz.siesta.card.response.AssignmentResponse;
import com.allianz.siesta.card.response.UserResponse;

public interface CardService {

    Iterable<AssignmentResponse> getAllCards();

    Card addCard(CardRequest cardRequest);

    Iterable<UserResponse> getAllAvailableTime();

    Card updateCard(UpdateCardRequest updateCardRequest, Long id);

    Card deleteCard(DeleteStatusRequest deleteStatusRequest, Long id);

}
