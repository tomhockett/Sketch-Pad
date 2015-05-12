$(document).ready(function() {

	var page_width = 960;

	$("#button").click(function() {
		boxes_per_row = prompt("How many squares per row?");
		for (var i = 0; i < Math.pow(boxes_per_row, 2); i++) {
			$("#container").append("<div class='pixel'></div>");
		};

		$(".pixel").css("background-color", "#1E1E1E");

		var height_and_width_of_box = Math.round(page_width/boxes_per_row);
		$(".pixel").height(height_and_width_of_box);
		$(".pixel").width(height_and_width_of_box);

		$("#container > div").hover(function () {
			$(this).css("background-color", "#929292");
		});
	});
});