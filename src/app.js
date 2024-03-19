const express = require("express");
const mongoose = require("mongoose");
const bp = require("body-parser");

var Form = require("../models/form");

mongoose.connect("mongodb://127.0.0.1:27017/Form", 
{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
db.once('open', () => {
    console.log('Connected to the database');
});

const app = express();

//Middlewares
app.set('view engine','ejs'); 
app.use(bp.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.render("form")
});


app.get("/result", function(req, res) {
  res.render("result");
});

app.post("/", async function(req, res) {
  var uname = req.body.uname;
  var email = req.body.email;
  var f = { username: uname, email: email };

  try {
    const newlyCreatedForm = await Form.create(f);
    res.redirect("/result");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while creating the form.");
  }
});


app.listen(3000,function(){
  console.log("Server is running on 3000")
});