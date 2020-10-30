package com.allianz.siesta.card;

import com.allianz.siesta.assignment.Assignment;
import com.allianz.siesta.user.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "card")
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "card_name")
    private String cardName;

    @Column( name = "card_description")
    private String cardDescription;

    @Column( name = "actual_time")
    private Double actualTime;

    @Column(name = "reference_link")
    private String referenceLink;

    @Column(name = "card_date")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date cardDate;

    @Column(name = "create_date")
    private Date createDate;

    @Column(name = "assigned_status")
    private Boolean assignedStatus;

    @Column(name = "completed_status")
    private Boolean completedStatus;

    @Column(name = "deleted_status")
    private Boolean deletedStatus;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true)
    @JsonManagedReference
    private User user;

    @ManyToOne
    @JoinColumn(name = "assignment_id", nullable = true)
    @JsonManagedReference
    private Assignment assignment;

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

    public String getCardDescription() {
        return cardDescription;
    }

    public void setCardDescription(String cardDescription) {
        this.cardDescription = cardDescription;
    }

    public Double getActualTime() {
        return actualTime;
    }

    public void setActualTime(Double actualTime) {
        this.actualTime = actualTime;
    }

    public String getReferenceLink() {
        return referenceLink;
    }

    public void setReferenceLink(String referenceLink) {
        this.referenceLink = referenceLink;
    }

    public Date getCardDate() {
        return cardDate;
    }

    public void setCardDate(Date cardDate) {
        this.cardDate = cardDate;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Boolean getAssignedStatus() {
        return assignedStatus;
    }

    public void setAssignedStatus(Boolean assignedStatus) {
        this.assignedStatus = assignedStatus;
    }

    public Boolean getCompletedStatus() {
        return completedStatus;
    }

    public void setCompletedStatus(Boolean completedStatus) {
        this.completedStatus = completedStatus;
    }

    public Boolean getDeletedStatus() {
        return deletedStatus;
    }

    public void setDeletedStatus(Boolean deletedStatus) {
        this.deletedStatus = deletedStatus;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Assignment getAssignment() {
        return assignment;
    }

    public void setAssignment(Assignment assignment) {
        this.assignment = assignment;
    }

    public Card() {
    }
}
