$(document).ready(function(){
	var elements = $('#firstDiv');
console.log(elements[0]);

$('#myButton').click(function(event){
	console.log($(this));
	this.innerHTML = "change the button content!";

	var newElement = "<div>Adding divs like it's our job</div>";
	var parentElemnt = $(this).parent();
	$(parentElemnt).append(newElement);

	$(this).addClass('newClass');

	$(elements).toggleClass("blueDiv");

   });

});

