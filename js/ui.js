(function(base){
	var UI = function() {
		this.notify = function(notification) {
			switch(notification) {
				default:
					break;
			}
			
			return this;
		};
		
		var _buttonEvents = {
			payeesButtonEvent: function() {
				BudgetBuddy.engine.loadPage('payees.php');
			},
			dashboardButtonEvent: function() {
				BudgetBuddy.engine.loadPage('dashboard.php');
			},
			registerButtonEvent: function() {
				BudgetBuddy.engine.loadPage('register.php');
			},
			loginButtonEvent: function() {
				// do something.
			}
		};
		
		
		var _init = function() {
			_buildNavigation();
			_setupButtonEvents();
		};
		
		var _buildNavigation = function() {
			var navigationBar = $('<div id="navigation_bar"></div>');
			$('body').append(navigationBar);
			_buildButtons(navigationBar);
		};
		
		var _buildButtons = function(navigationBar) {
			navigationBar.append(BudgetBuddy.engine.createButton({id:'dashboard_button', text: BudgetBuddy.strings.dashboard, callback: _buttonEvents.dashboardButtonEvent}))
				.append(BudgetBuddy.engine.createButton({id:'login_button', text:BudgetBuddy.strings.login, callback: _buttonEvents.loginButtonEvent}))
				.append(BudgetBuddy.engine.createButton({id:'register_button', text:BudgetBuddy.strings.register, callback: _buttonEvents.registerButtonEvent}))
				.append(BudgetBuddy.engine.createButton({id:'payees_button', text:BudgetBuddy.strings.payees, callback: _buttonEvents.payeesButtonEvent}));	
		};
		
		var _setupButtonEvents = function() {
			$('.button').on('click', function() {
				$(this).data('callback')();
			});
		};
		
		_init();
	};
	
	BudgetBuddy.engine.registerSubscriber(new UI());
	return base;
})(BudgetBuddy || {});

// var UserInterface = function(config) {
// 	var props = {
// 		
// 	};
// 	
// 	function init(config) {
// 		$.extend({}, props, config);
// 		Core.RegisterSubscriber(this);
// 	};
// 	
// 	this.Notify = function(notification) {
// 		switch(notification) {
// 			default:
// 				break;
// 		}
// 		
// 		return this;
// 	};
// 	
// 	init(config);
// };