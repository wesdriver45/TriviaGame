
window.onload = function() {
	$("#gameBox").hide();
};




$(document).ready(function() {
//start game function
//big start button in center of page
$(".startGame").on("click", function() {
	$(".startBox").hide();
	$("#header").hide();
	$("#gameBox").show();
	$("#display").show();
});
//timer at the top under title 'It's our time down here:'
	

});
//timer set to 1:30
//8 ques with 4 multi choice answers each
//each answer has a circle click
//compare each answer to right answer
//game ends at time up or all ques answered
//play again button at bottom resets game