//User choose response
//correct/or incorrect alert
//number of question correct
//choose next question
//Follow MCV model.
//Model
	//will contain variables inside the app.

var state = {//single source of truth
	items: [{
		name: "Rosa Parks:", 
		warnings: [
			"Don't smile", 
			"don't buy milk", 
			"don't sit on the white side of the bus", 
			"don't march"
		],
		result:2
	}, {
		name: "Katherine Johnson:",
		warnings:[
			"Can't use the white bathroom",
			"Can't become an engineer",
			"Can't drive",
			"Can't dance"
		],
		result: 2
	}]
}
//Rendering

//will need to make the question number dynamic. 
var renderList = function(state) {
	var question = state.items[0]
	var name = question.name
	var warnings = question.warnings
	//item is always singular and index referring to which element with in the array
	var itemsHtml = warnings.map(function(item,index){

		//update classes
		return `
			<li index = ${index}> 
        		<span class="answers">${item}</span>
        		<div class="quiz-item-controls">
        			<button class="choice-item-toggle">
        				<span class="button-label">my choice</span>
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
$("button").on("click", function provideAnswer(event){
	var itemToCheck = $(event.currentTarget).closest("li").attr("index");
	// if (2 == "2")
	 if (state.items[0].result == itemToCheck) {
	 	alert("correct")
	 }
	 else {
	 	alert("wrong")
	 }
}); 

 
//Pieces on info per questions:
	//1)"name" '+' "warning:" 
	//2) multiple choice
	//3) correct/incorrect response
//quizz will load
//question #1