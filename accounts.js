export function Account(accountNumber, accountType, accountPIN, accountBalance, dateOfAccountCreation, accountUser){
	this.accountNumber = accountNumber;
	this.accountType = accountType;
	this.accountPIN = accountPIN;
	this.accountBalance = accountBalance;
	this.dateOfAccountCreation = dateOfAccountCreation;
	this.accountUser = accountUser;
	
	this.setAccountNumber = function(accountNumber){
		this.accountNumber = accountNumber;
	}
	
	this.getAccountNumber = function(){
		return this.accountNumber;
	}
	
	this.setAccountType = function(accountType){
		this.accountType = accountType;
	}
	
	this.getAccountType = function(){
		return this.accountType;
	}
	
	this.setAccountPIN = function(accountPIN){
		this.accountPIN = accountPIN;
	}
	
	this.getAccountPIN = function(){
		return this.accountPIN;
	}
	
	this.setAccountBalance = function(accountBalance){
		this.accountBalance = accountBalance;
	}
	
	this.getAccountBalance = function(){
		return this.accountBalance;
	}
	
	this.setDateOfAccountCreation = function(dateOfAccountCreation){
		this.dateOfAccountCreation = dateOfAccountCreation;
	}
	
	this.getDateOfAccountCreation = function(){
		return this.dateOfAccountCreation;
	}
	
	this.setAccountUser = function(accountUser){
		this.accountUser = accountUser;
	}
	
	this.getAccountUser = function(){
		return this.accountUser;
	}
}

export function CheckingAccount(checkingAccountCode, organization){
	Account.call(this);
	this.checkingAccountCode = checkingAccountCode;
	this.organization = organization;
	
	this.setCheckingAccountCode = function(checkingAccountCode){
		this.checkingAccountCode = checkingAccountCode;
	}
	
	this.getCheckingAccountCode = function(){
		return this.checkingAccountCode;
	}
	
	this.setOrganization = function(organization){
		this.organization = organization;
	}
	
	this.getOrganization = function(){
		return this.organization;
	}
}

export function SavingsAccount(savingsAccountCode, organization){
	Account.call(this);
	
	this.setSavingsAccountCode = function(savingsAccountCode){
		this.savingsAccountCode = savingsAccountCode;
	}
	
	this.getSavingsAccountCode = function(){
		return this.savingsAccountCode;
	}
	
	this.setOrganization = function(organization){
		this.organization = organization;
	}
	
	this.getOrganization = function(){
		return this.organization;
	}
}
