const request=require('request');
console.log("");
request('https://jsonplaceholder.typicode.com/users/1',function(error,response,body){
	console.error('error:',error);
	console.log('statusCode:',response && response.statusCode);
	var parsedData=JSON.parse(body);
	console.log(parsedData["name"]);
});