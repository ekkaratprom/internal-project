package com.allianz.siesta.technician.service;

import com.allianz.siesta.technician.Technician;
import com.allianz.siesta.technician.TechnicianRequest;

public interface TechnicianService {

    Technician addSkillSet(TechnicianRequest technicianRequest);

    Iterable<Technician> getAllSkillSets();
}
