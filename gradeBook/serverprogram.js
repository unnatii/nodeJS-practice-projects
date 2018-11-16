var gradebook=require('./lib/gradebook').book;

var express=require('express');
var app=express();
app.get('/',function(req,res){
	res.send("go to (localhost:3000/grade?grades=__,__,.. )  and give your marks ");
});

app.get('/grade',function(req,res){
	var grades=req.query.grades.split(",");
	for(var i=0;i<grades.length;i++){
		gradebook.addgrade(parseInt(grades[i]) );
	
	}
		var g=gradebook.avg();
		var lg=gradebook.lettergrade();
		res.send("your average is : "+g+" & grade is :"+lg);
});
app.listen(3000);
console.log('server ready..');