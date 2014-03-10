$(function(){
	var data = [];
	data.push([0, 90]);
	data.push([1, 95]);
	data.push([2, 80]);
	data.push([3, 90]);
	data.push([4, 95]);
	data.push([5, 80]);
	data.push([6, 90]);
	data.push([7, 95]);
	data.push([8, 80]);
	data.push([9, 90]);
	data.push([10, 95]);
	data.push([11, 80]);
	data = [data];
	$.plot($("#placeholder"), data, { yaxis: { max: 100 },
		xaxis: {
		    ticks: [[0,'Jan'],[1,'Feb'],[2,'Mar'],[3,'April'],[4,'May'],[5,'June'],[6,'July'],[7,'Aug'],[8,'Sep'],[9,'Oct'],[10,'Nov'],[11,'Dec']]
		  }
	 });
});