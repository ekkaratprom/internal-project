package com.allianz.siesta.position;


import com.allianz.siesta.position.service.PositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
public class PositionController {

    @Autowired
    private PositionService positionService;

    @CrossOrigin
    @GetMapping(path = "/v1/getallposition")
    public Iterable<Position> getAllPositions() {
        return positionService.getAllPositions();
    }

    @CrossOrigin
    @PostMapping(path = "/v2/addposition")
    public Position addPosition(@RequestBody PositionRequest positionRequest){
        return positionService.addNewPosition(positionRequest);
    }
}
