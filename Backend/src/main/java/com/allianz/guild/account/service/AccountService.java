package com.allianz.guild.account.service;

import com.allianz.guild.account.data.entity.Account;
import com.allianz.guild.account.dto.AccountInfo;

import java.util.List;

public interface AccountService {
	
	Account saveAccount(AccountInfo account);
	
	AccountInfo findAccount(Long id);

	Iterable<Account> findAll();

//	Iterable<Account> findAll();
}
