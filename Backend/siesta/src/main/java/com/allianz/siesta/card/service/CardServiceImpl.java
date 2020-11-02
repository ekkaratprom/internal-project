package com.allianz.siesta.card.service;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.assignment.AssignmentRepository;
import com.allianz.siesta.card.Card;
import com.allianz.siesta.card.CardRepository;
import com.allianz.siesta.card.request.CardRequest;
import com.allianz.siesta.card.request.DeleteStatusRequest;
import com.allianz.siesta.card.request.UpdateCardRequest;
import com.allianz.siesta.card.response.*;
import com.allianz.siesta.technician.Technician;
import com.allianz.siesta.technician.TechnicianRepository;
import com.allianz.siesta.user.User;
import com.allianz.siesta.user.UserRepository;
import com.allianz.siesta.card.response.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CardServiceImpl implements CardService{

    @Autowired
    private CardRepository cardRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private TechnicianRepository technicianRepository;

    @Autowired
    private UserRepository userRepository;
    

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
                cardResponse.setCardId(card.getId());

                assignmentResponse.getCardObj().add(cardResponse);

            }
            assignmentResponseList.add(assignmentResponse);
        }
        return assignmentResponseList;
    }


//    @Override
//    public Iterable<AssignmentRes> getAllCardsWithQuery() {
//        List<AssignmentRes> assignmentResList = new ArrayList<>();
//        Iterable<Assignment> assignments = assignmentRepository.findByDeletedStatus(false);
//        for (Assignment assignment : assignments) {
//            AssignmentRes assignmentRes = new AssignmentRes(
//                    assignment.getAssignmentName(),
//                    assignment.getBillableTime(),
//                    assignment.getEstimateTime(),
//                    assignment.getCompletedStatus()
//            );
//
//            assignmentRes.setCardObj(new ArrayList());
//            Double amtActualTime = 0d;
//            for (Card card : assignment.getCards()) {
//                // skip deleted cards
//                if (card.getDeletedStatus() == false) {
//                    CardResponse cardResponse = new CardResponse(
//                            card.getCardName(),
//                            card.getActualTime(),
//                            card.getCardDate()
//                    );
//                    assignmentRes.getCardObj().add(cardResponse);
//                    amtActualTime += card.getActualTime();
//                }
//            }
//
//            assignmentRes.setActualTime(amtActualTime);
//            assignmentResList.add(assignmentRes);
//        }
//        return assignmentResList;
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

//    @Override
//    public Iterable<CardListResponse> findCardListByAssignmentId(Long assignmentId) {
//        List<CardListResponse> cardListResponseList = new ArrayList<>();
//        Iterable<Card> cards =  cardRepository.findCardListByAssignmentId(assignmentId);
//        for (Card card : cards) {
//            CardListResponse cardListResponse = new CardListResponse(
//                    card.getId(),
//                    card.getCardName()
//            );
//            cardListResponseList.add(cardListResponse);
//        }
//        return cardListResponseList;
//    }

    @Override
    public Iterable<UserResponse> getAllAvailableTime() {
        List<UserResponse> userResponseList = new ArrayList<>();
        Iterable<User> users = userRepository.findAll();

        //userId + fullName + position
        for (User user : users) {
            List<Technician> techniciansList = technicianRepository.findSkillByUserId(user.getId());
            UserResponse userResponse = new UserResponse(
                    user.getId(),
                    user.getPosition().getPositionName()
            );
            //skils
            userResponse.setSkills(new ArrayList());
            for (Technician technician : techniciansList){
                SkillResponse skillResponse = new SkillResponse(
                        technician.getSkill().getSkillName(),
                        technician.getSkill().getIconPath()
                );
                userResponse.getSkills().add(skillResponse);
            }

            //Cards[]
            List<Object[]> cardList = cardRepository.getTotalActualTimeGroupByCardDate(user.getId());

            userResponse.setCards(new ArrayList());
            for (Object[] card : cardList) {
                Date cardDate = (Date)card[1];
                GroupByCardsResponse groupByCardsResponse = new GroupByCardsResponse(
                        (Double)card[0],
                        (Date)card[1]
                );
                List<Card> userCard = cardRepository.getCardByUserId(user.getId(), cardDate);
                //Card[]
                userResponse.getCards().add(groupByCardsResponse);
                groupByCardsResponse.setCard(new ArrayList());
                for (Card userCards : userCard) {
                    CardUserResponse cardUserResponse = new CardUserResponse(
                            userCards.getId(),
                            userCards.getCardName(),
                            userCards.getActualTime(),
                            userCards.getCreateDate()
                    );

                    groupByCardsResponse.getCard().add(cardUserResponse);
                }
            }
            //concat fullname = fname + lname
            String fullName = user.getFirstName() + " " + user.getLastName();
            userResponse.setFullName(fullName);

            userResponseList.add(userResponse);
        }
        return userResponseList;
    }

    @Override
    public Card updateCard(UpdateCardRequest updateCardRequest, Long id) {
        Card card = cardRepository.getOne(id);

        if (updateCardRequest.getActualTime() != null) {
            card.setActualTime(updateCardRequest.getActualTime());
            card.setCompletedStatus(Boolean.TRUE);
        }

        return cardRepository.save(card);
    }

    @Override
    public Card deleteCard(DeleteStatusRequest deleteStatusRequest, Long id) {
        Card card = cardRepository.getOne(id);

        if (deleteStatusRequest.getDeletedStatus() != null) {
            card.setDeletedStatus(deleteStatusRequest.getDeletedStatus());
        }

        return cardRepository.save(card);
    }
}