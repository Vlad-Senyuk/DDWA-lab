import {Account, CheckingAccount, SavingsAccount} from './accounts'
import {validator, navigationHelper, collectionHelperCRUD, tableHelper, creator} from './app'
import {CollectionHelperCRUD} from './crud'
import {NavigationHelper} from './nav'
import {Validator} from './validation'
import {TableHelper} from './table_help'

export function Creator(){
	this.createAccountObject = function(){
		if (document.getElementById("checkingAccountInfo").hidden && document.getElementById("savingsAccountInfo").hidden){
			alert("Account type undefinded");
			return;
		}
		
		var obj = null;
		
		if (document.getElementById("checkingAccountInfo").hidden){
			var obj = new SavingsAccount();
			obj.setAccountNumber(document.getElementById("accountNumber").value);
			obj.setAccountType("SavingsAccount");
			obj.setAccountPIN(document.getElementById("accountPIN").value)
			obj.setAccountBalance(document.getElementById("accountBalance").value);
			obj.setDateOfAccountCreation(new Date(document.getElementById("dateOfAccountCreation").value));
			obj.setAccountUser(document.getElementById("accountUser").value);                                        
			obj.setSavingsAccountCode(document.getElementById("savingsAccountCode").value);
			obj.setOrganization(document.getElementById("sorganization").value);
			
		}else{
			var obj = new CheckingAccount();
			obj.setAccountNumber(document.getElementById("accountNumber").value);
			obj.setAccountType("CheckingAccount");
			obj.setAccountPIN(document.getElementById("accountPIN").value)
			obj.setAccountBalance(document.getElementById("accountBalance").value);
			obj.setDateOfAccountCreation(new Date(document.getElementById("dateOfAccountCreation").value));
			obj.setAccountUser(document.getElementById("accountUser").value);                                            
			obj.setCheckingAccountCode(document.getElementById("checkingAccountCode").value);
			obj.setOrganization(document.getElementById("corganization").value);
			
		}
		
		return obj;
	}
}
