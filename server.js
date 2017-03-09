/*
//NODE Server example

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end("Hello World");
});


server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
*/

/*Express Server Starts Here*/
var express = require('express')
var app = express()
var mongoose = require('mongoose')
var config = require('./server/config/config')

/*ROUTES*/
var home = require('./server/routes/main.route')


app.use('/', home)
/*
//No longer need this block of code, the above replaces the whole functionality
app.get('/', function(req, res){
	res.send('Hello World!')	
})
*/

app.listen(config.port, function(){
	console.log("Server listening on port "+ config.port+"!")
})

mongoose.connect(config.connectionString)
