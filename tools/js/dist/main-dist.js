"use strict";

$(document).ready(function () {

	// Your JavaScript goes here
	$(".ks-switch-unit").click(function () {
		if ($("#ks-switch-off").is(":checked")) {
			$('#landing').addClass("landing-change");
			$('#light').addClass('light-show');
		} else {
			$('#landing').removeClass("landing-change");
			$('#light').removeClass('light-show');
		}
	});
});