package com.allianz.siesta.card;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;
import java.util.Objects;

public interface CardRepository extends JpaRepository <Card, Long> {

    Iterable<Card> findCardListByAssignmentId(Long assignmentId);

    @Query(value="SELECT card_name, actual_time, card_date, id FROM CARD " +
            "WHERE deleted_status IS FALSE " +
            "AND assignment_id = :id ", nativeQuery = true)
    List<Object[]> getCardByAssignmentId(@Param("id") Long id);

    @Query(value = "SELECT SUM(COALESCE(actual_time,0.0)) AS totalActualTime, " +
            "DATE(card_date) AS cardDate " +
            "FROM card " +
            "WHERE deleted_status IS FALSE " +
            "AND user_id = :id " +
            "GROUP BY DATE(card_date) ", nativeQuery = true)
    List<Object[]> getTotalActualTimeGroupByCardDate(@Param("id") Long id);

    @Query(value = "SELECT c.id, c.card_name, c.actual_time, c.create_date, a.assignment_name FROM card c, assignment a " +
            "WHERE c.deleted_status IS FALSE " +
            "AND c.assignment_id = a.id " +
            "AND c.user_id = :id " +
            "AND c.card_date = :cardDate", nativeQuery = true)
    List<Object[]> getCardByUserId(@Param("id") Long id, @Param("cardDate") Date cardDate);

}
