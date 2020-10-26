package com.allianz.siesta.position.service;

import com.allianz.siesta.position.Position;
import com.allianz.siesta.position.PositionRequest;

public interface PositionService {

    Position addNewPosition(PositionRequest positionRequest);

    Iterable<Position> getAllPositions();
}
