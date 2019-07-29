// let cvs = document.querySelector("#snake");
// let ctx = cvs.getContext("2d");
// let box = 10;

// // let ground = new Image();
// // ground.src="assets/images/ground.png";
// // let fruit = new Image();
// // fruit.src="assets/images/fruit.png";
// function Snake(){

// 	this.snake = [];
// 	this.snake[0] = {
// 		x:10*box,
// 		y:5*box
// 	};

// 	this.food = {
// 		x : Math.floor(Math.random()*10)*box,
// 		y : Math.floor(Math.random()*10)*box
// 	};

// 	this.score = 0;

// 	this.d;

// 	this.changeDirection = function(direction) {
// 		switch(direction) {
// 			case "Up" :
// 				this.xSpeed = 0;
// 				if(this.snake.length > 0 && this.snake[index-1].y == this.y-box) return;
// 				this.ySpeed = -size*1;
// 				break;
// 			case "Down" :

// 				this.xSpeed = 0;
// 				if(this.head.length > 0 && this.head[index-1].y == this.y+size) return;
// 				this.ySpeed = size*1;

// 				break;
// 			case "Left" :
// 				if(this.head.length > 0 && this.head[index-1].x == this.x-size) return;
// 				this.xSpeed = -size*1;
// 				this.ySpeed = 0;
// 				break;
// 			case "Right" :
// 				if(this.head.length > 0 && this.head[index-1].x == this.x+size) return;
// 				this.xSpeed = size*1;
// 				this.ySpeed = 0;
// 				break;
// 		}
// 	}

// 	this.draw=function(){

// 		ctx.fillStyle = "white";

// 		for(let i=0; i< this.snake.length;i++){
// 			ctx.fillStyle = (i == 0) ? "red" : "white";
// 			ctx.fillRect(this.snake[i].x,this.snake[i].y,box,box);

// 			ctx.strokeStyle = "red";
// 			ctx.strokeRect(this.snake[i].x,this.snake[i].y,box,box);
// 		}

// 		ctx.fillStyle = "red";

// 		this.snakeX = this.snake[0].x;
// 		this.snakeY = this.snake[0].y;

// 		this.snake.pop();

// 		if( this.d = "LEFT") this.snakeX -= box;
// 		if( this.d = "UP") this.snakeY-= box;
// 		if( this.d = "RIGHT") this.snakeX += box;
// 		if( this.d = "DOWN") this.snakeY += box;

// 		this.newHead = {
// 			x:snakeX,
// 			y:snakeY
// 		}

// 		this.snake.unshift(newHead);

// 		ctx.fillStyle = "white";
// 		ctx.font = "10px";
// 		ctx.fillText(this.score,box,box);


// 	function Food() {
// 		this.x;
// 		this.y;

// 		this.foodLocation = function() {
// 			this.x = (Math.floor(Math.random() * rows-1)+1)*scale;
// 			this.y = (Math.floor(Math.random() * columns-1)+1)*scale;
// 		}

// 		this.drawFood = function() {
// 			c.fillStyle = "red";
// 			c.fillRect(this.x,this.y, size,size)
// 		}

// 		this.updateFood = function() {
// 			if (this.x == snake.x) {
// 				this.foodLocation();
// 				this.drawFood();
// 			}
// 		}
// 	}
// }

// snake();

// let game = setInterval(draw,100);

// }

// this.update = function() {
// 		for(let i=0; i<this.head.length-1; i++) {
// 			this.head[i] = this.head[i+1];
// 		}
// 		this.head[index-1] = {x:this.x, y:this.y};
// 		this.x += this.xSpeed;
// 		this.y += this.ySpeed;
// 		if (this.x > cvs.width) {
// 			this.x = 0;
// 		}
// 		if (this.y > cvs.height) {
// 			this.y = 0;
// 		}
// 		if (this.x < 0) {
// 			this.x = cvs.width-size;
// 		}
// 		if (this.y < 0) {
// 			this.y = cvs.height-size;
// 		}
// 	}

// 	this.changeDirection = function(direction) {
// 		switch(direction) {
// 			case "Up" :
// 				this.xSpeed = 0;
// 				if(this.head.length > 0 && this.head[index-1].y == this.y-size) return;
// 				this.ySpeed = -size*1;
// 				break;
// 			case "Down" :

// 				this.xSpeed = 0;
// 				if(this.head.length > 0 && this.head[index-1].y == this.y+size) return;
// 				this.ySpeed = size*1;

