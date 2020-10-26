package com.allianz.siesta.card.response;

public class CardListResponse {
    private Long id;
    private String cardName;

    public CardListResponse(Long id, String cardName) {
        this.id = id;
        this.cardName = cardName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }
}
