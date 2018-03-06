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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchHelper", function() { return searchHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accounts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__creator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_help__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search__ = __webpack_require__(7);








let navigationHelper = new __WEBPACK_IMPORTED_MODULE_3__nav__["a" /* NavigationHelper */]();
let collectionHelperCRUD = new __WEBPACK_IMPORTED_MODULE_2__crud__["a" /* CollectionHelperCRUD */]();
let tableHelper = new __WEBPACK_IMPORTED_MODULE_5__table_help__["a" /* TableHelper */]();
let validator = new __WEBPACK_IMPORTED_MODULE_4__validation__["a" /* Validator */]();
let creator = new __WEBPACK_IMPORTED_MODULE_1__creator__["a" /* Creator */]();
let searchHelper = new __WEBPACK_IMPORTED_MODULE_6__search__["a" /* SearchHelper */]();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Account{

	constructor(accountNumber, accountType, accountPIN, accountBalance, dateOfAccountCreation, accountUser) {
		this._accountNumber = accountNumber;
		this._accountType = accountType;
		this._accountPIN = accountPIN;
		this._accountBalance = accountBalance;
		this._dateOfAccountCreation = dateOfAccountCreation;
		this._accountUser = accountUser;
	}
	
	set accountNumber(accountNumber){
		this._accountNumber = accountNumber;
	}
	
	get accountNumber(){
		return this._accountNumber;
	}
	
	set accountType(accountType){
		this._accountType = accountType;
	}
	
	get accountType(){
		return this._accountType;
	}
	
	set accountPIN(accountPIN){
		this._accountPIN = accountPIN;
	}
	
	get accountPIN(){
		return this._accountPIN;
	}
	
	set accountBalance(accountBalance){
		this._accountBalance = accountBalance;
	}
	
	get accountBalance(){
		return this._accountBalance;
	}
	
	set dateOfAccountCreation(dateOfAccountCreation){
		this._dateOfAccountCreation = dateOfAccountCreation;
	}
	
	get dateOfAccountCreation(){
		return this._dateOfAccountCreation;
	}
	
	set accountUser(accountUser){
		this._accountUser = accountUser;
	}
	
	get accountUser(){
		return this._accountUser;
	}

	toJSON(){
		return {
			accountNumber : this._accountNumber,
			accountType : this._accountType,
			accountPIN : this._accountPIN, 
			accountBalance : this._accountBalance, 
			dateOfAccountCreation : this._dateOfAccountCreation, 
			accountUser : this._accountUser
		};
	}
}
/* unused harmony export Account */
;

class CheckingAccount extends Account {

	constructor(accountNumber, accountType, accountPIN, accountBalance, dateOfAccountCreation, accountUser, checkingAccountCode, organization) {
		super(accountNumber, accountType, accountPIN, accountBalance, dateOfAccountCreation, accountUser);
		this._checkingAccountCode = checkingAccountCode;
		this._organization = organization;
	}
		
	set checkingAccountCode(checkingAccountCode){
		this._checkingAccountCode = checkingAccountCode;
	}
	
	get checkingAccountCode(){
		return this._checkingAccountCode;
	}
	
	set organization(organization){
		this._organization = organization;
	}
	
	get organization(){
		return this._organization;
	}

