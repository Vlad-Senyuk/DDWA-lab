var myApp =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationHelper", function() { return navigationHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectionHelperCRUD", function() { return collectionHelperCRUD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableHelper", function() { return tableHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validator", function() { return validator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return creator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accounts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__creator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_help__ = __webpack_require__(6);







var navigationHelper = new __WEBPACK_IMPORTED_MODULE_3__nav__["a" /* NavigationHelper */]();
var collectionHelperCRUD = new __WEBPACK_IMPORTED_MODULE_2__crud__["a" /* CollectionHelperCRUD */]();
var tableHelper = new __WEBPACK_IMPORTED_MODULE_5__table_help__["a" /* TableHelper */]();
var validator = new __WEBPACK_IMPORTED_MODULE_4__validation__["a" /* Validator */]();
var creator = new __WEBPACK_IMPORTED_MODULE_1__creator__["a" /* Creator */]();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Account */
/* harmony export (immutable) */ __webpack_exports__["a"] = CheckingAccount;
/* harmony export (immutable) */ __webpack_exports__["b"] = SavingsAccount;
function Account(accountNumber, accountType, accountPIN, accountBalance, dateOfAccountCreation, accountUser){
	this.accountNumber = accountNumber;
	this.accountType = accountType;
	this.accountPIN = accountPIN;
	this.accountBalance = accountBalance;
	this.dateOfAccountCreation = dateOfAccountCreation;
	this.accountUser = accountUser;
	
	this.setAccountNumber = function(accountNumber){
		this.accountNumber = accountNumber;
	}
	
	this.getAccountNumber = function(){
		return this.accountNumber;
	}
	
	this.setAccountType = function(accountType){
		this.accountType = accountType;
	}
	
	this.getAccountType = function(){
		return this.accountType;
	}
	
	this.setAccountPIN = function(accountPIN){
		this.accountPIN = accountPIN;
	}
	
	this.getAccountPIN = function(){
		return this.accountPIN;
	}
	
	this.setAccountBalance = function(accountBalance){
		this.accountBalance = accountBalance;
	}
	
	this.getAccountBalance = function(){
		return this.accountBalance;
	}
	
	this.setDateOfAccountCreation = function(dateOfAccountCreation){
		this.dateOfAccountCreation = dateOfAccountCreation;
	}
	
	this.getDateOfAccountCreation = function(){
		return this.dateOfAccountCreation;
	}
	
	this.setAccountUser = function(accountUser){
		this.accountUser = accountUser;
	}
	
	this.getAccountUser = function(){
		return this.accountUser;
	}
}

function CheckingAccount(checkingAccountCode, organization){
	Account.call(this);
	this.checkingAccountCode = checkingAccountCode;
	this.organization = organization;
	
	this.setCheckingAccountCode = function(checkingAccountCode){
		this.checkingAccountCode = checkingAccountCode;
	}
	
	this.getCheckingAccountCode = function(){
		return this.checkingAccountCode;
	}
	
	this.setOrganization = function(organization){
		this.organization = organization;
	}
	
	this.getOrganization = function(){
		return this.organization;
	}
}

function SavingsAccount(savingsAccountCode, organization){
	Account.call(this);
	
	this.setSavingsAccountCode = function(savingsAccountCode){
		this.savingsAccountCode = savingsAccountCode;
	}
	
	this.getSavingsAccountCode = function(){
		return this.savingsAccountCode;
	}
	
	this.setOrganization = function(organization){
		this.organization = organization;
	}
	
	this.getOrganization = function(){
		return this.organization;
	}
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Creator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accounts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_help__ = __webpack_require__(6);







function Creator(){
	this.createAccountObject = function(){
		if (document.getElementById("checkingAccountInfo").hidden && document.getElementById("savingsAccountInfo").hidden){
			alert("Account type undefinded");
			return;
		}
		
		var obj = null;
		
		if (document.getElementById("checkingAccountInfo").hidden){
			var obj = new __WEBPACK_IMPORTED_MODULE_0__accounts__["b" /* SavingsAccount */]();
			obj.setAccountNumber(document.getElementById("accountNumber").value);
			obj.setAccountType("SavingsAccount");
			obj.setAccountPIN(document.getElementById("accountPIN").value)
			obj.setAccountBalance(document.getElementById("accountBalance").value);
			obj.setDateOfAccountCreation(new Date(document.getElementById("dateOfAccountCreation").value));
			obj.setAccountUser(document.getElementById("accountUser").value);                                        
			obj.setSavingsAccountCode(document.getElementById("savingsAccountCode").value);
			obj.setOrganization(document.getElementById("sorganization").value);
			
		}else{
			var obj = new __WEBPACK_IMPORTED_MODULE_0__accounts__["a" /* CheckingAccount */]();
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CollectionHelperCRUD;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accounts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_help__ = __webpack_require__(6);







function CollectionHelperCRUD(){
	
	this.createNewAccount = function(account, callback){
		
		if (!__WEBPACK_IMPORTED_MODULE_1__app__["validator"].isEmpty(account)){
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
		if (!__WEBPACK_IMPORTED_MODULE_1__app__["validator"].isEmpty(account)){
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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NavigationHelper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accounts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_help__ = __webpack_require__(6);







function NavigationHelper(){
	
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


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Validator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accounts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_help__ = __webpack_require__(6);







function Validator(account){
	
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

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TableHelper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accounts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validation__ = __webpack_require__(5);







function TableHelper(){
	
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



/***/ })
/******/ ]);