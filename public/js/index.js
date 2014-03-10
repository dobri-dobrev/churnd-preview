$(function(){
	var data = [];
	data.push(['J', 90]);
	data.push(['F', 95]);
	data.push(['M', 80]);
	$.plot($("#placeholder"), data, { yaxis: { max: 100 } });
});