var gradebook=require('./lib/gradebook').book;
var sum=0;
for(var i=2;i<process.argv.length;i++){
	gradebook.addgrade(parseInt(process.argv[i]));
	
}
console.log("your average score is : "+gradebook.avg());
console.log("your grade is : "+gradebook.lettergrade());