package com.allianz.siesta.card.service;

import com.allianz.siesta.card.AssignmentResponse;
import com.allianz.siesta.card.CardRequest;

public interface CardService {

    Iterable<AssignmentResponse> getAllCards();

    Iterable<AssignmentResponse> getAllCardsWithQuery();
}
