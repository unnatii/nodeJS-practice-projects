$("ul").on("click","span",function(event){
	//alert("on");
	$(this).parent().fadeOut(200,function(){
        $(this).remove();
	})
	event.stopPropagation();
})

$("ul").on("click","li",function(){
	$(this).css({
		textDecoration:"line-through",
		color:"rgb(128,128,128)"
	})
})

$("input").keypress(function(event){
	var txt= $(this).val();
	if(event.which===13 && txt!=""){
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+txt+"</li>");
	}
})

$(".fa-plus").on("click",function(){
	$("input").fadeToggle(0.1);
})

