package com.allianz.siesta.card.service;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.assignment.AssignmentRepository;
import com.allianz.siesta.card.Card;
import com.allianz.siesta.card.CardRepository;
import com.allianz.siesta.card.exception.CardNotFoundException;
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

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

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
        List<Assignment> assignments = assignmentRepository.findByDeletedStatus(Boolean.FALSE);
        for (Assignment assignment : assignments) {


            Double totalActualTime = assignmentRepository.getTotalActualTime(assignment.getId());
            List<Card> cardList = cardRepository.getCardByAssignmentId(assignment.getId());

                AssignmentResponse assignmentResponse = new AssignmentResponse(
                        assignment.getId(),
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
                List<Object[]> userCard = cardRepository.getCardByUserId(user.getId(), cardDate);

                userResponse.getCards().add(groupByCardsResponse);
                //Card[]
                groupByCardsResponse.setCard(new ArrayList());
                for (Object[] userCards : userCard) {
                    CardUserResponse cardUserResponse = new CardUserResponse(
                            (BigInteger)userCards[0],
                            (String)userCards[1],
                            (Double)userCards[2],
                            (Date)userCards[3]
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
    public Card updateCard(UpdateCardRequest updateCardRequest, Long id) throws CardNotFoundException {
        verifyCardId(id);
        Card card = cardRepository.getOne(id);

        if (updateCardRequest.getActualTime() != null) {
            card.setActualTime(updateCardRequest.getActualTime());
            card.setCompletedStatus(Boolean.TRUE);
        }

        return cardRepository.save(card);
    }

    @Override
    public Card deleteCard(DeleteStatusRequest deleteStatusRequest, Long id) throws CardNotFoundException {
        verifyCardId(id);
        Card card = cardRepository.getOne(id);

        if (deleteStatusRequest.getDeletedStatus() != null) {
            card.setDeletedStatus(deleteStatusRequest.getDeletedStatus());
        }

        return cardRepository.save(card);
    }

    //check assignmentId
    private Card verifyCardId (Long id) throws CardNotFoundException {
        return cardRepository.findById(id).orElseThrow(() ->
                new CardNotFoundException("error"));
    };
}