import {Account, CheckingAccount, SavingsAccount} from './accounts'
import {validator, navigationHelper, collectionHelperCRUD, tableHelper, creator} from './app'
import {Creator} from './creator'
import {CollectionHelperCRUD} from './crud'
import {NavigationHelper} from './nav'
import {Validator} from './validation'

export class TableHelper {

	constructor(){}

	fillTable(jsonObj){		
		alert("");
		var html = `<table><tr><td>Number</td><td>Type</td><td>PIN</td><td><p>Balance</p><p onclick='myApp.sortHelper.sortByBalance(myApp.tableHelper.fillTable)'>∧</p></td><td><p>Date of Creation</p><p onclick='myApp.sortHelper.sortByDate(myApp.tableHelper.fillTable)'>∧</p></td><td><p>User</p><p onclick='myApp.sortHelper.sortByUserName(myApp.tableHelper.fillTable)'>∧</p></td></tr>`;		
		var i;
		var item = null;
		var usdBalance = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});

		jsonObj[Symbol.iterator] = function(){
			var nextIndex = 0;

			return {	
	   			next(){
		   			return nextIndex < jsonObj.length ?
			   			{value: jsonObj[nextIndex++], done: false} :
			  		 	{done: true};
	   			}	
			}
		}

		for (let item of jsonObj) {
			html += `<tr id='${item.id}'>
				<td onclick='myApp.navigationHelper.getAccountDetails(this);'>${item.accountNumber}</td>
				<td>${item.accountType}</td>
				<td>${item.accountPIN}</td>
				<td>${usdBalance.format(item.accountBalance)}</td>
				<td>${item.dateOfAccountCreation.substring(0, 10)}</td>
				<td>${item.accountUser}</td>
				<td><button class='tableButtonEdit' value='${item.id}' onclick='myApp.navigationHelper.toUpdateAccount(this);'> Edit</button></td>
				<td><button class='tableButtonDelete' value='${item.id}' onclick='myApp.collectionHelperCRUD.confirmRemoving(this);'>Delete</button></td>
				</tr>`;
		}
			
		html += `</table>`;
		document.getElementById('shortTableOfAccounts').innerHTML=html;
	}
	
	fillDetailsTable(item){
		var usdBalance = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});

		document.getElementById("userHead").innerHTML = `Account User: ${item.accountUser.toUpperCase()}`;
		
		var html = `<table> 
		<tr><td>Account Number</td><td>${item.accountNumber}</td></tr>
		<tr><td>Account Balance</td><td>${usdBalance.format(item.accountBalance)}</td></tr>
		<tr><td>Account PIN</td><td>${item.accountPIN}</td></tr>
		<tr><td>Account Type</td><td>${item.accountType}</td></tr>
		<tr><td>Account Date of Creation</td><td>${item.dateOfAccountCreation.substring(0, 10)}</td></tr>`;
		
		if (item.accountType == "SavingsAccount"){
			html += `<tr><td>Savings Code</td><td>${item.savingsAccountCode}</td></tr>
			<tr><td>Organization</td><td>${item.organization.toUpperCase()}</td></tr>`;
		}else{
			html += `<tr><td>Savings Code</td><td>${item.checkingAccountCode}</td></tr>
			<tr><td>Organization</td><td>${item.organization.toUpperCase()}</td></tr>`;
		} 
		
		html += `</table>`;
		
		document.getElementById("accountDetailsTable").innerHTML = html;
	}
}

