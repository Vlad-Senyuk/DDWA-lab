export class Account{

	constructor(accountNumber, accountType, accountPIN, accountBalance, dateOfAccountCreation, accountUser) {
		this._accountNumber = accountNumber;
		this._accountType = accountType;
		this._accountPIN = accountPIN;
		this._accountBalance = accountBalance;
		this._dateOfAccountCreation = dateOfAccountCreation;
		this._accountUser = accountUser;
	}
	
	set accountNumber(accountNumber){
		this._accountNumber = accountNumber;
	}
	
	get accountNumber(){
		return this._accountNumber;
	}
	
	set accountType(accountType){
		this._accountType = accountType;
	}
	
	get accountType(){
		return this._accountType;
	}
	
	set accountPIN(accountPIN){
		this._accountPIN = accountPIN;
	}
	
	get accountPIN(){
		return this._accountPIN;
	}
	
	set accountBalance(accountBalance){
		this._accountBalance = accountBalance;
	}
	
	get accountBalance(){
		return this._accountBalance;
	}
	
	set dateOfAccountCreation(dateOfAccountCreation){
		this._dateOfAccountCreation = dateOfAccountCreation;
	}
	
	get dateOfAccountCreation(){
		return this._dateOfAccountCreation;
	}
	
	set accountUser(accountUser){
		this._accountUser = accountUser;
	}
	
	get accountUser(){
		return this._accountUser;
	}

	toJSON(){
		return {
			accountNumber : this._accountNumber,
			accountType : this._accountType,
			accountPIN : this._accountPIN, 
			accountBalance : this._accountBalance, 
			dateOfAccountCreation : this._dateOfAccountCreation, 
			accountUser : this._accountUser
		};
	}
};

export class CheckingAccount extends Account {

	constructor(accountNumber, accountType, accountPIN, accountBalance, dateOfAccountCreation, accountUser, checkingAccountCode, organization) {
		super(accountNumber, accountType, accountPIN, accountBalance, dateOfAccountCreation, accountUser);
		this._checkingAccountCode = checkingAccountCode;
		this._organization = organization;
	}
		
	set checkingAccountCode(checkingAccountCode){
		this._checkingAccountCode = checkingAccountCode;
	}
	
	get checkingAccountCode(){
		return this._checkingAccountCode;
	}
	
	set organization(organization){
		this._organization = organization;
	}
	
	get organization(){
		return this._organization;
	}

	toJSON(){
		return {
			accountNumber : this._accountNumber,
			accountType : this._accountType,
			accountPIN : this._accountPIN, 
			accountBalance : this._accountBalance, 
			dateOfAccountCreation : this._dateOfAccountCreation, 
			accountUser : this._accountUser,
			checkingAccountCode : this._checkingAccountCode,
			organization : this._organization
		};
	}
};

export class SavingsAccount extends Account{

	constructor(accountNumber, accountType, accountPIN, accountBalance, dateOfAccountCreation, accountUser, savingsAccountCode, organization){
		super(accountNumber, accountType, accountPIN, accountBalance, dateOfAccountCreation, accountUser);
		this._savingsAccountCode = savingsAccountCode;
		this._organization = organization;
	}
	
	set savingsAccountCode(savingsAccountCode){
		this._savingsAccountCode = savingsAccountCode;
	}
	
	get savingsAccountCode(){
		return this._savingsAccountCode;
	}
	
	set organization(organization){
		this._organization = organization;
	}
	
	get organization(){
		return this._organization;
	}

	toJSON(){
		return {
			accountNumber : this._accountNumber,
			accountType : this._accountType,
			accountPIN : this._accountPIN, 
			accountBalance : this._accountBalance, 
			dateOfAccountCreation : this._dateOfAccountCreation, 
			accountUser : this._accountUser,
			savingsAccountCode : this._savingsAccountCode,
			organization : this._organization
		};
	}
};
