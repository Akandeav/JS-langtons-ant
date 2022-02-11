window.onload = function() {
	canvas = document.getElementById('grid');
	ctx = canvas.getContext('2d');
	const grid = new Grid(canvas.width, canvas.height);
	grid.init();

	// 15 Frames per second, higher equals faster load time
	setInterval(moveAnt, 1000/15, grid);
}

/**
 * Move the ant object in a grid
 * @param {grid} grid Grid for ant movement
 * */
function moveAnt(grid){
	grid.move();
	ctx.stroke();
}


class Square {
	// All squares are white on creation
	color = "white";

	// Set square color
	setColor(color) {
		this.color = color;
	}
	// Return color of square object
	get isColor() {
		return this.color;
	}
}

class Ant {
	x = 0; 
	y = 0;

	// Ant start direction is set to UP
	direction = 0; 

	rotateClockwise(){
		this.direction = ((this.direction + 1) + (4)) % (4);
	}

	rotateAntiClockwise(){
		this.direction = ((this.direction - 1) + (4)) % (4);
	}

	/**
	 * Move ant object forward
	 * @param {Integer} width Ant position on x axis
	 * @param {Integer} height Ant position on y axis 
	 * */
	moveForward(width, height){
		switch (this.direction) {
			// If ant direction is up
			case 0:  
				this.x = ((this.x - 1) + width) % width;
				break;
			// If ant direction is right
			case 1:
				this.y = ((this.y + 1) + height) % height;
				break;
			// If ant direction is down
			case 2:
				this.x = ((this.x + 1) + width) % width;
				break;
			// If ant direction is left
			case 3:
				this.y = ((this.y - 1) + height) % height;
				break;
		}
	}
}

class Grid {
	squares = [];
	ant;
	width = 0;
	height = 0;

	constructor(height, width){
		this.width = width;
		this.height = height;
	}

	// Initialize grid and set Ant position at grid midpoint
	init() {
		for (let x = 0; x < this.width; x++) {
			this.squares[x] = [];
			for (let y = 0; y < this.height; y++) {
				const square = new Square();
				this.squares[x][y] = square;
			}
		}
		this.ant = new Ant();
		this.ant.x = this.width / 2;
		this.ant.y = this.height / 2;
	}
	
	// Move ant according to rules
	move() {

		// Adjust number of steps by changing upperbound of i
		for (let i = 0; i < 100; i++){
			let square = this.squares[this.ant.x][this.ant.y];

			// If square is white
			// Turn 90 degrees clockwise
			// Flip  square color to black 
			// Move ant forward one unit 
			if (square.isColor === "white") {
				this.ant.rotateClockwise();
				square.color = 'black';
				ctx.fillStyle = 'black';
				ctx.fillRect(this.ant.x, this.ant.y, 1, 1);
				this.ant.moveForward(this.width, this.height);
			}

			// If square is black
			// Turn 90 degrees clockwise
			// Flip  square color to white 
			// Move ant forward one unit
			else if (square.isColor === "black") {
				this.ant.rotateAntiClockwise();
				square.color = 'white';
				ctx.fillStyle = 'white';
				ctx.fillRect(this.ant.x, this.ant.y, 1, 1);
				this.ant.moveForward(this.width, this.height);
			}
			// Set ccolor of ant as red
			ctx.fillStyle = 'red';
			ctx.fillRect(this.ant.x, this.ant.y, 1, 1);
		}
	}
}