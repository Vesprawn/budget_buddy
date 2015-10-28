var page = function() {
	this.init = function() {
		$('body').append($('<p>Welcome'+Core.currentUser+'</p>'));
	};
	
	this.init();
};