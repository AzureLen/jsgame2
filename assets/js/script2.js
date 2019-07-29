let cvs = document.getElementById("snake");
let ctx = cvs.getContext("2d");
let box = 32;

let ground = new Image();
ground.src = "assets/images/ground.png";
let fruit = new Image();
fruit.src = "assets/images/fruit.png";

let snake = [];
snake[0] = {
	x: 9*box,
	y:10*box
};

let food = {
	x : Math.floor(Math.random()*17+1)*box,
	y : Math.floor(Math.random()*15+3)*box
};

let score = 0;

document.addEventListener("keydown",function(event){
	let d;

	if(event.key == 37){
		d = "LEFT";
	}else if(event.keyCode == 38){
		d = "UP";
	}else if(event.keyCode == 39){
		d = "RIGHT";
	}else if(event.keyCode == 40){
		d = "DOWN";
	}
});

function draw(){

	ctx.drawImage(ground,0,0);

	for(let i=0; i< snake.length;i++){
		ctx.fillStyle = (i == 0) ? "green" : "white";
		ctx.fillRect(snake[i].x,snake[i].y,box,box);

		ctx.strokeStyle = "red";
		ctx.strokeRect(snake[i].x,snake[i].y,box,box);
	}

	ctx.drawImage(fruit, food.x,food.y);

	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	snake.pop();

	if( d = "LEFT") snakeX -= box;
	if( d = "UP") snakeY -= box;
	if( d = "RIGHT") snakeX += box;
	if( d = "DOWN") snakeY += box;

	let newHead = {
		x:snakeX,
		y:snakeY
	}

	snake.unshift(newHead);

	ctx.fillStyle = "white";
	ctx.font = "45px";
	ctx.fillText(score,2*box,1.6*box);
}

let game = setInterval(draw,100);