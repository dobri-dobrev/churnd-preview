$(function(){
	var data = [];
	data.push([0, 90]);
	data.push([1, 95]);
	data.push([2, 80]);
	data = [data];
	$.plot($("#placeholder"), data, { yaxis: { max: 100 },
		xaxis: {
		    ticks: [[0,'Bob'],[1,'Chris'],[2,'Joe']]
		  }
	 });
});