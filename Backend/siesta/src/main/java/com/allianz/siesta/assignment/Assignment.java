package com.allianz.siesta.assignment;

import com.allianz.siesta.card.Card;
import com.allianz.siesta.project.Project;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "assignment")
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(nullable = true, name = "assignment_name")
    private String assignmentName;

    @Column(nullable = true, name = "billable_time")
    private Double billableTime;

    @Column(nullable = true, name = "estimate_time")
    private Double estimateTime;

    @Column(nullable = true, name = "actual_time")
    private Double actualTime;

    @Column(nullable = true, name = "end_date")
    private Date endDate;

    @Column(nullable = true, name = "completed_status")
    private Boolean completedStatus;

    @Column(nullable = true, name = "deleted_status")
    private Boolean deletedStatus;

    @OneToMany(mappedBy = "assignment", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<Card> cards = new ArrayList<Card>();

    @ManyToOne
    @JoinColumn(name = "project_id", nullable = true)
    @JsonManagedReference
    private Project project;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAssignmentName() {
        return assignmentName;
    }

    public void setAssignmentName(String assignmentName) {
        this.assignmentName = assignmentName;
    }

    public Double getBillableTime() {
        return billableTime;
    }

    public void setBillableTime(Double billableTime) {
        this.billableTime = billableTime;
    }

    public Double getEstimateTime() {
        return estimateTime;
    }

    public void setEstimateTime(Double estimateTime) {
        this.estimateTime = estimateTime;
    }

    public Double getActualTime() {
        return actualTime;
    }

    public void setActualTime(Double actualTime) {
        this.actualTime = actualTime;
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

    public List<Card> getCards() {
        return cards;
    }

    public void setCards(List<Card> cards) {
        this.cards = cards;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Assignment() {
    }

    public Assignment(Long id) {
        this.id = id;
    }
}
