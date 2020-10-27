package com.allianz.siesta.card.response;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;

public class GroupByCardsResponse {
    private Double totalActualTime;
    private Date cardDate;
    private List card;

    public GroupByCardsResponse(Double totalActualTime, Date cardDate) {
        this.totalActualTime = totalActualTime;
        this.cardDate = cardDate;
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
