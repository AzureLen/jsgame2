let spaces = [
	"A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1",
	"A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2",
	"A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3",
	"A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4",
	"A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5",
	"A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6",
	"A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7",
	"A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8"];

let blackPieces = [
"BR1", "BH1", "BB1", "BQ1", "BK1", "BB2", "BH2", "BR2",
"BP1", "BP2", "BP3", "BP4", "BP5", "BP6", "BP7", "BP8",];

let whitePieces = [
"WP1", "WP2", "WP3", "WP4", "WP5", "WP6", "WP7", "WP8",
"WR1", "WH1", "WB1", "WQ1", "WK1", "WB2", "WH2", "WR2"];

let pieces = ["pawn","rook","horse","bishop","king","queen"];

spaces.forEach( function(spaces) {
	spacesDiv.innerHTML += `
		<div class="spaces" id="spaces${spaces}">
			${spaces}
		</div>
	`;
});

for(let i=0;i<blackPieces.length;i++){
	let space = document.querySelector("#spaces"+spaces[i]);
	space.innerHTML = `
		<div class="blackPieces" id="blackPieces${blackPieces[i]}">
				${blackPieces[i]}
		</div>
	`;
};

for(let i=0,x=48;i<whitePieces.length;i++,x++){
	let space = document.querySelector("#spaces"+spaces[x]);
	space.innerHTML = `
		<div class="whitePieces" id="whitePieces${whitePieces[i]}">
				${whitePieces[i]}
		</div>
	`;
	// let whitePieces[i] = document.querySelector("#whitePieces"+whitePieces[i]);
};

// for(let i=0;i<spaces.length;i++){
// 	let space = document.querySelector("#spaces"+spaces[x]);
// 	space.innerHTML = `
// 		<div class="whitePieces" id="whitePieces${whitePieces[i]}">
// 				${whitePieces[i]}
// 		</div>
// 	`;
// };



let WP8 = document.querySelector("#whitePiecesWP8")
let H5 = document.querySelector("#spaceH5")
WP8.addEventListener("click",function(){
	H5.innerHTML = WP8.innerHTML;
	// WP8.innerHTML = " ";
});



// blackPieces.forEach( function(blackPieces) {
// 	spaces.innerHTML += `
// 		<div class="blackPieces" id="blackPieces${blackPieces}">
// 			${blackPieces}
// 		</div>
// 	`;
// });

// blackPieces.forEach( function(blackPieces){
// 	// console.log(blackPieces);
// 	console.log(document.querySelectorAll(blackPieces));

// });








// pieces.forEach( function(pieces) {
// 	piecesDiv.innerHTML += `
// 		<div class="pieces">
// 			${pieces}
// 		</div>
// 	`;
// });

// blackPieces.forEach( function(blackPieces){
// 	blackPiecesDiv.innerHTML += `
// 		<div class="blackPieces">
// 			${blackPieces}
// 		</div>
// 	`;
// });




// let wrongGuess = 0;

// spacesBtns = document.querySelectorAll(".choice");
// function spacesBtnClick(e) {
// 	let spacesClick = e.target.innerHTML.trim();
// 	let showAnswer = document.querySelectorAll(".spaces"+spacesClick);
// 	if(showAnswer.length == 0) {
// 		wrongGuess++;
// 		document.querySelector("#mistakeCounter").innerHTML += `
// 			<div class="ekis">X</div>
// 			`;
// 		if(wrongGuess == 4) {
// 			alert("game over");
// 		}
// 	} else {
// 		showAnswer.forEach( function(answerDiv) {
// 			answerDiv.innerHTML = spacesClick;
// 		});
// 	}
// 	e.target.className = "disabledDiv";

// 	e.target.removeEventListener("click", spacesBtnClick);
// }

// spacesBtns.forEach( function(spacesBtn) {
// 	spacesBtn.addEventListener("click", spacesBtnClick);
// });

// let phrase = "THE QUICK BROWN FOX";

// for(let i=0; i<phrase.length; i++) {
// 	if(phrase[i] != " ") {
// 		answerDiv.innerHTML += `
// 			<div class="spaces spaces${phrase[i]}"></div>
// 		`;
// 	} else {
// 		answerDiv.innerHTML += `
// 			<div class="space"></div>
// 		`;
// 	}
// 	// console.log(phrase[i]);
// }