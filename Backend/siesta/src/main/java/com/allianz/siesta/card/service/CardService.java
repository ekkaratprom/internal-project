package com.allianz.siesta.card.service;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.assignment.AssignmentRequest;
import com.allianz.siesta.card.Card;
import com.allianz.siesta.card.CardRequest;
import com.allianz.siesta.card.response.AssignmentResponse;

public interface CardService {

    Iterable<AssignmentResponse> getAllCards();

    Iterable<AssignmentResponse> getAllCardsWithQuery();

    Card addCard(CardRequest cardRequest);

}
