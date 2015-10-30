(function(base) {
	base.utilities.Dictionary = function() {
		var keys = [],
			values = [];
			
		this.Add = function(key, value) {
			keys.push(key);
			values.push(value);
		};
		
		this.Count = function() {
			return keys.length;
		}
		
		this.Remove = function(key) {
			// TODO Splice from both arrays
		}
		
		this.GetValue = function(key) {
			var i = this.GetKeyIndex(key);
			
			if(i !== -1) {
				return values[i];
			}
			
			return null;	
		};
		
		this.GetValueByIndex = function(i) {
			return 	values[i];
		};
		
		this.Contains = function(key) {
			return (this.GetKeyIndex(key) !== -1);
		};
		
		this.GetKeyIndex = function(key) {
			return keys.indexOf(key);
		};
	};
		
	return base;
})(BudgetBuddy || {});

// var Dictionary = function() {
// 	var keys = [],
// 		values = [];
// 		
// 	this.Add = function(key, value) {
// 		keys.push(key);
// 		values.push(value);
// 	};
// 	
// 	this.Count = function() {
// 		return keys.length;
// 	}
// 	
// 	this.Remove = function(key) {
// 		// TODO Splice from both arrays
// 	}
// 	
// 	this.GetValue = function(key) {
// 		var i = this.GetKeyIndex(key);
// 		
// 		if(i !== -1) {
// 			return values[i];
// 		}
// 		
// 		return null;	
// 	};
// 	
// 	this.GetValueByIndex = function(i) {
// 		return 	values[i];
// 	};
// 	
// 	this.Contains = function(key) {
// 		return (this.GetKeyIndex(key) !== -1);
// 	};
// 	
// 	this.GetKeyIndex = function(key) {
// 		return keys.indexOf(key);
// 	};
// };
// 
// var Payee = function(config) {
// 	var props = {
// 		name: '',
// 		id: '',
// 		balance: 0
// 	};
// 	
// 	this.Balance = function() {
// 		return props.balance;	
// 	};
// 	
// 	this.UpdateBalance = function(value) {
// 		props.balance+=value;
// 		return this;	
// 	};
// 	
// 	function init(config) {
// 		props = $.extend({}, props, config);
// 	};
// 	
// 	this.Id = function() {
// 		return props.id;	
// 	};
// 	
// 	this.Name = function() {
// 		return props.name;	
// 	};
// 	
// 	init(config);	
// };
// 
// var Transaction = function(config) {
// 	var props = {
// 		id: '',
// 		payeeId: '',
// 		date: '',
// 		amount: 0,
// 		notes: ''	
// 	};
// 	
// 	this.Id = function() {
// 		return props.id;	
// 	};
// 	
// 	this.PayeeId = function() {
// 		return props.payeeId;	
// 	};
// 	
// 	this.Date = function() {
// 		return props.date;	
// 	};
// 	
// 	this.Amount = function() {
// 		return props.amount;	
// 	};
// 	
// 	this.Notes = function() {
// 		return props.notes;	
// 	};
// 	
// 	function init(config) {
// 		props = $.extend({}, props, config);
// 	};
// 	
// 	init(config);
// };