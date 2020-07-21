 var express=require("express");
 var app=express();
 // '/' =>"hii there"
 app.get("/",function(req,res) {
 	// body...
 	res.send("hii there!");
 });
  app.get("/bye",function(req,res) {
 	// body...
 	res.send("byee bro");
 });
app.get("/r/:subname",function(req,res){
	var subname=req.params.subname; 
	res.send("welcome to the "+ subname.toUpperCase()+" Subsite Page");
});
app.get("/r/:subname/:id/:title",function(req,res){
	res.send("welcome to  a subreddit");
})
app.get("*",function(req,res){
res.send("you are a star");
});

//code to listen for request

app.listen(3000,function(){
	console.log("server has started");
});