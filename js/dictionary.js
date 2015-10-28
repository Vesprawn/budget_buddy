var Dictionary = function() {
	var keys = [],
		values = [];
		
	this.Add = function(key, value) {
		keys.push(key);
		values.push(value);
	};
};