package com.allianz.siesta.assignment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;

public interface AssignmentRepository extends JpaRepository <Assignment, Long> {

    @Override
    @RestResource(exported = false)
    <S extends Assignment> S save(S s);
}
