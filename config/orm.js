
var connection = require('./connection.js')

// function selectAll(){

// 	connection.query("SELECT * FROM burgers", function(err, result){
// 		console.log(result);
// 		return result;
// 	})
// }

// function insertOne(){

// 	conneciton.query("INSERT INTO burgers VALUES ?", function(err, result){
// 		console.log(result);
// 		return result;
// 	}
// }

// function updateOne(){

// 	connection.query('UPDATE burgers SET ? WHERE', function(err, reult){
// 		console.log(result);
// 		return result
// 	})
// }

var orm ={
	selectAll: function(tableInput) {
		var queryString = "SELECT * FROM "+ tableInput;
		connection.query(queryString, function(err, result){
			console.log(result);
		})
	},
	insertOne: function(name, dev){
		var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES ('"+name+"',"+dev+")";
		console.log(queryString);
		connection.query(queryString, [name, dev], function (err, result){
			console.log(result);
		})
	},
	updateOne: function(tableInput, name, dev, id){
		var queryString= "UPDATE "+tableInput+ " SET burger_name= '"+name+"', devoured= "+ dev + " WHERE id= "+id;
		console.log(queryString);
		connection.query(queryString, function(err, result){
			console.log(result);
		})
	}
}

module.exports = orm;