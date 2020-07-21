var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2",{useNewUrlParser: true, useUnifiedTopology: true});

var Post=require("./models/post.js")
var User=require("./models/user.js")

//user e,mail , name

Post.create({
	title:"How to create  the best burger part 4",
	content:"jdsldflsdanldsakdsam"
},function(err,post){
	User.findOne({email:"bob@gmail.com"},function(err,foundUser){
		if(err){
			console.log(err);
		} else {
			foundUser.posts.push(post);
			foundUser.save(function(err,data){
				if(err){
					console.log(err);
				} else {
					console.log(data);
				}
			})
		}
	});
});

// User.create({
// 	email:"bob@gmail.com",
// 	name: "Bob Belcher"
// });

//find user
//find all post for that user
// User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(err,user){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });