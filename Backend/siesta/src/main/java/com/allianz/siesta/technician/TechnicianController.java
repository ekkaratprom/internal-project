package com.allianz.siesta.technician;

import com.allianz.siesta.technician.service.TechnicianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
public class TechnicianController {

    @Autowired
    private TechnicianService technicianService;

    @CrossOrigin
    @PostMapping(value = "/v1/addskillset")
    public Technician addSkillSet(@RequestBody TechnicianRequest technicianRequest){
        return technicianService.addSkillSet(technicianRequest);
    }

    @CrossOrigin
    @GetMapping(value = "/v1/skillset")
    public Iterable<Technician> getAllSkillSets(){
        return technicianService.getAllSkillSets();
    }

}
