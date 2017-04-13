//User choose response
//correct/or incorrect alert
//number of question correct
//choose next question
//Follow MCV model.
//Model
	//will contain variables inside the app.
function printQuestion(name) {
	return `
		<h1><span class ="persisted">She was warned. 
		She was given an explanation.</span> Nevertheless, she persisted.</h1>
		${name} was warned. She was given an explanation. Nevertheless she persisted by:
	`
}

var state = {//single source of truth/the brain of the operation 
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
		name: "Mary Jackson (human counter in the movie Hidden Figures)",
		warnings:[
			"Learning math",
			"Wearing a dress",
			"Driving over the speed limit",
			"Petitioning a Judge so she could attend classes at the all-white Hampton Highschool"
		],
		result: 3
	},
		{
		name: "Malaya Yousafzai",
		warnings:[
			"Traveling with her family",
			"Speaking in public",
			"Speaking at the Unite Nations",
			"Defying the Taliban and going to school"
		],	
		result: 3
	}],
	currentQuestion: 0, 
	correctCounter: 0 
}
//Rendering

//will need to make the question number dynamic. 
var renderList = function(state) {
	var question = state.items[state.currentQuestion]
	if (question === undefined) {

		return $('.questions').html(`
			Congrats!  You got ${state.correctCounter} out of ${state.items.length} correct. 
			<div>
			<button class="end-button">Play Again!
        	</button>
        	</div>
		`);

	}
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
		<div>
			${printQuestion(name)}
			${itemsHtml.join("")}
		</div>
		<div>
			Correct answers: ${state.correctCounter} out of ${state.items.length}. 
		</div>
		<div>
			Question: ${state.currentQuestion + 1} out of ${state.items.length}
		</div>
	`
	$('.questions').html(html);
}
renderList(state)

//set up event listeners 
	//question/answer
	//correct/incorrect response
$("body").on("click", "button.choice-item-toggle", function provideAnswer(event){
	var itemToCheck = $(event.currentTarget).closest("li").attr("index");
	//checkAnswer(itemToCheck,2 )

	//if (2 == "2")
	 if (state.items[state.currentQuestion].result == itemToCheck) {
	 	state.correctCounter += 1

	 	swal("She persisted!", null, "success");
	 }
	 else {
	 	swal("hmm, that's not it", null, "error");
	 }
	 state.currentQuestion += 1
	renderList(state)
}); 

$("body").on("click", ".end-button", function(){
 	state.currentQuestion = 0
 	state.correctCounter = 0
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
//question #1});