var orm = require('../config/orm');

orm.selectAll('burgers');
//orm.insertOne("fancy", false);
//orm.updateOne('burgers', "Fancy", true, 1)

//module.exports = burgers.js;

var burgers ={
	selectAll: function(callback){
		orm.selectAll("burgers", function(res){
			callback(res)
		})
	}

}

module.exports = burgers;