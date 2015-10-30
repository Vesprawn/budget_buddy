(function(base) {
	base.utilities.Payee = function(config) {
		var props = {
			name: '',
			id: '',
			balance: 0
		};
		
		this.Balance = function() {
			return props.balance;	
		};
		
		this.UpdateBalance = function(value) {
			props.balance+=value;
			return this;	
		};
		
		function init(config) {
			props = $.extend({}, props, config);
		};
		
		this.Id = function() {
			return props.id;	
		};
		
		this.Name = function() {
			return props.name;	
		};
		
		init(config);	
	};
		
	return base;
})(BudgetBuddy || {});