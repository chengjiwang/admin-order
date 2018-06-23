$(document).ready(function () {
	var chart = c3.generate({
		bindto: '#chart',
		data: {
			x: 'x',
			//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
			columns: [
				['x', '2018-06-18', '2018-06-19', '2018-06-20', '2018-06-21', '2018-06-22'],
				['revenue', 8130, 6200, 7100, 5400, 7150],
				['cost', 6130, 4340, 5200, 4500, 6250],
				['income', 5130, 6340, 4200, 5500, 6250]
			]
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: '%Y-%m-%d'
				}
			}
		}
	});
});

