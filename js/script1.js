function changeColor(color, box) {
	box.css('background-color', color);
}
$(document).ready(function(){

	$("#mybox").on('click', function(){
		changeColor('red', $(this))
	});

	$("#btn1").on('click', function(){
		changeColor('green', $("#box2"))
	});

	var btn2 = $("#btn2");

	btn2.on('click', function(){
		$("#box3").width("300px");
		$("#box3").height("100px");
	});

	$("#texthover").on('mouseover', function(){
		$(this).html("HELLO WORLD");
	});

	$("#movetext").on('mouseover', function(){
		$(this).css("margin-top", "170px");
	});

	var result = $("#result");

	$("#inputtxt").on('keyup', function(){
		var value = $(this).val();
		result.text(value);
	});

	$("#btn3").on('click', function(){
		$("#box7").toggleClass("boxy");
	});

	$("#selectKPOP").change(function(){
		$("#result2").text($(this).val());
	});

});