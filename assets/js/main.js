
$(document).ready(function(){
	

    $( ".answer_dice" ).draggable({
		containment:".main_box",
		cursor:"move",
		revert:"invalid",
		snap:".picture_box_snap",
		snapMode: "inner",
		snapTolerance:100,
	});
	$( ".holder_position" ).droppable({
		
	});
    $( ".drop_place" ).droppable({

    });


});



