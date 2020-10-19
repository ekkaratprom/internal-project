package com.allianz.siesta.assignment;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;


public interface AssignmentRepository extends JpaRepository <Assignment, Long> {

    @Override
    @RestResource(exported = false)
    <S extends Assignment> S save(S s);


   @Query(value ="SELECT SUM(c.actual_time) AS totalActualTime FROM card c, assignment a " +
            "WHERE C.assignment_id = A.id " +
            "AND a.deleted_status IS FALSE " +
            "AND c.deleted_status IS FALSE " +
            "AND A.id = :id "+
            "GROUP BY  a.id, a.assignment_name, a.billable_time, a.estimate_time", nativeQuery = true)
    Double getTotalActualTime(@Param("id") Long id);

}
