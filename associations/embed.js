var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo",{useNewUrlParser: true, useUnifiedTopology: true});

//post-title,content
var postSchema=new mongoose.Schema({
title:String,
content:String
});
var Post=mongoose.model("Post",postSchema);

//user e,mail , name
var userSchema=new mongoose.Schema({
email:String,
name:String,
posts: [postSchema]
}); 
var User=mongoose.model("User",userSchema);



// var newUser= new User({
// 	email: "hermoine@hogwarts.edu",
// 	name:"hermoine granger"
// });
// newUser.posts.push({
// 	title:"how to brew polyjuice potion",
// 	content:"Just kidding,go learn it from snape"
// });
// newUser.save(function(err,user){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });

// var newPost=new Post({
// 	title:"reflections on apples",
// 	content:"they are delicious"
// });
// newPost.save(function(err,post){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

User.findOne({name: "hermoine granger"},function(err,user){
	if(err){
		console.log(err);
	} else {
		user.posts.push({
			title:"3 things i really hate",
			content:"Voldemort,Coldemort and Voldemort"
		});
		user.save(function(err,user){
			if(err){
				console.log(err);
			} else {
				console.log(user);
			}
		})
	}
});