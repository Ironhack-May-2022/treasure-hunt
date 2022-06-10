const game = new Game();
const player = new Player()

function setup() {
	let canvas = createCanvas(WIDTH, HEIGHT);
	canvas.parent("canvas");

}

function preload() {
	// game.preload();
	player.preload();
}


function draw() {
	game.drawGrid();
	game.draw();
	player.draw()
}

function keyPressed() {
	if (keyCode === 38) {
		player.moveUP()
	}
	if (keyCode === 40) {
		player.moveDown()
	}
	if (keyCode === 37) {
		player.moveLeft()
	}
	if (keyCode === 39) {
		player.moveRight()
	}
}

