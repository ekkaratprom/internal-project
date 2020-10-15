package com.allianz.siesta.card;

import java.util.Date;

public class CardResponse {
    private String cardName;
    private Double cardActualTime;
    private Date cardDate;

    public CardResponse(String cardName, Double cardActualTime, Date cardDate) {
        this.cardName = cardName;
        this.cardActualTime = cardActualTime;
        this.cardDate = cardDate;
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
