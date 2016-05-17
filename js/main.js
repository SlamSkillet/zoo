// main.js
$(function() {

	// connect to server
	var socket = io.connect(window.location.href);

	socket.on('newconnection', function() {
	    console.log('New connection.');
	});

	socket.on('repeatGate1', function() {
		console.log('clientrotateGate1');
		repeatGate1();
	}); 

	function emitGate1() {
	    	socket.emit('mouseDownGate1');
	}

	var canvas = document.getElementById('canvas');
	paper.setup(canvas);

	// paper.js

	var path2 = paper.project.importSVG(document.getElementById('svg'));
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
		flowSwap();
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
		console.log('repeated');
		
		if (toggle1 == 1) {
				$('#path2').css('visibility', 'hidden');
				$('#path1').css('visibility', 'visible');
		}
		else {
				$('#path2').css('visibility', 'visible');
				$('#path1').css('visibility', 'hidden');
		}
		paper.view.update();
	}

	function flowSwap() {
		if (toggle1 == 1) {
				$('#path2').css('visibility', 'hidden');
				$('#path1').css('visibility', 'visible');
		}
		else {
				$('#path2').css('visibility', 'visible');
				$('#path1').css('visibility', 'hidden');
		}
	}

	paper.view.update();
	// console.log(project.exportJSON());

});