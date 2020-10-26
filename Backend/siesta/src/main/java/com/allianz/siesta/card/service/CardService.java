package com.allianz.siesta.card.service;

import com.allianz.siesta.card.Card;
import com.allianz.siesta.card.CardRequest;
import com.allianz.siesta.card.response.AssignmentResponse;
import com.allianz.siesta.card.response.UserResponse;

public interface CardService {

    Iterable<AssignmentResponse> getAllCards();

//    Iterable<CardListResponse> findCardListByAssignmentId(Long assignmentId);

    Card addCard(CardRequest cardRequest);

    Iterable<UserResponse> getAllAvailableTime();

}
