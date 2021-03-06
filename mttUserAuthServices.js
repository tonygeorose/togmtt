const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || '5000'
//const host = '0.0.0.0';
// New app using express module
const app = express();

app.use(
	express.urlencoded({
	  extended: true
	})
  );
  
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

app.listen(port,function(){
	console.log("My test server is running on port " + port);
});

 
