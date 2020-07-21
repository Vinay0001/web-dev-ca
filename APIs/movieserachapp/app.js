const express=require("express");
const app=express();
const request=require("request");

app.set("view engine","ejs");
app.get("/",function(req,res){
	res.render("search");
});
app.get("/results",function(req,res){
	var query=req.query.search;
	var url="http://omdbapi.com/?s="+query+"&apikey=thewdb";
request(url,function(error,response,body){
	console.error('error:',error);
	console.log('statusCode:',response && response.statusCode);
	var data=JSON.parse(body)
	res.render("results",{data: data});
	});
});

app.listen(3000,function(){
	console.log("Movie app started")
});