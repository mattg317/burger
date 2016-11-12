
var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js')

router.get('/', function(req,res){
	burger.selectAll(function(data){
		//var burObject ={burger: data};
		//console.log(burObject.id);
		res.render('index', {burger: data});
	});
});

router.post('/create', function(req, res){
	burger.insertOne(req.body.type, false, function(){
		res.redirect('/')
	})
});

router.put("/update/:id", function(req, res){
	burger.updateOne(req.params.id, function(err, data){
		res.redirect('/');
	})
});

module.exports = router;



//=============================
// app.put("/update/:id", function(req, res){
// 	connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [req.params.id], function(err, data){
// 		if (err) throw err;
// 		console.log(data);
// 		res.redirect('/');
// 	})
// })