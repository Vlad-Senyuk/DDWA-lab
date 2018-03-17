import {Account, CheckingAccount, SavingsAccount} from './accounts'
import {validator, navigationHelper, collectionHelperCRUD, tableHelper, creator} from './app'
import {Creator} from './creator'
import {CollectionHelperCRUD} from './crud'
import {NavigationHelper} from './nav'
import {TableHelper} from './table_help'
import {Validator} from './validation'

export class SortHelper {
    constructor() {}

    async sortByDate(callback){
        var items = {};
        await myApp.collectionHelperCRUD.getAllAccounts().then(body => { items = body })
        callback( items.sort( (a, b) => {
            if (a.dateOfAccountCreation < b.dateOfAccountCreation) {return -1;}
            if (a.dateOfAccountCreation > b.dateOfAccountCreation) {return 1;}
            return 0;
        } ) );
    }

    async sortByBalance(callback){
        var items = {};
        await myApp.collectionHelperCRUD.getAllAccounts().then(body => { items = body })
        callback( items.sort( (a, b) => {return a.accountBalance - b.accountBalance;} ) );
    }

    async sortByUserName(callback){
        var items = {};
        await myApp.collectionHelperCRUD.getAllAccounts().then(body => { items = body })
        callback( items.sort( (a, b) => {
            var x = a.accountUser.toLowerCase();
            var y = b.accountUser.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        } ) );
    }
}