
var mysql = require('mysql');

var connection = mysql.createConnection({
	
});




connection.connect(function(err){
	if (err){
		console.log('error connecting; '+err.stack);
		return;
	}
	console.log('connect as id '+ connection.threadId);
})

module.exports = connection; 