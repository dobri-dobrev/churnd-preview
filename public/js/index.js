$(function(){
	var ser1 = [];
	ser1.push([0, 90]);
	ser1.push([1, 91]);
	ser1.push([2, 88]);
	ser1.push([3, 87]);
	ser1.push([4, 93]);
	ser1.push([5, 95]);
	ser1.push([6, 91]);
	ser1.push([7, 92]);
	ser1.push([8, 93]);
	ser1.push([9, 94]);
	ser1.push([10, 94]);
	ser1.push([11, 94]);
	var ser2 = [];
	ser2.push([0, 88]);
	ser2.push([1, 92]);
	ser2.push([2, 86]);
	ser2.push([3, 88]);
	ser2.push([4, 91]);
	ser2.push([5, 97]);
	ser2.push([6, 93]);
	ser2.push([7, 94]);
	ser2.push([8, 89]);
	ser2.push([9, 91]);
	ser2.push([10, 92]);
	ser2.push([11, 92]);





	data = [ser1,ser2];
	$.plot($("#placeholder"), data, { 
		yaxis: { 
			min: 85, 
			max: 100,
			axisLabel: 'Retention'
		},
		xaxis: {
		    ticks: [[0,'Jan'],[1,'Feb'],[2,'Mar'],[3,'Apr'],[4,'May'],[5,'Jun'],[6,'Jul'],[7,'Aug'],[8,'Sep'],[9,'Oct'],[10,'Nov'],[11,'Dec']],
		    show: true,
		    axisLabel: 'Time',
		    position: 'bottom'
		  },
	 });
});