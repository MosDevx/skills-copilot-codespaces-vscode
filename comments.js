//Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

//connect to mongodb
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/comments');

//create schema
var Comment = require('./model/comments');

//path to static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//define routes
app.get('/comments', function(req, res) {
  Comment.find(function(err, comments) {
    if (err) {
      console.log(err);
    } else {
      res.json(comments);
    }
  });
});

app.post('/comments', function(req, res) {
  var comment = new Comment();
  comment.author = req.body.author;
  comment.text = req.body.text;
  comment.save(function(err, comment) {
    if (err) {
      console.log(err);
    } else {
      res.json(comment);
    }
  });
});


