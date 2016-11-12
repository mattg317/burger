
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'm7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	port: 3306,
	user: 'ptwhimauta9cnhee',
	password: 'a2xzzyq6wy4kf2o1',
	database: 'x0b2jmtssyuutb5d'
});




connection.connect(function(err){
	if (err){
		console.log('error connecting; '+err.stack);
		return;
	}
	console.log('connect as id '+ connection.threadId);
})

module.exports = connection; 