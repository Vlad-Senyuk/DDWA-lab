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

function fillTable(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:2403/accounts", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
 
    var jsonObj = JSON.parse(xhr.responseText);

    var html = "<table><tr id='0'><td>Number</td><td>Type</td><td>PIN</td><td>Balance</td><td>Date of Creation</td><td>User</td></tr>";

    var acc = new Account(1, "Savings", 1234, "200$", new Date(), "User-1");

    var i;
    for (i = 0; i < jsonObj.length; i++){
    html += "<tr id='" + jsonObj[i].id + "'>"
    + '<td onclick="getAccountDetails(this);">' + jsonObj[i].accountNumber + "</td> "
    + '<td>' + jsonObj[i].accountType + "</td>"
    + '<td>' + jsonObj[i].accountPIN + "</td>"
    + '<td>' + jsonObj[i].accountBalance + "</td>"
    + '<td>' + jsonObj[i].dateOfAccountCreation + "</td>"
    + '<td>' + jsonObj[i].accountUser + '</td>'
    + "<td>" + "<button class='tableButtonEdit' value='" + jsonObj[i].id + "' onclick='toUpdateAccount(this);'> Edit</button>" + "</td>"
    + "<td>" + "<button class='tableButtonDelete' value='" + jsonObj[i].id + "' onclick='confirmRemoving(this);'>Delete</button>" + "</td>"
    + "</tr>"
    }

    html += "</table>"

    document.getElementById('shortTableOfAccounts').innerHTML=html;
}

function selectCheckingAccountType(){
    document.getElementById("checkingAccountInfo").hidden = false;
    document.getElementById("savingsAccountInfo").hidden = true;
}

function selectSavingsAccountType(){
    document.getElementById("savingsAccountInfo").hidden = false;
    document.getElementById("checkingAccountInfo").hidden = true;
}

function confirmRemoving(item){
    var flag = confirm("Remove this account?");

    if (flag){
        removeAccount(item.value);
    }
}

function getAccountDetails(itemId){
    document.location.replace("./details.html?item=" + itemId.parentNode.id);
}

function fillDetailsTable(item){
    document.getElementById("userHead").innerHTML = "Account User: " + item.accountUser;

    var html = "<table>" + 
                "<tr><td>Account Number</td>" + "<td>" + item.accountNumber + "</td>" + "</tr>" +
                "<tr><td>Account Balance</td>" + "<td>" + item.accountBalance + "</td>" + + "</tr>" +
                "<tr><td>Account PIN</td>" + "<td>" + item.accountPIN + "</td>" + + "</tr>" +
                "<tr><td>Account Type</td>" + "<td>" + item.accountType + "</td>" + + "</tr>" +
                "<tr><td>Account Date of Creation</td>" + "<td>" + item.dateOfAccountCreation + "</td>" + "</tr>";
    
    if (item.accountType == "SavingsAccount"){
        html += "<tr><td>Savings Code</td>" + "<td>" + item.savingsAccountCode + "</td>" + "</tr>" +
                 "<tr><td>Organization</td>" + "<td>" + item.organization + "</td>" + "</tr>";
    }else{
        html += "<tr><td>Cheking Code</td>" + "<td>" + item.checkingAccountCode + "</td>" + "</tr>" +
                 "<tr><td>Organization</td>" + "<td>" + item.organization + "</td>" + "</tr>";
    }

    html += "</table>"

    document.getElementById("accountDetailsTable").innerHTML = html;
}

function removeAccount(itemId){
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "http://localhost:2403/accounts/" + itemId, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
    alert("Ok!");
    location.reload();
}

function createAccount(account){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:2403/accounts", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    if (account.getAccountType() == "CheckingAccount"){
        xhr.send(JSON.stringify({
            accountNumber: account.getAccountNumber(),
            accountType: account.getAccountType(),
            accountBalance: account.getAccountBalance(),
            accountPIN: account.getAccountPIN(),
            dateOfAccountCreation: account.getDateOfAccountCreation(),
            accountUser: account.getAccountUser(),
            checkingAccountCode: account.getCheckingAccountCode(),
            organization: account.getOrganization()
        }));
    }
    else{
        xhr.send(JSON.stringify({
            accountNumber: account.getAccountNumber(),
            accountType: account.getAccountType(),
            accountBalance: account.getAccountBalance(),
            accountPIN: account.getAccountPIN(),
            dateOfAccountCreation: account.getDateOfAccountCreation(),
            accountUser: account.getAccountUser(),
            savingsAccountCode: account.getSavingsAccountCode(),
            organization: account.getOrganization()
        }));
    }

    alert("ok!");
}

function updateAccount(account, accountId){
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "http://localhost:2403/accounts/" + accountId, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    if (account.getAccountType() == "CheckingAccount"){
        xhr.send(JSON.stringify({
            accountNumber: account.getAccountNumber(),
            accountType: account.getAccountType(),
            accountBalance: account.getAccountBalance(),
            accountPIN: account.getAccountPIN(),
            dateOfAccountCreation: account.getDateOfAccountCreation(),
            accountUser: account.getAccountUser(),
            checkingAccountCode: account.getCheckingAccountCode(),
            organization: account.getOrganization()
        }));
    }
    else{
        xhr.send(JSON.stringify({
            accountNumber: account.getAccountNumber(),
            accountType: account.getAccountType(),
            accountBalance: account.getAccountBalance(),
            accountPIN: account.getAccountPIN(),
            dateOfAccountCreation: account.getDateOfAccountCreation(),
            accountUser: account.getAccountUser(),
            savingsAccountCode: account.getSavingsAccountCode(),
            organization: account.getOrganization()
        }));
    }

    alert("ok!");
}

function toUpdateAccount(item){
    var id = item.value;
    document.location.replace("./create_account.html?item=" + id);
}
