var transactionsContainer = null;
$(document).ready(function() {
	transactionsContainer = $('<div id="transactions"></div>'); 
	$('body').append(transactionsContainer);
	var len = BudgetBuddy.engine.options.currentUser.Transactions().Count(),
		i = 0;
		
	while(len--) {
		var transaction = BudgetBuddy.engine.options.currentUser.Transactions().GetValueByIndex(i),
			payee =  BudgetBuddy.engine.options.currentUser.PayeeList().GetValue(transaction.PayeeId());
		transactionsContainer.append($([
			'<div class="transaction">',
				'<p>',
					transaction.Id(),
				'</p>',
				'<p>',
					payee.Name(),
				'</p>',
				'<p>',
					transaction.Amount(),
				'</p>',
				'<p>',
					transaction.Notes(),
				'</p>',
			'</div>'
		].join('')));
		i++;
	}
});