// 				break;
// 			case "Left" :
// 				if(this.head.length > 0 && this.head[index-1].x == this.x-size) return;
// 				this.xSpeed = -size*1;
// 				this.ySpeed = 0;
// 				break;
// 			case "Right" :
// 				if(this.head.length > 0 && this.head[index-1].x == this.x+size) return;
// 				this.xSpeed = size*1;
// 				this.ySpeed = 0;
// 				break;
// 		}
// 	}
	
// 	this.eatFood = function(food) {
// 		if(this.x === food.x && this.y === food.y) {
// 			index++;
// 			snake.total++;	
// 			return true;
// 		} else return false;
// 	}

// 	this.checkCollision = function() {
// 		if (this.total > 0) {
// 			for(let i=1; i<this.head.length; i++) {
// 				if(this.x === this.head[i].x && this.y === this.head[i].y) {
// 					this.total = 0;
// 					this.head = [];
// 					return true;
// 				} 
// 			}
// 		}
// 	}

let cvs = document.querySelector("#snake");
let ctx = cvs.getContext("2d");
let scale = 20;
let size = 10;
let center = 50;
let speed = 60;
let rows = cvs.height/scale;
let columns = cvs.width/scale;
// let snake;
// let direction;
let index = 0;

function Snake() {
	this.x = 100;
	this.y = 100;
	this.xSpeed = size*1;
	this.ySpeed = 0;
	this.total = 0;
	this.head = [];

	this.draw = function() {
		ctx.fillStyle = "white";
		if (this.total > 0) {
			for(let i=0; i<this.head.length; i++) {
				ctx.fillRect(this.head[i].x,this.head[i].y, size,size);	
			}
		}
		ctx.fillRect(this.x,this.y, size,size);
	}

	this.grow = function() {
		for(let i=0; i<this.head.length-1; i++) {
			this.head[i] = this.head[i+1];
		}
		this.head[index-1] = {x:this.x, y:this.y};
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		if (this.x > cvs.width) {
			this.x = 0;
		}
		if (this.y > cvs.height) {
			this.y = 0;
		}
		if (this.x < 0) {
			this.x = cvs.width-size;
		}
		if (this.y < 0) {
			this.y = cvs.height-size;
		}
	}

	this.move = function(direction) {
		switch(direction) {
			case "Up" :
				this.xSpeed = 0;
				if(this.head.length > 0 && this.head[index-1].y == this.y-size) return;
				this.ySpeed = -size*1;
				break;
			case "Down" :

				this.xSpeed = 0;
				if(this.head.length > 0 && this.head[index-1].y == this.y+size) return;
				this.ySpeed = size*1;

				break;
			case "Left" :
				if(this.head.length > 0 && this.head[index-1].x == this.x-size) return;
				this.xSpeed = -size*1;
				this.ySpeed = 0;
				break;
			case "Right" :
				if(this.head.length > 0 && this.head[index-1].x == this.x+size) return;
				this.xSpeed = size*1;
				this.ySpeed = 0;
				break;
		}
	}
	
	this.eat = function(food) {
		if(this.x === food.x && this.y === food.y) {
			index++;
			snake.total++;	
			return true;
		} else return false;
	}

	this.collision = function() {
		if (this.total > 0) {
			for(let i=1; i<this.head.length; i++) {
				if(this.x === this.head[i].x && this.y === this.head[i].y) {
					this.total = 0;
					this.head = [];
					return true;
				} 
			}
		}
	}
}

function Food() {
	this.x;
	this.y;

	this.foodLocation = function() {
		this.x = (Math.floor(Math.random() * rows-1)+1)*scale;
		this.y = (Math.floor(Math.random() * columns-1)+1)*scale;
	}

	this.drawFood = function() {
		ctx.fillStyle = "red";
		ctx.fillRect(this.x,this.y, size,size)
	}

	this.updateFood = function() {
		if (this.x == snake.x) {
			this.foodLocation();
			this.drawFood();
		}
	}

}

(function setup() {
	snake = new Snake();
	food = new Food();
	food.foodLocation();

	window.setInterval( function() {
		ctx.clearRect(0,0, cvs.width, cvs.height);
		food.drawFood();
		snake.grow();
		snake.draw();
		if(snake.collision()) {
			alert(`Patay!`);
			return stop();
		}
		if(snake.eat(food)) {
			food.foodLocation();
		}

		// if(snake.head.length > 0) {
		// 		if(snake.xSpeed == 0 && snake.head[0].y == snake.y+size) {
		// 			console.log("eureka!");
		// 			console.log(snake.y)
		// 			console.log(snake.ySpeed == -size);
		// 		}
		// 	}

	}, speed);

	function stop() {
		clearInterval(window.setInterval());
	}
}());

window.addEventListener("keydown", function(event) {
	let direction = event.key.replace("Arrow", "");
	
		snake.move(direction);
})





