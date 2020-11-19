package com.allianz.siesta.assignment;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;


public interface AssignmentRepository extends JpaRepository <Assignment, Long> {

    @Override
    @RestResource(exported = false)
    <S extends Assignment> S save(S s);

    List<Assignment> findByDeletedStatus(Boolean deletedStatus);


   @Query(value ="SELECT SUM(c.estimate_time) AS totalEstimateTime,SUM(c.actual_time) AS totalActualTime FROM card c, assignment a " +
            "WHERE C.assignment_id = A.id " +
            "AND a.deleted_status IS FALSE " +
            "AND c.deleted_status IS FALSE " +
            "AND A.id = :id "+
            "GROUP BY  a.id, a.assignment_name, a.billable_time, a.estimate_time", nativeQuery = true)
    List<Object[]> getTotalEstimateAndActualTime(@Param("id") Long id);

    @Query(value = "SELECT id, assignment_name, billable_time, estimate_time, completed_status, end_date FROM assignment WHERE deleted_status IS FALSE", nativeQuery = true)
    List<Object[]> getUndeletedAllAssignment();

}
