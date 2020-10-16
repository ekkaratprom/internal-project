package com.allianz.siesta.assignment;

import com.allianz.siesta.card.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

public interface AssignmentRepository extends JpaRepository <Assignment, Long> {

    @Override
    @RestResource(exported = false)
    <S extends Assignment> S save(S s);

    Iterable<Assignment> findByDeletedStatus(Boolean deletedStatus);
}
