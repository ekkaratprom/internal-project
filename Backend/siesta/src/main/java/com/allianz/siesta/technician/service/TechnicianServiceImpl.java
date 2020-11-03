package com.allianz.siesta.technician.service;

import com.allianz.siesta.technician.Technician;
import com.allianz.siesta.technician.TechnicianRepository;
import com.allianz.siesta.technician.TechnicianRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TechnicianServiceImpl implements TechnicianService {

    @Autowired
    private TechnicianRepository technicianRepository;

    @Override
    public Technician addSkillSet(TechnicianRequest technicianRequest){
        Technician technician = technicianRequest.technicianRequest();
        return technicianRepository.save(technician);
    }

    @Override
    public Iterable<Technician> getAllSkillSets(){
        return technicianRepository.findAll();
    }
}
