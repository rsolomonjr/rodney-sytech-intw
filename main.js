// Please complete the below exercises preferrably using JQuery
jQuery.fn.outerHTML = function() {
   return jQuery('<div />').append(this.eq(0).clone()).html();
};

$('h1').append($('.close').outerHTML()); 
$('span:nth-child(2)').remove('.close');

// 1. Make each item's paragraph collapse/expand when the title is clicked
  $('.title').on("click", function(){
 	$(this).siblings('.description').slideToggle("slow"); 
 })

// 2. Remove each item when we click on the closing X

$('.close').on("click", function(){
	$(this).closest('.item').remove();
})


// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items

$('.add').click(function(e){
	e.preventDefault(); 
	$('.title').unbind(); 
	var newHElem; 
	value = $('#newtitle').val(); 
	if(!value){ /* if there is no value in the input */ 
		
		var matched = $('.item'); 
		
		var newHElem = 'Title ' + (matched.length + 1);
		$('.item-list').append($('.item:last').outerHTML()); 
		$('.item:last h1').html(newHElem).append($('.close').outerHTML()); 

		
	} else{ /* else there is a value */ 
		var newHElem = value; 
		$('.item-list').append($('.item:last').outerHTML()); 
		$('.item:last h1').html(newHElem).append($('.close').outerHTML()); 
	}		

	$('.title').on("click", function(){
		 	$(this).siblings('.description').slideToggle("slow"); 
		 })

		$('.close').on("click", function(){
			$(this).closest('.item').remove();
		})
	})

//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page

