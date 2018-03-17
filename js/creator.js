import {Account, CheckingAccount, SavingsAccount} from './accounts'
import {validator, navigationHelper, collectionHelperCRUD, tableHelper, creator} from './app'
import {CollectionHelperCRUD} from './crud'
import {NavigationHelper} from './nav'
import {Validator} from './validation'
import {TableHelper} from './table_help'

export class Creator {

	constructor() {}

	createAccountObject(){
		if ($('#checkingAccountInfo').attr('hidden') && $('#savingsAccountInfo').attr('hidden')){
			alert("Account type undefinded");
			return;
		}
		
		var obj = null;

		if ($('#checkingAccountInfo').attr('hidden')){
			obj = new SavingsAccount();
			obj.accountType = "SavingsAccount";                                        
			obj.savingsAccountCode = $("#savingsAccountCode").val();
			obj.organization = $("#sorganization").val();		
		}else if ($('#savingsAccountInfo').attr('hidden')){
			obj = new CheckingAccount(); 
			obj.accountType = "CheckingAccount";                                           
			obj.checkingAccountCode = $("#checkingAccountCode").val();
			obj.organization = $("#corganization").val();
			
		}

		obj.accountNumber = $("#accountNumber").val();
		obj.accountPIN = $("#accountPIN").val();
		obj.accountBalance = $("#accountBalance").val();
		obj.dateOfAccountCreation = new Date($("#dateOfAccountCreation").val());
		obj.accountUser = $("#accountUser").val();
			
		return obj;
	}
}
