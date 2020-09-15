package com.allianz.guild.account.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.allianz.guild.account.data.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {

}
