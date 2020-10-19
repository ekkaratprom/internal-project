package com.allianz.siesta.card.service;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.assignment.AssignmentRepository;
import com.allianz.siesta.card.Card;
import com.allianz.siesta.card.CardRepository;
import com.allianz.siesta.card.CardRequest;
import com.allianz.siesta.card.response.AssignmentResponse;
import com.allianz.siesta.card.response.CardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static java.lang.Boolean.FALSE;

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

            Double totalActualTime = assignmentRepository.getTotalActualTime(assignment.getId());
            List<Card> cardList = cardRepository.getCardByAssignmentId(assignment.getId());

            AssignmentResponse assignmentResponse = new AssignmentResponse(
                    assignment.getAssignmentName(),
                    assignment.getBillableTime(),
                    assignment.getEstimateTime(),
                    assignment.getCompletedStatus(),
                    totalActualTime
            );

            assignmentResponse.setCardObj(new ArrayList());
            for (Card card : cardList) {
                CardResponse cardResponse = new CardResponse(
                        card.getCardName(),
                        card.getActualTime(),
                        card.getCardDate()
                );

                assignmentResponse.getCardObj().add(cardResponse);

            }
            assignmentResponseList.add(assignmentResponse);
        }
        return assignmentResponseList;
    }


//    @Override
//    public Iterable<AssignmentResponse> getAllCardsWithQuery() {
//        List<AssignmentResponse> assignmentResponseList = new ArrayList<>();
//        Iterable<Assignment> assignments = assignmentRepository.findByDeletedStatus(false);
//        for (Assignment assignment : assignments) {
//            AssignmentResponse assignmentResponse = new AssignmentResponse(
//                    assignment.getAssignmentName(),
//                    assignment.getBillableTime(),
//                    assignment.getEstimateTime(),
//                    assignment.getCompletedStatus()
//            );
//
//            assignmentResponse.setCardObj(new ArrayList());
//            Double amtActualTime = 0d;
//            for (Card card : assignment.getCards()) {
//                // skip deleted cards
//                if (card.getDeletedStatus() == false) {
//                    CardResponse cardResponse = new CardResponse(
//                            card.getCardName(),
//                            card.getActualTime(),
//                            card.getCardDate()
//                    );
//                    assignmentResponse.getCardObj().add(cardResponse);
//                    amtActualTime += card.getActualTime();
//                }
//            }
//
//            assignmentResponse.setActualTime(amtActualTime);
//            assignmentResponseList.add(assignmentResponse);
//        }
//        return assignmentResponseList;
//    }

    @Override
    public Card addCard(CardRequest cardRequest) {
        Card card = cardRequest.cardRequest();
        card.setCompletedStatus(false);
        card.setDeletedStatus(false);
        card.setCreateDate(new Date());
        card.setAssignedStatus(true);

        return cardRepository.save(card);
    }

    @Override
    public Iterable<Card> findCardListByAssignmentId(Long assignmentId) {
        return cardRepository.findCardListByAssignmentId(assignmentId);
    }


}
