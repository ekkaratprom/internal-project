package com.allianz.siesta.task;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.rest.core.annotation.RestResource;

import java.util.Date;
import java.util.List;


public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByTaskDate (String taskDate);

    @Override
    @RestResource(exported = false)
    <S extends Task> S save(S s);

}


