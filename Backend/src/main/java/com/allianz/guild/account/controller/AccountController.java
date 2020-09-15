package com.allianz.guild.account.controller;

import com.allianz.guild.account.data.repository.AccountRepository;
import com.allianz.guild.account.dto.AccountResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.allianz.guild.account.data.entity.Account;
import com.allianz.guild.account.dto.AccountInfo;
import com.allianz.guild.account.service.AccountService;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AccountController {
	
	@Autowired
	private AccountService accountService;
	private AccountRepository accountRepository;
	
	@PostMapping(path = "/account")
	public Account saveAccount(@RequestBody AccountInfo accountInfo) {
		return accountService.saveAccount(accountInfo);
	}
	
	@GetMapping(path = "/account/{id}")
	public AccountInfo findAccount(@PathVariable(name = "id") Long id) {
		return accountService.findAccount(id);
	}

	@CrossOrigin
	@GetMapping("/account")
	public List<AccountResponse> findAllAccount(){
		List<AccountResponse> accountResponsesList = new ArrayList<>();
		Iterable<Account> accounts = accountService.findAll();
		for (Account account : accounts) {
			accountResponsesList.add(
					new AccountResponse(
							account.getId(),
							account.getName(),
							account.getEmailAddress()
					)
			);
		}
		return accountResponsesList;
	}
}
