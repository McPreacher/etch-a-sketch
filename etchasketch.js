//javascript/jquery for etchasketch//


var createGrid = function() {
	for(var x = 0; x < 16; x++) {  
		for(var y = 0; y < 16; y++) {
			var $grid = $('<div class="grid"></div>');
			$grid.appendTo('#container');
		}
		
	}
	
};
			
//get the document ready and set up the drawing grid//
$(document).ready(function() {
	createGrid();

	//tell the browser what to do when the mouse touches the blocks on the grid//
	$('div').on('mouseenter', function() {
		$(this).css('background-color', 'firebrick');
	});
	$(document).on('mouseenter', 'div', function() {
		$(this).css('background-color', 'firebrick');
	});
	
	//add some style to the 'clear sketch' button//
	$('input').hover(
		function() {
			$('input').addClass('active');
			
		},
		
		function() {
			$('input').removeClass('active');
		}
	);
	
	$('input').click(function() {
		$('#container').empty();
		createGrid();
	});
	
});
