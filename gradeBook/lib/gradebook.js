var gradebook={
	grades:[],
	addgrade:function(newgrade){
		this.grades.push(newgrade);
	}	,
	count:function(){
		return this.grades.length;
	}
	,
	avg:function(){
		var sum=0;
		for (var i=0;i<this.grades.length;i++){
			sum=sum+this.grades[i];
		}
		return sum/this.grades.length;
	},
	lettergrade:function(){
		
		var a=this.avg();
		if(a>=90)
			return 'A';
		else if(a>=80)
			return 'B';
		else if(a>=70)
			return 'C';
		else if(a>=60)
			return 'D';
		return 'F'
		
	},
	reset:function(){
		this.grades=[];
	}
}



exports.book=gradebook; 