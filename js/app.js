$(function() {

	const navToggle = $("#navToggle");
	const nav = $("#nav");

	navToggle.on("click", function(event) {
		 event.preventDefault();

		 nav.toggleClass("show");
	});
	
});
