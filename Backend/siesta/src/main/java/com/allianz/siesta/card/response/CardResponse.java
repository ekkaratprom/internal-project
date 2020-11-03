package com.allianz.siesta.card.response;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import java.util.Date;


public class CardResponse {
    private Long cardId;
    private String cardName;
    private Double cardActualTime;
    private Date cardDate;

    public CardResponse(String cardName, Double cardActualTime, Date cardDate) {
        this.cardName = cardName;
        this.cardActualTime = cardActualTime;
        this.cardDate = cardDate;
    }

    public Long getCardId() {
        return cardId;
    }

    public void setCardId(Long cardId) {
        this.cardId = cardId;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public Double getCardActualTime() {
        return cardActualTime;
    }

    public void setCardActualTime(Double cardActualTime) {
        this.cardActualTime = cardActualTime;
    }

    public Date getCardDate() {
        return cardDate;
    }

    public void setCardDate(Date cardDate) {
        this.cardDate = cardDate;
    }
}
