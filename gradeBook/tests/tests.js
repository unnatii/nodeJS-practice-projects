var gbook=require('../lib/gradebook').book;

exports["setUp"]=function(callback){
    gbook.reset();
	callback();	
};

exports["can add grade"]=function(test){
	gbook.addgrade(90);
	var c=gbook.count();
	test.equal(c,1);
	test.done();
};

exports["can give letter grade"]=function(test){
	gbook.addgrade(90);
	gbook.addgrade(60);
	gbook.addgrade(60);
	var grade=gbook.lettergrade();
	test.equal(grade,'C');
	test.done();	
};

exports["can do average of grades"]=function(test){
	gbook.addgrade(45);
		gbook.addgrade(75);
	var a=gbook.avg();
	test.equal(a,60);
	test.done();
	
};