package com.allianz.guild.account.dto;

import java.io.Serializable;

import com.allianz.guild.account.data.entity.Account;
import com.allianz.guild.account.data.entity.AccountSetting;

public class AccountInfo implements Serializable {

	private static final long serialVersionUID = -3683505274982212027L;
	
	private Long id;
	private String name;
	private String email;


	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public Account toAccount() {
		Account account = new Account();
		account.setId(id);
		account.setName(name);
		account.setEmailAddress(email);
		return account;
	}
	
	public AccountInfo fromAccount(Account account) {
		AccountInfo accountInfo = new AccountInfo();
		accountInfo.setId(account.getId());
		accountInfo.setName(account.getName());
		accountInfo.setEmail(account.getEmailAddress());
		return accountInfo;
	}

}
