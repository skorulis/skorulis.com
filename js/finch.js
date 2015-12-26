function printPage() {
	var h = $("#mainContent");
	console.log(h.html());
}

setTimeout(printPage,1000);