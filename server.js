// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require History Schema
var Article = require("./models/article.js");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(express.static("./dist"));
// app.use(express.static("./public"));
// app.use(express.static("./dist"));
// -------------------------------------------------
// app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.static("./public"));


// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/reactnyt");
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});


app.get("/", function(req, res) {

    res.sendFile(__dirname + "/public/index.html");
});


app.get("/api", function(req, res) {
  console.log('hi');
  Article.find({}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// // This is the route we will send POST requests to save each search.
app.post("/api", function(req, res) {
    console.log(req.body.title);
    console.log(req.body.link);
    console.log(req.body.date);
  Article.create({
    title: req.body.title,
    link: req.body.link,
    date: req.body.date
  }, function(err) {
    if (err) {  
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
