$(document).ready(function() {

	var boxes_per_row = 80;
	var page_width = 960;
	var height_and_width_of_box = Math.round(page_width/boxes_per_row);

	for (var i = 0; i < Math.pow(boxes_per_row, 2); i++) {
		$("#container").append("<div class='pixel'></div>");
	};

	$(".pixel").height(height_and_width_of_box);
	$(".pixel").width(height_and_width_of_box);

	$("#container > div").hover(function () {
		$(this).css("background-color", "#929292");
	});

	$("#container > div").click(function () {
		$(".pixel").css("background-color", "#1E1E1E");
	});
});

