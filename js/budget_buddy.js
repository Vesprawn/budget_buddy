var testData = {
	userName: 'Mike Malcolm',
	payees: [
		{
			id: '5631146a1245c',
			name: 'Alison Emsley'
		},
		{
			id: '5631146a1245e',
			name: 'Jon Angus'
		}
	],
	transactions: [
		{
			id: '3631146a1245c',
			payeeId: '5631146a1245c',
			date: '2015-10-20',
			amount: -125,
			notes: 'Hoover (Argos Card)'
		},
		{
			id: '2631146a1245c',
			payeeId: '5631146a1245c',
			date: '2015-10-21',
			amount: -359.99,
			notes: 'Xbox One (Argos Card)'
		}
	]
};

var BudgetBuddy = (function() {
	var utilities = {};
	var engine = {
		options: {
			baseUrl: '',
			currentUser: null,
			subscribers: [],
			contentFrame: null,
			defaultButtonConfig: {
				id: '',
				text: '',
				classList: '',
				callback: function() {}	
			}
		},
		/**
		 * Initialise the engine.
		 */
		initialise: function() {
			///The following is for testign only
			this.options.currentUser = new BudgetBuddy.utilities.User(); // TODO this should only be set on login
			this.options.currentUser.Name(testData.userName);
			var len = testData.payees.length, i = 0;
			while(len--) {
				var payee = testData.payees[i];
				if(!this.options.currentUser.PayeeList().Contains(payee.id)) {
					this.options.currentUser.PayeeList().Add(payee.id, new BudgetBuddy.utilities.Payee(payee));	
				}
				
				i++;
			}
			
			var len = testData.transactions.length, i = 0;
			while(len--) {
				var transaction = testData.transactions[i];
				if(!this.options.currentUser.Transactions().Contains(transaction.id)) {
					this.options.currentUser.Transactions().Add(transaction.id, new BudgetBuddy.utilities.Transaction(transaction));
				}
				
				this.options.currentUser.UpdateBalance(transaction.amount);
				this.options.currentUser.PayeeList().GetValue(transaction.payeeId).UpdateBalance(transaction.amount);
				i++;
			}
			///end testing code
			
			this.setBaseUrl().
				buildContentFrame();
			return this;
		},
		buildContentFrame: function() {
			this.options.contentFrame = $('<iframe id="content_frame"></iframe>');
			$('body').append(this.options.contentFrame);
			return this;
		},
		setBaseUrl: function() {
			var url = document.location.href.split('/');
			url.pop();
			this.options.baseUrl = url.join('/') + '/';
			return this;	
		},
		loadPage: function(url) {
			this.options.contentFrame.attr('src', this.options.baseUrl + url);
		},
		/**
		* Creates a button.
		* @param {Object} buttonConfig - configuration options for button.
		* @property {String} [buttonConfig.id] - Identifier for button.
		* @property {String} [buttonConfig.text] - Text for button. 
		* @property {String} [buttonConfig.classList] - List of classes for button. 
		* @property {Object} [buttonConfig.callback] - Callback for button. 
		*/
		createButton: function(buttonConfig) {
			buttonConfig = $.extend({}, this.options.defaultButtonConfig, buttonConfig);

			return $(this.getButtonHTML(buttonConfig)).data('callback', buttonConfig.callback);
		},
		/**
		* Returns the html as a string for the button.
		*/
		getButtonHTML: function(buttonConfig) {
			return [
				'<div class="button ',
				buttonConfig.classList,
				'"',
				(buttonConfig.id !== '') ? 'id="'+buttonConfig.id+'"' : '',
				'>',
				buttonConfig.text,
				'</div>'
			].join('')
		},
		/**
		 * Notify all registered subscribers that an action has transpired.
		 */
		notifySubscribers: function(notification) {
			var len = this.subscribers.length, i = 0;
			while(len--) {
				this.subscribers[i].notify(notification);
				i++;
			}
			return this;
		},
		/**
		 * Registers a subscriber to receive updates.
		 */
		registerSubscriber: function(subscriber) {
			this.options.subscribers.push(subscriber);
			return this;
		}
	};
	
	return {
		engine: engine,
		utilities: utilities
	};
})();
// 
// var core = function() {
// 	// this.CurrentUser = null;
// 	// this.globals = {
// 	// 	baseUrl: '',
// 	// 	ui: null,
// 	// 	subscribers: []
// 	// };
// 	// // 
// 	// var contentFrame = null,
// 	// 	_this = this,
// 	//  	defaultButtonConfig = {
// 	// 		id: '',
// 	// 		text: '',
// 	// 		classList: '',
// 	// 		callback: function() {}	
// 	// 	};
// 	// // 
// 	// this.NotifySubscribers = function(notification) {
// 	// 	var len = this.globals.subscribers.length,
// 	// 		i=0;
// 	// 	
// 	// 	this.globals.subscribers[i].Notify(notification);
// 	// 	i++;	
// 	// };
// 	// 
// 	// this.RegisterSubscriber = function(subscriber) {
// 	// 	this.globals.subsribers.push(subscriber);
// 	// };
// 	// 
// 	this.init = function() {
// 		// this.CurrentUser = new User(); // TODO this should only be set on login
// 		// this.CurrentUser.Name(testData.userName);
// 		// var len = testData.payees.length, i = 0;
// 		// while(len--) {
// 		// 	var payee = testData.payees[i];
// 		// 	if(!this.CurrentUser.PayeeList().Contains(payee.id)) {
// 		// 		this.CurrentUser.PayeeList().Add(payee.id, new Payee(payee));	
// 		// 	}
// 		// 	
// 		// 	i++;
// 		// }
// 		// 
// 		// var len = testData.transactions.length, i = 0;
// 		// while(len--) {
// 		// 	var transaction = testData.transactions[i];
// 		// 	if(!this.CurrentUser.Transactions().Contains(transaction.id)) {
// 		// 		this.CurrentUser.Transactions().Add(transaction.id, new Transaction(transaction));
// 		// 	}
// 		// 	
// 		// 	this.CurrentUser.UpdateBalance(transaction.amount);
// 		// 	this.CurrentUser.PayeeList().GetValue(transaction.payeeId).UpdateBalance(transaction.amount);
// 		// 	i++;
// 		// }
// 		
// 		this.SetBaseUrl()
// 			.SetupButtonEvents()
// 			.BuildFrame();
// 		// 
// 		// $('.button').on('click', function() {
// 		// 	$(this).data('callback')();
// 		// });
// 		
// 		// this.globals.ui = new UserInterface({});
// 		
// 		return this;
// 	};
// 	// 
// 	// this.SetupButtonEvents = function() {
// 	// 	$('body')
// 	// 	.append(this.CreateButton({id:'dashboard_button', text:Strings.dashboard, callback: this.DashboardButtonEvent}))
// 	// 	.append(this.CreateButton({id:'login_button', text:Strings.login, callback: function() {
// 	// 		alert('login');
// 	// 	}})).append(this.CreateButton({id:'register_button', text:Strings.register, callback: this.RegisterButtonEvent}))
// 	// 	.append(this.CreateButton({id:'payees_button', text:Strings.payees, callback: this.PayeesButtonEvent}));		
// 	// 	return this;
// 	// };
// 	// 
// 	// this.BuildFrame = function() {
// 	// 	contentFrame = $('<iframe id="content_frame"></iframe>');
// 	// 	$('body').append(contentFrame);
// 	// };
// 	// 
// 	// this.PayeesButtonEvent = function() {
// 	// 	_this.LoadPage('payees.php');
// 	// };
// 	// 
// 	// this.DashboardButtonEvent = function() {
// 	// 	_this.LoadPage('dashboard.php');
// 	// };
// 	// 
// 	// this.RegisterButtonEvent = function() {
// 	// 	_this.LoadPage('register.php');
// 	// };
// 	// 
// 	// this.LoadPage = function(url) {
// 	// 	contentFrame.attr('src', this.globals.baseUrl + url);
// 	// };
// 	// 
// 	// this.SetBaseUrl = function() {
// 	// 	var url = document.location.href.split('/');
// 	// 	url.pop();
// 	// 	this.globals.baseUrl = url.join('/') + '/';
// 	// 	return this;	
// 	// };
// 	
// // 	/**
// // 	 * Creates a button.
// // 	 * @param {Object} buttonConfig - configuration options for button.
// // 	 * @property {String} [buttonConfig.id] - Identifier for button.
// // 	 * @property {String} [buttonConfig.text] - Text for button. 
// // 	 * @property {String} [buttonConfig.classList] - List of classes for button. 
// // 	 * @property {Object} [buttonConfig.callback] - Callback for button. 
// // 	 */
// // 	this.CreateButton = function(buttonConfig) {
// // 		buttonConfig = $.extend({}, defaultButtonConfig, buttonConfig);
// // 
// // 		return $(this.GetButtonHTML(buttonConfig)).data('callback', buttonConfig.callback);
// // 	};
// 	
// 	// /**
// 	//  * Returns the html as a string for the button.
// 	// */
// 	// this.GetButtonHTML = function(buttonConfig) {
// 	// 	return [
// 	// 		'<div class="button ',
// 	// 		buttonConfig.classList,
// 	// 		'"',
// 	// 		(buttonConfig.id !== '') ? 'id="'+buttonConfig.id+'"' : '',
// 	// 		'>',
// 	// 		buttonConfig.text,
// 	// 		'</div>'
// 	// 	].join('')
// 	// };
// 
// 	this.init();
// };
// 
// var Core = new core(); 