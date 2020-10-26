package com.allianz.siesta.position.service;

import com.allianz.siesta.position.Position;
import com.allianz.siesta.position.PositionRepository;

import com.allianz.siesta.position.PositionRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PositionServiceImpl implements PositionService {

    @Autowired
    private PositionRepository positionRepository;


    @Override
    public Position addNewPosition(PositionRequest positionRequest){
        Position position = positionRequest.positionRequest();
        return positionRepository.save(position);
    }

    @Override
    public Iterable<Position> getAllPositions() {
        return positionRepository.findAll();
    }
}
