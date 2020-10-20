package com.allianz.siesta.card;

import com.allianz.siesta.assignment.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CardRepository extends JpaRepository <Card, Long> {

    Iterable<Card> findCardListByAssignmentId(Long assignmentId);

    @Query(value="SELECT * FROM CARD " +
            "WHERE deleted_status IS FALSE " +
            "AND assignment_id = :id ", nativeQuery = true)
    List<Card> getCardByAssignmentId(@Param("id") Long id);

}
