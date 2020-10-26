package com.allianz.siesta.technician;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TechnicianRepository extends JpaRepository <Technician, Long> {

    List<Technician> findSkillByUserId(Long userId);
}
