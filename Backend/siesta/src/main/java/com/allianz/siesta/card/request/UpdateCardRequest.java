package com.allianz.siesta.card.request;

public class UpdateCardRequest {
    private Double estimateTime;
    private Double actualTime;

    public Double getActualTime() {
        return actualTime;
    }

    public void setActualTime(Double actualTime) {
        this.actualTime = actualTime;
    }


    public Double getEstimateTime() {
        return estimateTime;
    }

    public void setEstimateTime(Double estimateTime) {
        this.estimateTime = estimateTime;
    }

    public UpdateCardRequest() {
    }
}
