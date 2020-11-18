package com.allianz.siesta.card.response;
;
import java.math.BigInteger;
import java.util.Date;


public class CardResponse {
    private BigInteger cardId;
    private String cardName;
    private Double cardActualTime;
    private Date cardDate;

    public CardResponse(BigInteger cardId, String cardName, Double cardActualTime, Date cardDate) {
        this.cardId = cardId;
        this.cardName = cardName;
        this.cardActualTime = cardActualTime;
        this.cardDate = cardDate;
    }

    public BigInteger getCardId() {
        return cardId;
    }

    public void setCardId(BigInteger cardId) {
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
