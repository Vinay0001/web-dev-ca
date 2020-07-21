var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/catapp",{useNewUrlParser: true, useUnifiedTopology: true});

var catSchema= new mongoose.Schema({
	name:String,
	age: Number,
	temperament:String
});

var Cat=mongoose.model("Cat",catSchema);
//adding a new cat to the dbs
// var george=new Cat({
// 	name:"George",
// 	age:10,
// 	temperament:"grouchy"
// });

// george.save(function(err,cat){
// 	if(err){
// 		console.log("You have an error")
// 	} else {
// 		console.log("we just saved a cat: ")
// 		console.log(cat);
// 	}
// });

Cat.create({
	name:"snow white",
	age:15,
	temperament:"nicee"
},function(err,cat){
if(err){
	console.log(err);
}else {
	console.log(cat);
}
});
//retrieve all cats from te db and console.log each one

Cat.find({},function(err,cats){
	if(err){
		console.log("OH NO ERROR!");
		console.log(err);
	}else {
		console.log("all the cats: ");
		console.log(cats);
	}

});