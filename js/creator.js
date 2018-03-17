import {Account, CheckingAccount, SavingsAccount} from './accounts'
import {validator, navigationHelper, collectionHelperCRUD, tableHelper, creator} from './app'
import {CollectionHelperCRUD} from './crud'
import {NavigationHelper} from './nav'
import {Validator} from './validation'
import {TableHelper} from './table_help'

export class Creator {

	constructor() {}

	createAccountObject(){
		if (document.getElementById("checkingAccountInfo").hidden && document.getElementById("savingsAccountInfo").hidden){
			alert("Account type undefinded");
			return;
		}
		
		var obj = null;

		if (document.getElementById("checkingAccountInfo").hidden){
			obj = new SavingsAccount();
			obj.accountType = "SavingsAccount";                                        
			obj.savingsAccountCode = document.getElementById("savingsAccountCode").value;
			obj.organization = document.getElementById("sorganization").value;		
		}else if (document.getElementById("savingsAccountInfo").hidden){
			obj = new CheckingAccount(); 
			obj.accountType = "CheckingAccount";                                           
			obj.checkingAccountCode = document.getElementById("checkingAccountCode").value;
			obj.organization = document.getElementById("corganization").value;
			
		}

		obj.accountNumber = document.getElementById("accountNumber").value;
		obj.accountPIN = document.getElementById("accountPIN").value;
		obj.accountBalance = document.getElementById("accountBalance").value;
		obj.dateOfAccountCreation = new Date(document.getElementById("dateOfAccountCreation").value);
		obj.accountUser = document.getElementById("accountUser").value;
			
		return obj;
	}
}
