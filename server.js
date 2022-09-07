const express = require("express");
const app = express();

app.get("/",function(request,response){
    response.send("<h1>Hello, world</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact me at jhbacjcj@gmail.com");
});

app.get("/about",function(req,res){
    res.send("My name is SHUBHAM NATH TIWARI");
});

app.get("/hobbies",function(req,res){
    res.send("My love watching comedy");
});


app.listen(3000,function(){
    console.log("Server");
});