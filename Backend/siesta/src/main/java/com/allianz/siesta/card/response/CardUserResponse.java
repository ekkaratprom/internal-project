package com.allianz.siesta.card.response;

import java.math.BigInteger;
import java.util.Date;

public class CardUserResponse {
    private BigInteger cardId;
    private String cardName;
    private Double estimateTime;
    private Double actualTime;
    private Date createDate;
    private String assignmentName;

    public CardUserResponse(BigInteger cardId, String cardName, Double estimateTime, Double actualTime, Date createDate, String assignmentName) {
        this.cardId = cardId;
        this.cardName = cardName;
        this.estimateTime = estimateTime;
        this.actualTime = actualTime;
        this.createDate = createDate;
        this.assignmentName = assignmentName;
    }

    public Double getEstimateTime() {
        return estimateTime;
    }

    public void setEstimateTime(Double estimateTime) {
        this.estimateTime = estimateTime;
    }

    public String getAssignmentName() {
        return assignmentName;
    }

    public void setAssignmentName(String assignmentName) {
        this.assignmentName = assignmentName;
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
