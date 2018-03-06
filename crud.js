import {Account, CheckingAccount, SavingsAccount} from './accounts'
import {validator, navigationHelper, collectionHelperCRUD, tableHelper, creator} from './app'
import {Creator} from './creator'
import {NavigationHelper} from './nav'
import {Validator} from './validation'
import {TableHelper} from './table_help'

export class CollectionHelperCRUD {

	constructor() {
		this._url = "http://localhost:2403/accounts";
		this._myHeaders = new Headers();
		this._myHeaders.append("Content-Type", "application/json");
	}

	get url(){
		return this._url;
	}

	get myHeaders(){
		return this._myHeaders;
	}
	
	async createNewAccount(account){
		if (!validator.isEmpty(account)){
			await fetch(this.url, {method: 'POST', headers: this.myHeaders, body: JSON.stringify(account)});
		}
	}
	
	async updateAccount(account, accountId){		
		if (!validator.isEmpty(account)){
			await fetch(`${this.url}/${accountId}`, {method: 'PUT', headers: this.myHeaders, body: JSON.stringify(account)})
		}
	}
	
	async removeAccount(itemId){
		await fetch(`${this.url}/${itemId}`, {method: 'DELETE', headers: this.myHeaders})
				.then(function(response){
					location.reload();
				});		
	}
	
	confirmRemoving(item){	
		if ( confirm("Remove this account?") ){
			this.removeAccount(item.value);
		}
	}
	
	async getAccountById(itemId){
		let item = await fetch(`${this.url}/${itemId}`, {method: 'GET', headers: this.myHeaders})
				.then(function(response){
					return response.json();
				})
				.then(function(body){
					return body;
				});

		return item;
	}

	async getAllAccounts(){
		var items = await fetch(this.url, {method: 'GET', headers: this.myHeaders})
				.then(function(response){
					return response.json();
				})
				.then(function(body){
					return body;
				});

		return items;
	}
}
