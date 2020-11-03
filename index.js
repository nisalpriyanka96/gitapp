var express = require("express")
var app = express()

app.get("/", function(req,res){
    res.send("connection sucess")
});

app.listen(3000);