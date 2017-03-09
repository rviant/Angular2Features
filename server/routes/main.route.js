var express = require('express')
var router = express.Router()

router.use(function timelog(req, res, next){
	console.log("Time: ", Date.now())
	next()
})

router.get('/', function(req, res){
	res.send("Sending Home")
})

module.exports = router
