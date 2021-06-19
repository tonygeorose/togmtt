const express = require("express");
const bodyParser = require("body-parser")

// New app using express module
const app = express()
app.use(bodyParser.urlencoded({
	extended:true
}));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/api", function(req, res) {
 	let pswd =  req.body.pswd;
	if (pswd == '1'){
		res.json('{"result": "Hello World"}' );
	} else {
		res.json('{"result": "Wrong Password"}' );
	}
	res.send();
});

app.listen(3000, function(){
	console.log("Tony's test server is running on port 3000");
})