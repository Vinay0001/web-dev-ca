var express=require("express");
var app=express();
app.get("/",function(req,res){
	res.send("hiii welcome to my assignment")
})
app.get("/speak/:animal",function(req,res){
	var sounds={
		pig:"oink",
		cow:"moo",
		dog:"bark",
		cat:"meow",
		goldfish:"....."
	}
	var animal=req.params.animal;
	var sound=sounds[animal];
	res.send("the "+ animal + " says "+sound);
});
app.get("/repeat/:text/:num",function(req,res){
	var text=req.params.text;
	var num=req.params.num;
	var output="";
	for(var i=0;i<num;i++){
			output+=text+" ";
		
	};
	res.send(output);

})
app.get("*",function(req,res){
	res.send("404 page not found");
});
app.listen(3000,function(){
	console.log("now serving your app");
})