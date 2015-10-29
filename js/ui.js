var UserInterface = function(config) {
	var props = {
		
	};
	
	function init(config) {
		$.extend({}, props, config);
		Core.RegisterSubscriber(this);
	};
	
	this.Notify = function(notification) {
		switch(notification) {
			default:
				break;
		}
		
		return this;
	};
	
	init(config);
};