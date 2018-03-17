import {Account, CheckingAccount, SavingsAccount} from './accounts'
import {validator, navigationHelper, collectionHelperCRUD, tableHelper, creator} from './app'
import {Creator} from './creator'
import {CollectionHelperCRUD} from './crud'
import {NavigationHelper} from './nav'
import {TableHelper} from './table_help'

export class Validator {

	constructor(account){
		this.account = account;
	}
		
	isEmpty(account){
		var flag = false;
		const validationMessage = "Field is emty";

		let {_accountNumber, _accountPIN, _accountBalance, _accountUser} = account;
		
		if (_accountNumber == ''){
			flag = true;
			document.getElementById("accountNumberInfo").innerHTML = validationMessage;
		}
		
		if (_accountPIN == 0){
			flag = true;
			document.getElementById("accountPINInfo").innerHTML = validationMessage;
		}
		
		if (_accountBalance == 0){
			flag = true;
			document.getElementById("accountBalanceInfo").innerHTML = validationMessage;
		}
		
		if (_accountUser == ''){
			flag = true;
			document.getElementById("accountUserInfo").innerHTML = validationMessage;
		}
		
		var cDate = null;	
		
		if((cDate = new Date(account.dateOfAccountCreation)) == 'Invalid Date'){
			flag = true;
			document.getElementById("dateInfo").innerHTML = 'Invalid Date';
		}
							
		if(account.dateOfAccountCreation == undefined){
			flag = true;
			document.getElementById("dateInfo").innerHTML = validationMessage;
		}
						
		return flag;
	}
}