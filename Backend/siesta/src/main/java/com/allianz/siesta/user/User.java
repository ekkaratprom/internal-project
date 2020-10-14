package com.allianz.siesta.user;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.allianz.siesta.card.Card;
import com.allianz.siesta.position.Position;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(nullable = false, name = "first_name")
    private String firstName;

    @Column(nullable = false, name = "last_name")
    private String lastName;

    @Column(nullable = false, name = "email")
    private String email;

    @Column(nullable = true, name = "update_date")
    private Date updateDate;

	@ManyToOne
	@JoinColumn(name = "position_id", nullable = false)
	@JsonManagedReference
	private Position position;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	@JsonBackReference
    private List<Card> cards = new ArrayList<Card>();

	public User() {
	}


}
