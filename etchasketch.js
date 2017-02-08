//javascript/jquery for etchasketch//

//make $grid global//


//creates the original grid on the page//
var createGrid = function() {
	for(var x = 0; x < 16; x++) {  
		for(var y = 0; y < 16; y++) {
			var $grid = $('<div class="grid"></div>');
			$grid.appendTo('#container');
		}
		
	}
	
};
var customGrid = function() {
	var num = prompt("How many squares for your grid?");
	for(var x = 0; x < num; x++) {
		for(var y = 0; y < num; y++) {
			var $grid = $('<div class="grid"></div>');
			$grid.appendTo('#container');
			var blockSize = (576/num) - 1;
			$grid.css("height", blockSize);
			$grid.css("width", blockSize);
			$grid.css("margin", "0.5px");
		}
	}
};
	
	
	

			
//get the document ready and set up the drawing grid//
$(document).ready(function() {
	createGrid();

	//tell the browser what to do when the mouse touches the blocks on the grid//
	$('.grid').on('mouseenter', function() {
		$(this).css('background-color', 'crimson');
	});
	$(document).on('mouseenter', '.grid', function() {
		$(this).css('background-color', 'crimson');
	});
	
	//add some style to the 'clear sketch' button//
	$('#clear').hover(
		function() {
			$('#clear').addClass('active');
			
		},
		
		function() {
			$('#clear').removeClass('active');
		}
	);
	
	//add the same style to custom sketchpad button//
	$('#custom').hover(
		function() {
			$('#custom').addClass('active');
		},
		
		function() {
			$('#custom').removeClass('active');
		}
	);
	
	//Control what happens when the clear sketch button is pressed//
	
	$('#clear').click(function() {
		
		$('#container').empty();
		createGrid();
	});
	
	//Control what happens when the custom sketchpad button is pressed//
	
	$('#custom').click(function() {
		$('#container').empty();
		customGrid();
	});
	
});
