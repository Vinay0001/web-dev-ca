var express=require("express");
var app=express();
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("home.ejs");
});
app.get("/fallinlovewith/:thing",function(req,res){
var thing=req.params.thing;
res.render("love.ejs",{thingVar:thing});
});
app.get("/posts",function(req,res){
	var posts=[
	{title:"post 1",author:"suzy"},
	{title:"My adorable pet bunny",author:"charlie"},
	{title:"Can you believe this pomsky",author:"colt"}
	];
	res.render("posts.ejs",{posts:posts})
});

app.listen(3000,function(){
	console.log("Server is all set up");
});