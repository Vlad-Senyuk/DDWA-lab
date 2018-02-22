import {Account, CheckingAccount, SavingsAccount} from './accounts'
import {validator, navigationHelper, collectionHelperCRUD, tableHelper, creator} from './app'
import {Creator} from './creator'
import {CollectionHelperCRUD} from './crud'
import {NavigationHelper} from './nav'
import {TableHelper} from './table_help'

export function Validator(account){
	
	var validationMessage = "Field is emty";
	
	this.isEmpty = function(account){
		var flag = false;
		
		if (account.getAccountNumber() == ''){
			flag = true;
			document.getElementById("accountNumberInfo").innerHTML = validationMessage;
		}
		
		if (account.getAccountPIN() == 0){
			flag = true;
			document.getElementById("accountPINInfo").innerHTML = validationMessage;
		}
		
		if (account.getAccountBalance() == 0){
			flag = true;
			document.getElementById("accountBalanceInfo").innerHTML = validationMessage;
		}
		
		if (account.getAccountUser() == ''){
			flag = true;
			document.getElementById("accountUserInfo").innerHTML = validationMessage;
		}
		
		var cDate = null;
		
		
		if((cDate = new Date(account.getDateOfAccountCreation())) == 'Invalid Date'){
			flag = true;
			document.getElementById("dateInfo").innerHTML = 'Invalid Date';
		}
							
		if(account.getDateOfAccountCreation() == undefined){
			flag = true;
			document.getElementById("dateInfo").innerHTML = validationMessage;
		}
						
		return flag;
	}
}