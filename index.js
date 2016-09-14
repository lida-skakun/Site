// Frequently asked questions - showing answers
		$('#first_li').mouseover(function() { 
		    $('#answer1').removeClass('hidden');
		    }).mouseout(function() {
		    	$('#answer1').addClass('hidden');
		        });

		$('#second_li').mouseover(function() { 
		    $('#answer2').removeClass('hidden');
		    }).mouseout(function() {
		        $('#answer2').addClass('hidden');
		        });
		$('#third_li').mouseover(function() { 
		    $('#answer3').removeClass('hidden');
		    }).mouseout(function() {
		        $('#answer3').addClass('hidden');
		        });
		$('#fourth_li').mouseover(function() { 
		    $('#answer4').removeClass('hidden');
		    }).mouseout(function() {
		        $('#answer4').addClass('hidden');
		        });
		$('#fifth_li').mouseover(function() { 
		    $('#answer5').removeClass('hidden');
		    }).mouseout(function() {
		        $('#answer5').addClass('hidden');
		        });
		$('#sixth_li').mouseover(function() { 
		    $('#answer6').removeClass('hidden');
		    }).mouseout(function() {
		        $('#answer6').addClass('hidden');
		        });

// Changing templates images
$('.carousel').carousel({
    interval: 2000 
});

// Feedback
send.onclick = function feedback_ready() {
	var name = document.getElementById("inputName");
	var email = document.getElementById("inputEmail");
	var phone = document.getElementById("inputPhone");
	var form_to_send = [name.value, email.value, phone.value];

}