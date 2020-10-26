package com.allianz.siesta.position;


public class PositionRequest {
    private String positionName;

    public PositionRequest(String positionName) {
        this.positionName = positionName;
    }

    public String getPositionName() {
        return positionName;
    }

    public void setPositionName(String positionName) {
        this.positionName = positionName;
    }

    public PositionRequest() {
    }

    public Position positionRequest() {
        Position position = new Position();
        position.setPositionName(positionName);

        return position;
    }
}
