var express = require('express');
var method_override = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();

var orm = require('./config/orm.js')

//orm.selectAll('burgers');
orm.insertOne("fancy", false);
//orm.updateOne('burgers', "Fancy", true, 1)