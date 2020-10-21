package com.allianz.siesta.card.response;

import java.util.List;

public class UserResponse {
    private Long userId;
    private String fullName;
    private String position;
    private List skills;
    private List cards;

    public UserResponse(Long userId, String position) {
        this.userId = userId;
        this.position = position;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public List getSkills() {
        return skills;
    }

    public void setSkills(List skills) {
        this.skills = skills;
    }

    public List getCards() {
        return cards;
    }

    public void setCards(List cards) {
        this.cards = cards;
    }
}
