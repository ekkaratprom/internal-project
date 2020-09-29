package com.allianz.siesta.user;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.rest.core.annotation.RestResource;

public interface UserRepository extends JpaRepository<User, Long> {

    @Override
    @RestResource(exported = false)
    <S extends User> S save(S s);
}
