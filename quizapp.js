//User choose response
//correct/or incorrect alert
//number of question correct
//choose next question
//Follow MCV model.
//Model
	//will contain variables inside the app.
function printQuestion(name) {
	return name +  " was warned. She was given an explanation. Nevertheless she persisted by:"
}

var state = {//single source of truth/the braing of the operation 
	items: [{
		name: "Rosa Parks", 
		warnings: [
			"Working", 
			"Voting", 
			"Refusing to give up her seat for a white man", 
			"Marching"
		],
		result:2
	}, {
		name: "Katherine Johnson",
		warnings:[
			"Can't use the white bathroom",
			"Can't become an engineer",
			"Can't drive",
			"Can't dance"
		],
		result: 1
	}3],
	currentQuestion: 0, 
}
//Rendering

//will need to make the question number dynamic. 
var renderList = function(state) {
	var question = state.items[state.currentQuestion]
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
        				<span class="button-label">your choice </span>
        			</button>
        		</div>
        	</li>
	`
	});
//add info to render to keep track of question
	var html = `
		<div>${printQuestion(name)}${itemsHtml.join("")}</div>
	`
	$('.questions').html(html);
}
renderList(state)

//set up event listeners 
	//question/answer
	//correct/incorrect response
$("body").on("click", "button.choice-item-toggle", function provideAnswer(event){
	var itemToCheck = $(event.currentTarget).closest("li").attr("index");
	console.log(itemToCheck)
	//checkAnswer(itemToCheck,2 )

	//if (2 == "2")
	 if (state.items[state.currentQuestion].result == itemToCheck) {
	 	swal("She persisted!", null, "success");
	 }
	 else {
	 	swal("hmm, try again", null, "error");
	 }
	 state.currentQuestion += 1
	renderList(state)
}); 

// function checkAnswer(itemToCheck,result) {
// 	console.log(itemToCheck)
// 	if (itemToCheck === result) {
// 		counter++;
// 		swal("She persisted!", null, "success");	
// 	}
// 	else {
// 		swal("hmm, try again", null, "error");
// 	}
// }

 
//Pieces on info per questions:
	//1)"name" '+' "warning:" 
	//2) multiple choice
	//3) correct/incorrect response
//quizz will load
//question #1