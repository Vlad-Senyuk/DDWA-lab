import {Account, CheckingAccount, SavingsAccount} from './accounts'
import {Creator} from './creator'
import {CollectionHelperCRUD} from './crud'
import {NavigationHelper} from './nav'
import {Validator} from './validation'
import {TableHelper} from './table_help'
import {SearchHelper} from './search'
import { SortHelper } from './sort';

//import style from '../css/styles.css';
//import style from '../css/mod.css';

import 'whatwg-fetch'; 
import 'babel-polyfill'

export let navigationHelper = new NavigationHelper();
export let collectionHelperCRUD = new CollectionHelperCRUD();
export let tableHelper = new TableHelper();
export let validator = new Validator();
export let creator = new Creator();
export let searchHelper = new SearchHelper();
export let sortHelper = new SortHelper();

collectionHelperCRUD.getAllAccounts().then(body => { myApp.tableHelper.fillTable(body) });


