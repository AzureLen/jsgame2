
let box = 32;
let ground = new Image();
let food = new Image();

let snake = []
snake[0] = {
	x: 9*box;
	y:10*box;
}

let food = {
	x : Math.floor(Math.random()*17+1)*box,
	y : Math.floor(Math.random()*15+3)*box
}