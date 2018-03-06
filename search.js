import {Account, CheckingAccount, SavingsAccount} from './accounts'
import {validator, navigationHelper, collectionHelperCRUD, tableHelper, creator} from './app'
import {Creator} from './creator'
import {CollectionHelperCRUD} from './crud'
import {NavigationHelper} from './nav'
import {TableHelper} from './table_help'

export class SearchHelper {
    constructor(){}

    async search(searchString, callback, result = []){
        await myApp.collectionHelperCRUD.getAllAccounts().then(body => { result = body })

        var collection = result.filter(item => item.accountUser == searchString
                                    || item.accountNumber == searchString
                                    || item.accountPIN == searchString);

        callback(collection);
    }
}