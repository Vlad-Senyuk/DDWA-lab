import {Account, CheckingAccount, SavingsAccount} from './accounts'
import {validator, navigationHelper, collectionHelperCRUD, tableHelper, creator} from './app'
import {Creator} from './creator'
import {CollectionHelperCRUD} from './crud'
import {Validator} from './validation'
import {TableHelper} from './table_help'

export class NavigationHelper{

	constructor(){}
	
	toUpdateAccount(item){
		//let id = item.value;
		document.location.replace(`./create_account.html?item=${item}`);
	}
	
	getAccountDetails(itemId){
		document.location.replace(`./details.html?item=${itemId}`);
	}
	
	selectCheckingAccountType(){
		$("#checkingAccountInfo").attr('hidden', false);
		$("#savingsAccountInfo").attr('hidden', true);
	}
	
	selectSavingsAccountType(){
		$("#checkingAccountInfo").attr('hidden', true) ;
		$("#savingsAccountInfo").attr('hidden', false) ;
	}

	fillAccountFields(jsonObj){
		if (jsonObj.accountType == "CheckingAccount"){
			$("#accountTypeChecking").attr('checked', true);
			$("#checkingAccountInfo").attr('hidden', false);
			$("#checkingAccountCode").val(jsonObj.checkingAccountCode);
			$("#corganization").val(jsonObj.organization);
		}else if (jsonObj.accountType == "SavingsAccount"){
			$("#accountTypeSavings").attr('checked', true);
			$("#savingsAccountInfo").attr('hidden', false);
			$("#savingsAccountCode").val(jsonObj.savingsAccountCode);
			$("#sorganization").val(jsonObj.organization);
		}
		
		$("#accountNumber").val(jsonObj.accountNumber);
		$("#accountPIN").val(jsonObj.accountPIN);
		$("#accountBalance").val(jsonObj.accountBalance);
		$("#dateOfAccountCreation").val(jsonObj.dateOfAccountCreation.substring(0, 10));
		$("#accountUser").val(jsonObj.accountUser); 
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

	async fillTableForIndex(){
		await myApp.collectionHelperCRUD
			.getAllAccounts()
			.then(body => {
				 //myApp.tableHelper.fillTable(body)
				 $(document).ready(function() {
					 
					$('#shortTableOfAccounts tfoot th').each( function (i) {
						var title = $('#shortTableOfAccounts thead th').eq( $(this).index() ).text();
						$(this).html( '<input type="text" placeholder="Search '+title+'" data-index="'+i+'" />' );
					} );
					
					var table = $('#shortTableOfAccounts').DataTable( {
						data : body,
						columns: [
							{ data: 'accountNumber', className: 'info' },
							{ data: 'accountBalance' },
							{ data: 'dateOfAccountCreation', render: function (data, type, row) {
								return data.substring(0, 10);
							} },
							{ data: 'accountType' },
							{ data: 'accountUser' },
							{
								className:      'delete-control',
								orderable:      false,
								data:           null,
								defaultContent: ''
							},
							{
								className:      'details-control',
								orderable:      false,
								data:           null,
								defaultContent: '',
								id: 'id'
							},
						]
					} );

					$('#shortTableOfAccounts tbody').on('click', 'td.details-control', function () {
						var tr = $(this).closest('tr');
						var row = table.row( tr );
				
						myApp.navigationHelper.toUpdateAccount(row.data().id);
					} );

					$('#shortTableOfAccounts tbody').on('click', 'td.delete-control', function () {
						var tr = $(this).closest('tr');
						var row = table.row( tr );
				
						myApp.collectionHelperCRUD.confirmRemoving(row.data().id)
					} );

					$('#shortTableOfAccounts tbody').on('click', 'td.info', function () {
						var tr = $(this).closest('tr');
						var row = table.row( tr );
				
						myApp.navigationHelper.getAccountDetails(row.data().id);
					} );

					$( table.table().container() ).on( 'keyup', 'tfoot input', function () {
						table
							.column( $(this).data('index') )
							.search( this.value )
							.draw();
					} );

				} ) 
				 }
			);
	}

	detailsOnLoadOverride(paramValue){
		myApp.collectionHelperCRUD.getAccountById(paramValue).then(body => { myApp.tableHelper.fillDetailsTable(body) });
	}

	createAccOnLoadOverride(paramValue){
		myApp.collectionHelperCRUD.getAccountById(paramValue).then( body => { myApp.navigationHelper.fillAccountFields(body) } );
	}
}
