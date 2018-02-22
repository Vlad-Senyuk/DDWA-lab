import {Account, CheckingAccount, SavingsAccount} from './accounts'
import {validator, navigationHelper, collectionHelperCRUD, tableHelper, creator} from './app'
import {Creator} from './creator'
import {CollectionHelperCRUD} from './crud'
import {NavigationHelper} from './nav'
import {Validator} from './validation'

export function TableHelper(){
	
	this.fillTable = function(){
		var jsonObj = myApp.collectionHelperCRUD.getAllAccounts();		
		var html = "<table><tr><td>Number</td><td>Type</td><td>PIN</td><td>Balance</td><td>Date of Creation</td><td>User</td></tr>";
		
		var i;
		for (i = 0; i < jsonObj.length; i++){
			html += "<tr id='" + jsonObj[i].id + "'>"
			+ '<td onclick="myApp.navigationHelper.getAccountDetails(this);">' + jsonObj[i].accountNumber + "</td> "
			+ '<td>' + jsonObj[i].accountType + "</td>"
			+ '<td>' + jsonObj[i].accountPIN + "</td>"
			+ '<td>' + jsonObj[i].accountBalance + "</td>"
			+ '<td>' + jsonObj[i].dateOfAccountCreation.substring(0, 10) + "</td>"
			+ '<td>' + jsonObj[i].accountUser + '</td>'
			+ "<td>" + "<button class='tableButtonEdit' value='" + jsonObj[i].id + "' onclick='myApp.navigationHelper.toUpdateAccount(this);'> Edit</button>" + "</td>"
			+ "<td>" + "<button class='tableButtonDelete' value='" + jsonObj[i].id + "' onclick='myApp.collectionHelperCRUD.confirmRemoving(this);'>Delete</button>" + "</td>"
			+ "</tr>"
		}
		
		html += "</table>"
		
		document.getElementById('shortTableOfAccounts').innerHTML=html;
	}
	
	this.fillDetailsTable = function(item){
		document.getElementById("userHead").innerHTML = "Account User: " + item.accountUser;
		
		var html = "<table>" + 
		"<tr><td>Account Number</td>" + "<td>" + item.accountNumber + "</td>" + "</tr>" +
		"<tr><td>Account Balance</td>" + "<td>" + item.accountBalance + "</td>" + + "</tr>" +
		"<tr><td>Account PIN</td>" + "<td>" + item.accountPIN + "</td>" + + "</tr>" +
		"<tr><td>Account Type</td>" + "<td>" + item.accountType + "</td>" + + "</tr>" +
		"<tr><td>Account Date of Creation</td>" + "<td>" + item.dateOfAccountCreation.substring(0, 10) + "</td>" + "</tr>";
		
		if (item.accountType == "SavingsAccount"){
			html += "<tr><td>Savings Code</td>" + "<td>" + item.savingsAccountCode + "</td>" + "</tr>" +
			"<tr><td>Organization</td>" + "<td>" + item.organization + "</td>" + "</tr>";
		}else{
			html += "<tr><td>Cheking Code</td>" + "<td>" + item.checkingAccountCode + "</td>" + "</tr>" +
			"<tr><td>Organization</td>" + "<td>" + item.organization + "</td>" + "</tr>";
		} 
		
		html += '</table>'
		
		document.getElementById("accountDetailsTable").innerHTML = html;
	}
}

