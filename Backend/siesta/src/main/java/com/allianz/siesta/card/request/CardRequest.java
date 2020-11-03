package com.allianz.siesta.card.request;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.card.Card;
import com.allianz.siesta.user.User;

import java.util.Date;

public class CardRequest {
    private Long assignmentId;
    private Long userId;
    private String cardName;
    private Double actualTime;
    private Date cardDate;

    public CardRequest(Long assignmentId, Long userId, String cardName, Double actualTime, Date cardDate) {
        this.assignmentId = assignmentId;
        this.userId = userId;
        this.cardName = cardName;
        this.actualTime = actualTime;
        this.cardDate = cardDate;
    }

    public Long getAssignmentId() {
        return assignmentId;
    }

    public void setAssignmentId(Long assignmentId) {
        this.assignmentId = assignmentId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public Double getActualTime() {
        return actualTime;
    }

    public void setActualTime(Double actualTime) {
        this.actualTime = actualTime;
    }

    public Date getCardDate() {
        return cardDate;
    }

    public void setCardDate(Date cardDate) {
        this.cardDate = cardDate;
    }

    public Card cardRequest() {
        Card card = new Card();
        card.setAssignment(new Assignment(assignmentId));
        card.setUser(new User(userId));
        card.setActualTime(actualTime);
        card.setCardName(cardName);
        card.setCardDate(cardDate);

        return card;
    }
}
