//User choose response
//correct/or incorrect alert
//number of question correct
//choose next question
//Follow MCV model.
//Model
	//will contain variables inside the app.

var state = {//single source of truth/the braing of the operation 
	items: [{
		name: "Rosa Parks", 
		warnings: [
			"Don't smile", 
			"don't buy milk", 
			"don't sit on the white side of the bus", 
			"don't march"
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
		result: 2
	}],
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
        				<span class="button-label">she persisted</span>
        			</button>
        		</div>
        	</li>
	`
	});
//add info to render to keep track of question
	var html = `
		<div>${name},${itemsHtml.join("")}</div>
	`
	$('.questions').html(html);
}
renderList(state)

//set up event listeners 
	//question/answer
	//correct/incorrect response
$("body").on("click", "button", function provideAnswer(event){
	var itemToCheck = $(event.currentTarget).closest("li").attr("index");
	console.log(itemToCheck);
	//if (2 == "2")
// 	 if (itemToCheck==="2" ) {
// 	 	swal("she persisted", null, "success");
// 	 }
// 	 else {
// 	 	swal("hmm, try again", null, "error");
// 	 }
// 	 state.currentQuestion += 1
// 	renderList(state)
}); 

function checkAnswer(item,result) {

}

 
//Pieces on info per questions:
	//1)"name" '+' "warning:" 
	//2) multiple choice
	//3) correct/incorrect response
//quizz will load
//question #1