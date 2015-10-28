var testData = {
	userName: 'Mike Malcolm',
	payees: [
		{
			id: '5631146a1245c',
			name: 'Alison Emsley'
		}
	],
	transactions: [
		{
			payeeId: '5631146a1245c',
			date: '2015-10-20',
			amount: -125,
			notes: 'Hoover (Argos Card)'
		},
		{
			payeeId: '5631146a1245c',
			date: '2015-10-21',
			amount: -359.99,
			notes: 'Xbox One (Argos Card)'
		}
	]
};
var core = function() {
	this.CurrentUser = null;
	this.globals = {
		baseUrl: ''	
	};
	var contentFrame = null,
		_this = this,
	 	defaultButtonConfig = {
			id: '',
			text: '',
			classList: '',
			callback: function() {}	
		};
	
	this.init = function() {
		this.CurrentUser = new User(); // TODO this should only be set on login
		this.CurrentUser.name = testData.userName;
		
		this.SetBaseUrl()
			.SetupButtonEvents()
			.BuildFrame();
		
		$('.button').on('click', function() {
			$(this).data('callback')();
		});
		
		return this;
	};
	
	this.SetupButtonEvents = function() {
		$('body')
		.append(this.CreateButton({id:'dashboard_button', text:Strings.dashboard, callback: this.DashboardButtonEvent}))
		.append(this.CreateButton({id:'login_button', text:Strings.login, callback: function() {
			alert('login');
		}})).append(this.CreateButton({id:'register_button', text:Strings.register, callback: this.RegisterButtonEvent}));		
		return this;
	};
	
	this.BuildFrame = function() {
		contentFrame = $('<iframe id="content_frame"></iframe>');
		$('body').append(contentFrame);
	};
	
	this.DashboardButtonEvent = function() {
		_this.LoadPage('dashboard.php');
	};
	
	this.RegisterButtonEvent = function() {
		_this.LoadPage('register.php');
	};
	
	this.LoadPage = function(url) {
		contentFrame.attr('src', this.globals.baseUrl + url);
	};
	
	this.SetBaseUrl = function() {
		var url = document.location.href.split('/');
		url.pop();
		this.globals.baseUrl = url.join('/') + '/';
		return this;	
	};
	
	/**
	 * Creates a button.
	 * @param {Object} buttonConfig - configuration options for button.
	 * @property {String} [buttonConfig.id] - Identifier for button.
	 * @property {String} [buttonConfig.text] - Text for button. 
	 * @property {String} [buttonConfig.classList] - List of classes for button. 
	 * @property {Object} [buttonConfig.callback] - Callback for button. 
	 */
	this.CreateButton = function(buttonConfig) {
		buttonConfig = $.extend({}, defaultButtonConfig, buttonConfig);

		return $(this.GetButtonHTML(buttonConfig)).data('callback', buttonConfig.callback);
	};
	
	/**
	 * Returns the html as a string for the button.
	*/
	this.GetButtonHTML = function(buttonConfig) {
		return [
			'<div class="button ',
			buttonConfig.classList,
			'"',
			(buttonConfig.id !== '') ? 'id="'+buttonConfig.id+'"' : '',
			'>',
			buttonConfig.text,
			'</div>'
		].join('')
	};

	this.init();
};

var Core = new core(); 