	toJSON(){
		return {
			accountNumber : this._accountNumber,
			accountType : this._accountType,
			accountPIN : this._accountPIN, 
			accountBalance : this._accountBalance, 
			dateOfAccountCreation : this._dateOfAccountCreation, 
			accountUser : this._accountUser,
			checkingAccountCode : this._checkingAccountCode,
			organization : this._organization
		};
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CheckingAccount;
;

class SavingsAccount extends Account{

	constructor(accountNumber, accountType, accountPIN, accountBalance, dateOfAccountCreation, accountUser, savingsAccountCode, organization){
		super(accountNumber, accountType, accountPIN, accountBalance, dateOfAccountCreation, accountUser);
		this._savingsAccountCode = savingsAccountCode;
		this._organization = organization;
	}
	
	set savingsAccountCode(savingsAccountCode){
		this._savingsAccountCode = savingsAccountCode;
	}
	
	get savingsAccountCode(){
		return this._savingsAccountCode;
	}
	
	set organization(organization){
		this._organization = organization;
	}
	
	get organization(){
		return this._organization;
	}

	toJSON(){
		return {
			accountNumber : this._accountNumber,
			accountType : this._accountType,
			accountPIN : this._accountPIN, 
			accountBalance : this._accountBalance, 
			dateOfAccountCreation : this._dateOfAccountCreation, 
			accountUser : this._accountUser,
			savingsAccountCode : this._savingsAccountCode,
			organization : this._organization
		};
	}
}
/* harmony export (immutable) */ __webpack_exports__["b"] = SavingsAccount;
;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accounts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_help__ = __webpack_require__(5);







class Creator {

	constructor() {}

	createAccountObject(){
		if (document.getElementById("checkingAccountInfo").hidden && document.getElementById("savingsAccountInfo").hidden){
			alert("Account type undefinded");
			return;
		}
		
		var obj = null;

		if (document.getElementById("checkingAccountInfo").hidden){
			obj = new __WEBPACK_IMPORTED_MODULE_0__accounts__["b" /* SavingsAccount */]();
			obj.accountType = "SavingsAccount";                                        
			obj.savingsAccountCode = document.getElementById("savingsAccountCode").value;
			obj.organization = document.getElementById("sorganization").value;		
		}else if (document.getElementById("savingsAccountInfo").hidden){
			obj = new __WEBPACK_IMPORTED_MODULE_0__accounts__["a" /* CheckingAccount */](); 
			obj.accountType = "CheckingAccount";                                           
			obj.checkingAccountCode = document.getElementById("checkingAccountCode").value;
			obj.organization = document.getElementById("corganization").value;
			
		}

		obj.accountNumber = document.getElementById("accountNumber").value;
		obj.accountPIN = document.getElementById("accountPIN").value;
		obj.accountBalance = document.getElementById("accountBalance").value;
		obj.dateOfAccountCreation = new Date(document.getElementById("dateOfAccountCreation").value);
		obj.accountUser = document.getElementById("accountUser").value;
			
		return obj;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Creator;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accounts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_help__ = __webpack_require__(5);







class CollectionHelperCRUD {

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
		if (!__WEBPACK_IMPORTED_MODULE_1__app__["validator"].isEmpty(account)){
			await fetch(this.url, {method: 'POST', headers: this.myHeaders, body: JSON.stringify(account)});
		}
	}
	
	async updateAccount(account, accountId){		
		if (!__WEBPACK_IMPORTED_MODULE_1__app__["validator"].isEmpty(account)){
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
/* harmony export (immutable) */ __webpack_exports__["a"] = CollectionHelperCRUD;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accounts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_help__ = __webpack_require__(5);







class NavigationHelper{

	constructor(){}
	
	toUpdateAccount(item){
		let id = item.value;
		document.location.replace(`./create_account.html?item=${id}`);
	}
	
	getAccountDetails(itemId){
		document.location.replace(`./details.html?item=${itemId.parentNode.id}`);
	}
	
	selectCheckingAccountType(){
		document.getElementById("checkingAccountInfo").hidden = false;
		document.getElementById("savingsAccountInfo").hidden = true;
	}
	
	selectSavingsAccountType(){
		document.getElementById("savingsAccountInfo").hidden = false;
		document.getElementById("checkingAccountInfo").hidden = true;
	}

	fillAccountFields(jsonObj){
		if (jsonObj.accountType == "CheckingAccount"){
			document.getElementById("accountTypeChecking").checked = true;
			document.getElementById("checkingAccountInfo").hidden = false;
			document.getElementById("checkingAccountCode").value = jsonObj.checkingAccountCode;
			document.getElementById("corganization").value = jsonObj.organization;
		}else if (jsonObj.accountType == "SavingsAccount"){
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

	completeOperation(){
		alert("Operation completed");
		document.location.href = "./index.html";
	}

	setAccountsCount(header, accCount, time){
		if (time == undefined){
			time = '';
		}
		
		document.getElementById('accountsCount').innerHTML = `${time} ${header}${accCount}`;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NavigationHelper;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accounts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validation__ = __webpack_require__(6);







class TableHelper {

	constructor(){}

	fillTable(jsonObj){		
		var html = `<table><tr><td>Number</td><td>Type</td><td>PIN</td><td>Balance</td><td>Date of Creation</td><td>User</td></tr>`;		
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
/* harmony export (immutable) */ __webpack_exports__["a"] = TableHelper;




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accounts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_help__ = __webpack_require__(5);







class Validator {

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
/* harmony export (immutable) */ __webpack_exports__["a"] = Validator;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accounts__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__creator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_help__ = __webpack_require__(5);







class SearchHelper {
    constructor(){}

    async search(searchString, callback, result = []){
        await myApp.collectionHelperCRUD.getAllAccounts().then(body => { result = body })

        var collection = result.filter(item => item.accountUser == searchString
                                    || item.accountNumber == searchString
                                    || item.accountPIN == searchString);

        callback(collection);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchHelper;


/***/ })
/******/ ]);