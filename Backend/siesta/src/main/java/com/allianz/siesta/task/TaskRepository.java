package com.allianz.siesta.task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;


public interface TaskRepository extends JpaRepository<Task, Long> {

    @Override
    @RestResource(exported = false)
    <S extends Task> S save(S s);
}


