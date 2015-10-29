var transactionsContainer = null;
$(document).ready(function() {
	transactionsContainer = $('<div id="transactions"></div>'); 
	$('body').append(transactionsContainer);
	var len = Core.CurrentUser.Transactions().Count(),
		i = 0;
		
	while(len--) {
		var transaction = Core.CurrentUser.Transactions().GetValueByIndex(i),
			payee =  Core.CurrentUser.PayeeList().GetValue(transaction.PayeeId());
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