$(document).ready(function(){
	$('#add-profile').on('submit', function(e){
		e.preventDefault();
	var url = 'https://api.github.com/users/' + $('#username').val() + "?access_token=8bf19aa201701b7d56ee9b4125c9647a39dd766c";
	var userData = $.get(url, function(user){
			var template = $('#profile-template').html();
				if($('#' + user.login)[0]){
					alert('This user is already on the page')
				}
				else {
				$('.profile-container').append(Mustache.render(template, user));
			}
			}).always(function(){
				$('#username').val('');
			}).fail(function(){
				alert('This github profile does not exist.')
			});
		
	

			$.get(url, function(user){
				$('.' + user.login).on('click', function(){
					$(this).parent().parent().remove();
			});
		});
	});
});