$(document).on('ready', function() {
	$('#register_user_form').submit(function(e) {
		e.preventDefault();
		var username = $('#username_input').val(), email = $('#email_input').val();
		if(username === '') {
			alert('please enter a username');
		} else {
			var r = $.ajax({
				method: 'POST',
				url: "http://mike-malcolm.co.uk/projects/budget_buddy/insertNewUser.php",
				data: {username: username, email: email},
				error: function() {
					alert('There was an error');	
				},
				success: function(r) {
					alert('You have been successfully registered');
				}
			});
		}
	});
});