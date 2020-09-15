package com.allianz.guild.account.service.impl;

import liquibase.pro.packaged.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allianz.guild.account.data.entity.Account;
import com.allianz.guild.account.data.repository.AccountRepository;
import com.allianz.guild.account.dto.AccountInfo;
import com.allianz.guild.account.service.AccountService;

import java.util.List;

@Service
public class AccountServiceImpl implements AccountService {
	
	@Autowired
	private AccountRepository accountRepository;


	@Override
	public Account saveAccount(AccountInfo accountInfo) {
		return accountRepository.save(accountInfo.toAccount());
	}

	@Override
	public AccountInfo findAccount(Long id) {
		return new AccountInfo().fromAccount(accountRepository.getOne(id));
	}

	@Override
	public Iterable<Account> findAll() {
		return accountRepository.findAll();
	}

}
