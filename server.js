var express = require("express");
var bodyParser = require("body-parser");
//var methodOverride = require("method-override");

//set the path
var PORT = process.env.PORT || 8080;
var path = require("path");

//set the express
var app = express();


//server static content for the app from the public directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

//app.use(methodOverride("method"));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var router = require("./controllers/burger_controller.js");
//app.use(router);

app.listen(PORT, function() {
    console.log("App now listening at the localhost" + PORT);

})