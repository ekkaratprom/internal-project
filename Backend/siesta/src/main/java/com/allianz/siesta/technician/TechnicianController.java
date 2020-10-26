package com.allianz.siesta.technician;

import com.allianz.siesta.technician.service.TechnicianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class TechnicianController {

    @Autowired
    private TechnicianService technicianService;

}
