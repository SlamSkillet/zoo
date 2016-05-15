// paper.js

var path2 = project.importSVG(document.getElementById('svg'));
// console.log(project.activeLayer.children)

// gate 1 
path2.children[40].strokeWidth = 3;

// gate 2
path2.children[45].strokeWidth = 3;

// gate 3
path2.children[49].strokeWidth = 3;

var toggle1 = 0;
var toggle2 = 0;
var toggle3 = 0;

path2.children[40].onMouseDown = function(event) {
	
	if (toggle1 == 0){
		path2.children[40].segments[0].point.x += 10;
		path2.children[40].segments[0].point.y += 10;
		toggle1 = 1 - toggle1;
	}
	else {
		path2.children[40].segments[0].point.x -= 10;
		path2.children[40].segments[0].point.y -= 10;
		toggle1 = 1 - toggle1;
	}
	emitGate1();
}

path2.children[45].onMouseDown = function(event) {
	
	if (toggle2 == 0){
		path2.children[45].segments[0].point.x += 10;
		path2.children[45].segments[0].point.y += 10;
		toggle2 = 1 - toggle2;
	}
	else {
		path2.children[45].segments[0].point.x -= 10;
		path2.children[45].segments[0].point.y -= 10;
		toggle2 = 1 - toggle2;
	}
}

path2.children[49].onMouseDown = function(event) {
	
	if (toggle3 == 0){
		path2.children[49].segments[0].point.x += 10;
		path2.children[49].segments[0].point.y += 10;
		toggle3 = 1 - toggle3;
	}
	else {
		path2.children[49].segments[0].point.x -= 10;
		path2.children[49].segments[0].point.y -= 10;
		toggle3 = 1 - toggle3;
	}
}

function onFrame(event) {
} 

function repeatGate1() {
	if (toggle1 == 0){
		path2.children[40].segments[0].point.x += 10;
		path2.children[40].segments[0].point.y += 10;
		toggle1 = 1 - toggle1;
	}
	else {
		path2.children[40].segments[0].point.x -= 10;
		path2.children[40].segments[0].point.y -= 10;
		toggle1 = 1 - toggle1;
	}
}

// console.log(project.exportJSON());