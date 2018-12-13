// Check of specific todos by clicking	
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Click on X to delete/remove Todo 
$("ul").on("click","span",function(event) {
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//Removing the input text
		$(this).val("");
		//Create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

// link '+' - plus icon to input 
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});