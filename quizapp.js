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
//next two steps: 1)writing my html, 2) map it
//will need to make the question number dynamic. 
var renderList = function(state) {
	var question = state.items[0]
	var name = question.name
	var warnings = question.warnings
	//item is always singular and index referring to which element with in the array
	var itemsHtml = warnings.map(function(item,index){

		//update classes
		return `
			<li index="${index}"> 
        		<span class="">${item}</span>
        		<div class="shopping-item-controls">
        			<button class="shopping-item-toggle">
        				<span class="button-label">check</span>
        			</button>
        			<button class="shopping-item-delete">
        				<span class="button-label">delete</span>
        			</button>
        		</div>
        	</li>
	`
	});

	var html = `
		<div>${name},${itemsHtml.join("")}</div>
	`
	$('.questions').html(html);
}
renderList(state)

//set up event listeners 
	//question/answer
	//correct/incorrect response


 
//Pieces on info per questions:
	//1)"name" '+' "warning:" 
	//2) multiple choice
	//3) correct/incorrect response
//quizz will load
//question #1