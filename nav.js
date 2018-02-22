import {Account, CheckingAccount, SavingsAccount} from './accounts'
import {validator, navigationHelper, collectionHelperCRUD, tableHelper, creator} from './app'
import {Creator} from './creator'
import {CollectionHelperCRUD} from './crud'
import {Validator} from './validation'
import {TableHelper} from './table_help'

export function NavigationHelper(){
	
	this.toUpdateAccount = function(item){
		var id = item.value;
		document.location.replace("./create_account.html?item=" + id);
	}
	
	this.getAccountDetails = function(itemId){
		document.location.replace("./details.html?item=" + itemId.parentNode.id);
	}
	
	this.selectCheckingAccountType = function(){
		document.getElementById("checkingAccountInfo").hidden = false;
		document.getElementById("savingsAccountInfo").hidden = true;
	}
	
	this.selectSavingsAccountType = function(){
		document.getElementById("savingsAccountInfo").hidden = false;
		document.getElementById("checkingAccountInfo").hidden = true;
	}

	this.fillAccountFields = function(jsonObj){
		if (jsonObj.accountType == "CheckingAccount"){
			document.getElementById("accountTypeChecking").checked = true;
			document.getElementById("checkingAccountInfo").hidden = false;
			document.getElementById("checkingAccountCode").value = jsonObj.checkingAccountCode;
			document.getElementById("corganization").value = jsonObj.organization;
		}else{
			document.getElementById("accountTypeSavings").checked = true;
			document.getElementById("savingsAccountInfo").hidden = false;
			document.getElementById("savingsAccountCode").value = jsonObj.savingsAccountCode;
			document.getElementById("sorganization").value = jsonObj.organization;
		}
		
		document.getElementById("accountNumber").value = jsonObj.accountNumber;
		document.getElementById("accountPIN").value = jsonObj.accountPIN;
		document.getElementById("accountBalance").value = jsonObj.accountBalance;
		document.getElementById("dateOfAccountCreation").value = jsonObj.dateOfAccountCreation.substring(0, 10);
		document.getElementById("accountUser").value = jsonObj.accountUser; 
	}

	this.completeOperation = function(){
		alert("Operation completed");
		document.location.href = "./index.html";
	}
}
