
window.onload = function() {
	$("#gameBox").hide();
	$("#display").hide();
	$("#scoreBox").hide();
	$(".resetBox").hide();
	
};

$(document).ready(function() {


//start game function
//big start button in center of page
$(".startGame").on("click", function() {


	$(".startBox").hide();
	$("#header").hide();
	$("#gameBox").show();
	$("#display").show();


//timer set to 60
	var time = 5;
	var timer = setInterval(countDown, 1000);

	function countDown() {
		time--;
		if (time === 0) {
			stop();
}
	$("#display").text(time);
}

	function stop() {
		clearInterval(timer);
		$("#scoreBox").show();
		$("#header").show();
		$(".resetBox").show();
		$("#gameBox").hide();
	}		
	
	
	

});

//ques function


// var right = 0;
// var wrong = 0;

// $(":radio").on("click, function") {
// 	if (value === "true") {
// 		right++;
//		$("#right").text(right);
// 	} else {
// 		wrong++;
//		$("#wrong").text(wrong);
// 	}
// };


//game ends at time up or all ques answered
//play again button at bottom resets game

});


