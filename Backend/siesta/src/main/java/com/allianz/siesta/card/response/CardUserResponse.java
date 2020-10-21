package com.allianz.siesta.card.response;

import java.util.Date;

public class CardUserResponse {
    private Long cardId;
    private String cardName;
    private Double actualTime;
    private Date createDate;

    public CardUserResponse(Long cardId, String cardName, Double actualTime, Date createDate) {
        this.cardId = cardId;
        this.cardName = cardName;
        this.actualTime = actualTime;
        this.createDate = createDate;
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

    public Double getActualTime() {
        return actualTime;
    }

    public void setActualTime(Double actualTime) {
        this.actualTime = actualTime;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
}
