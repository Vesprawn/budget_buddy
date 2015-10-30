(function(base) {
	base.utilities.User = function() {
		var props = {
			name: '',
			transactions: null,
			payeeList: null,
			balance: 0
		};
	
		this.Name = function(name) {
			if(typeof name === 'string') {
				props.name = name;
				return this;	
			}
			
			return props.name;	
		};
		
		this.UpdateBalance = function(value) {
			props.balance+=value;
			return this;
		};
		
		this.Balance = function() {
			return props.balance;
		}
		
		this.PayeeList = function() {
			return props.payeeList;	
		};
		
		this.Transactions = function() {
			return props.transactions;
		};
		
		function init() {
			props.payeeList = new BudgetBuddy.utilities.Dictionary();
			props.transactions = new BudgetBuddy.utilities.Dictionary();
		}
		
		init();
	};
	
	return base;
})(BudgetBuddy || {});
// 
// var User = function() {
// 	var props = {
// 		name: '',
// 		transactions: null,
// 		payeeList: null,
// 		balance: 0
// 	};
// 
// 	this.Name = function(name) {
// 		if(typeof name === 'string') {
// 			props.name = name;
// 			return this;	
// 		}
// 		
// 		return props.name;	
// 	};
// 	
// 	this.UpdateBalance = function(value) {
// 		props.balance+=value;
// 		return this;
// 	};
// 	
// 	this.Balance = function() {
// 		return props.balance;
// 	}
// 	
// 	this.PayeeList = function() {
// 		return props.payeeList;	
// 	};
// 	
// 	this.Transactions = function() {
// 		return props.transactions;
// 	};
// 	
// 	function init() {
// 		props.payeeList = new Dictionary();
// 		props.transactions = new Dictionary();
// 	}
// 	
// 	init();
// };