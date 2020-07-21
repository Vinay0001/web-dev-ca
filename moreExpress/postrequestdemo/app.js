var express= require("express");
var app=express();
var bodyparser= require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine","ejs");
var friends=["tony","miranda","chandler","joey","phoebe"];

app.get("/",function(req,res){
	res.render("home");
});
app.post("/add",function(req,res){
	var newfriend= req.body.newfriend;
	friends.push(newfriend);
	res.redirect("/friends");
});
app.get("/friends",function(req,res){
	res.render("friends",{friends:friends});
});

app.listen(3000,function(){
	console.log("server started");
});