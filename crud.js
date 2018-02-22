import {Account, CheckingAccount, SavingsAccount} from './accounts'
import {validator, navigationHelper, collectionHelperCRUD, tableHelper, creator} from './app'
import {Creator} from './creator'
import {NavigationHelper} from './nav'
import {Validator} from './validation'
import {TableHelper} from './table_help'

export function CollectionHelperCRUD(){
	
	this.createNewAccount = function(account, callback){
		
		if (!validator.isEmpty(account)){
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "http://localhost:2403/accounts", true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send( JSON.stringify(account) );
			
			if (callback){
				callback();
			}

		}else{
			alert("Errors!");
		}
	}
	
	this.updateAccount = function(account, accountId, callback){
		if (!validator.isEmpty(account)){
			var xhr = new XMLHttpRequest();
			xhr.open("PUT", "http://localhost:2403/accounts/" + accountId, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send( JSON.stringify(account) );

			if (callback){
				callback();
			}

		}else{
			alert("Errors!");
		}
	}
	
	this.removeAccount = function(itemId){
		var xhr = new XMLHttpRequest();
		xhr.open("DELETE", "http://localhost:2403/accounts/" + itemId, false);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send();
		
		location.reload();
	}
	
	this.confirmRemoving = function(item){
		var flag = confirm("Remove this account?");
		
		if (flag){
			this.removeAccount(item.value);
		}
	}
	
	this.getAccountById = function(itemId, callback){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://localhost:2403/accounts/" + itemId, false);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send();
		
		var jsonObj = JSON.parse(xhr.responseText);

		if (callback){
			callback(jsonObj);
		}
		
		return jsonObj;
	}

	this.getAllAccounts = function(){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://localhost:2403/accounts", false);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send();

		return JSON.parse(xhr.responseText);
	}
}
