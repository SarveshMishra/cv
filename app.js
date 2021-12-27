// Import
const myExpress = require("express");
const https = require("https");

// Calling express app
const app = myExpress();
app.use(myExpress.static("public"));

// GET Method
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

// POST Method
app.post("/", function (res, req) {});

//Local Server Method
app.listen(process.env.PORT || 3000, function () {
	console.log("Server has started at 3000 port address");
});
