package com.allianz.siesta.card.service;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.assignment.AssignmentRepository;
import com.allianz.siesta.card.Card;
import com.allianz.siesta.card.CardRepository;
import com.allianz.siesta.card.AssignmentResponse;
import com.allianz.siesta.card.CardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CardServiceImpl implements CardService{

    @Autowired
    private CardRepository cardRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Override
    public Iterable<AssignmentResponse> getAllCards() {
        List<AssignmentResponse> assignmentResponseList = new ArrayList<>();
        Iterable<Assignment> assignments = assignmentRepository.findAll();
        for (Assignment assignment : assignments) {
            AssignmentResponse assignmentResponse = new AssignmentResponse(
                    assignment.getAssignmentName(),
                    assignment.getBillableTime(),
                    assignment.getEstimateTime()
            );

            assignmentResponse.setCardObj(new ArrayList());
            Double amtActualTime = 0d;
            for (Card card : assignment.getCards()) {
                CardResponse cardResponse = new CardResponse(
                        card.getCardName(),
                        card.getActualTime(),
                        card.getCardDate()
                );
                assignmentResponse.getCardObj().add(cardResponse);
                amtActualTime += card.getActualTime();
            }

            assignmentResponse.setActualTime(amtActualTime);
            assignmentResponseList.add(assignmentResponse);
        }
        return assignmentResponseList;
    }
}
