package com.allianz.siesta.card.response;
import java.util.Date;
import java.util.List;

public class GroupByCardsResponse {
    private Double totalEstimateTime;
    private Double totalActualTime;
    private Date cardDate;
    private List card;

    public GroupByCardsResponse(Double totalEstimateTime, Double totalActualTime, Date cardDate) {
        this.totalEstimateTime = totalEstimateTime;
        this.totalActualTime = totalActualTime;
        this.cardDate = cardDate;
    }

    public Double getTotalEstimateTime() {
        return totalEstimateTime;
    }

    public void setTotalEstimateTime(Double totalEstimateTime) {
        this.totalEstimateTime = totalEstimateTime;
    }

    public List getCard() {
        return card;
    }

    public void setCard(List card) {
        this.card = card;
    }

    public Double getTotalActualTime() {
        return totalActualTime;
    }

    public void setTotalActualTime(Double totalActualTime) {
        this.totalActualTime = totalActualTime;
    }

    public Date getCardDate() {
        return cardDate;
    }

    public void setCardDate(Date cardDate) {
        this.cardDate = cardDate;
    }
}
