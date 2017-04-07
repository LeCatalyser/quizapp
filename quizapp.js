//Follow MCV model.
//Model
	//will contain variables inside the app.

var state = {//single source of truth
	items: [{
		name: "Rosa Parks", 
		warnings: [
			"don't smile", 
			"don't buy milk", 
			"don't sit on the white side of the bus", 
			"don't march"
		],
		result:2
	}]
}
//Rendering
var renderList = function(state) {
	var question = state.items[0]
	var name = question.name
	var warnings = name.warnings

	var html = `
		<div>Hi</div>
	`
	$('.questions').html(html);
}
renderList(state)



 
//Pieces on info per questions:
	//1)"name" '+' "warning:" 
	//2) multiple choice
	//3) correct/incorrect response
//quizz will load
//question #1