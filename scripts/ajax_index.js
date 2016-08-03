function sendData(route) {
	var data = {}
	console.log(route);
	if(route === '/submit') {
		var region = document.getElementByName("regionInput").value
		var battletag = document.getElementByName("battletagInput").value
		var platform = document.getElementByName("platformID").value
		data = {'region': region, 'battletag': battletag, 'platform': platform}
	}
	$.ajax({
   	type: "POST",
   	// Are routes "auto-completed" based on the current hostname,
   	// or do I need to make localhost:8080, etc explicit?
   	url: route,
   	data: data,
   	success: function(data) {
   	},
   	error: function() {
   		console.log("An error has occurded", data)
   	}
	});
}