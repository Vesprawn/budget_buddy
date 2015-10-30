(function(base) {
	base.utilities.Transaction = function(config) {
		var props = {
			id: '',
			payeeId: '',
			date: '',
			amount: 0,
			notes: ''	
		};
		
		this.Id = function() {
			return props.id;	
		};
		
		this.PayeeId = function() {
			return props.payeeId;	
		};
		
		this.Date = function() {
			return props.date;	
		};
		
		this.Amount = function() {
			return props.amount;	
		};
		
		this.Notes = function() {
			return props.notes;	
		};
		
		function init(config) {
			props = $.extend({}, props, config);
		};
		
		init(config);
	};
		
	return base;
})(BudgetBuddy || {});