var data = {
	'Category xxxx': [
	{ units: 1234, subcategory: 'wolves', name: 'Starks' }, 
	{ units: 1345354, subcategory: 'wolves', name: 'Starks' }, 
	{ units: 666, subcategory: 'dragons', name: 'Targaryens' }
	],
	'Category yyyy': [
	{ units: 7783, subcategory: 'lions', name: 'Lanisters' }, 
	{ units: 1267878, subcategory: 'spires', name: 'Martells' }
	]
};

var result = {};

Object.keys(data).forEach(function (key) {
	var hash = {};
	data[key].forEach(function (v, k) {
		isNaN(hash[(k = v.subcategory + v.name)]) ?
			(hash[k] = this.push(v) - 1) :
			(this[hash[k]].units += v.units);
	}, (this[key] = []));
}, result);

console.log(result)