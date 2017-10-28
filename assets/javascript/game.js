
window.onload = function() {
	$("#gameBox").hide();
	$("#display").hide();
	$("#scoreBox").hide();
	
};

var right = 0;
var wrong = 0;

$(document).ready(function() {
//start game function
//big start button in center of page
$(".startGame").on("click", function() {
//timer set to 60
	var timer = 60;

	var interval = setInterval(function() {
    	timer--;
    	$("#display").text(timer);
    	if (timer === 0) clearInterval(interval);
		}, 1000);

	$(".startBox").hide();
	$("#header").hide();
	$("#gameBox").show();
	$("#display").show();

	
	}

});

// $(":radio").on("click, function") {
// 	if (value === "true") {
// 		right++;
// 	} else {
// 		wrong++;
// 	}
// };



	

});

//ques function

//compare each answer to right answer
//game ends at time up or all ques answered
//play again button at bottom resets game