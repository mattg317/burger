var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

var port = 3000;
app.listen(port);


//Routes eventually=========================
//var routes = require('./controllers/burger_controller.js');
//app.use('/', routes);

//mysql for now===========================
// var mysql = require('mysql');

// var connection = mysql.createConnection({


// });




// connection.connect(function(err){
// 	if (err){
// 		console.log('error connecting; '+err.stack);
// 		return;
// 	}
// 	console.log('connect as id '+ connection.threadId);
// })

/*
//Get Handle Bars working=======================================
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");


app.get('/', function(req, res){
	connection.query("SELECT * FROM burgers;", function(err, data){
		if(err) throw err;
		res.render('index', {
			burgers: data
		});
	});
});

app.post('/create', function(req, res){
	connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [req.body.type, false], function(err,result){
		if(err) throw err;
		console.log(req.body.type);
		res.redirect('/');
	})
})

app.put("/update/:id", function(req, res){
	connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [req.params.id], function(err, data){
		if (err) throw err;
		console.log(data);
		res.redirect('/');
	})
})
//PORT listener==========================================
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log("Now listening to you live on: ", PORT);
});
*/