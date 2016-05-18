// main.js
$(function() {

	// connect to server
	var socket = io.connect(window.location.href);

	socket.on('newconnection', function() {
	    console.log('New connection.');
	});

	socket.on('repeatToggleGate1', function() {
		console.log('clientrotateGate1');
		repeatToggleGate1();
	}); 

	socket.on('repeatToggleGate2', function() {
		console.log('clientrotateGate2');
		repeatToggleGate2();
	}); 

	socket.on('repeatToggleGate3', function() {
		console.log('clientrotateGate3');
		repeatToggleGate3();
	}); 

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

	var gatestatus = 0;

	$('#gate1click').click(function() {
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
		switchGate();
		socket.emit('mouseDownGate1');
		paper.view.update();
	});

	$('#gate2click').click(function() {	
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
		switchGate();
		socket.emit('mouseDownGate2');
		paper.view.update();
	});

	$('#gate3click').click(function() { 
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
		switchGate();
		socket.emit('mouseDownGate3');
		paper.view.update();
	});


	path2.children[40].onMouseDown  = function(event) {
		
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
		switchGate();
		socket.emit('mouseDownGate1');
		paper.view.update();
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
		switchGate();
		socket.emit('mouseDownGate2');
		paper.view.update();
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
		switchGate();
		socket.emit('mouseDownGate3');
		paper.view.update();
	}

	function repeatToggleGate1() {
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
		switchGate();
		paper.view.update();
	}

	function repeatToggleGate2() {
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
		switchGate();
		paper.view.update();
	}

	function repeatToggleGate3() {
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
		switchGate();
		paper.view.update();
	}

	function switchGate() {
		
		if (toggle1 == 0 && toggle2 == 0 && toggle3 == 0) {
				gatestatus = 0;
		} else if (toggle1 == 1 && toggle2 == 0 && toggle3 == 0) {
				gatestatus = 1;
		} else if (toggle1 == 1 && toggle2 == 1 && toggle3 == 0) {
				gatestatus = 2;
		} else if (toggle1 == 1 && toggle2 == 1 && toggle3 == 1) {
				gatestatus = 3;
		} else if (toggle1 == 1 && toggle2 == 0 && toggle3 == 1) {
				gatestatus = 4;
		} else if (toggle1 == 0 && toggle2 == 1 && toggle3 == 1) {
				gatestatus = 5;
		} else if (toggle1 == 0 && toggle2 == 1 && toggle3 == 0) {
				gatestatus = 6;
		} else if (toggle1 == 0 && toggle2 == 0 && toggle3 == 1) {
				gatestatus = 7;
		} 

		switch (gatestatus) {
			case 0:
				$('#path0').css('visibility', 'visible');
				$('#path1').css('visibility', 'hidden');
				$('#path2').css('visibility', 'hidden');
				$('#path3').css('visibility', 'hidden');
				$('#path4').css('visibility', 'hidden');
				$('#path5').css('visibility', 'hidden');
				$('#path6').css('visibility', 'hidden');
				$('#path7').css('visibility', 'hidden');
				break;
			case 1:
				$('#path0').css('visibility', 'hidden');
				$('#path1').css('visibility', 'visible');
				$('#path2').css('visibility', 'hidden');
				$('#path3').css('visibility', 'hidden');
				$('#path4').css('visibility', 'hidden');
				$('#path5').css('visibility', 'hidden');
				$('#path6').css('visibility', 'hidden');
				$('#path7').css('visibility', 'hidden');
				break;
			case 2:
				$('#path0').css('visibility', 'hidden');
				$('#path1').css('visibility', 'hidden');
				$('#path2').css('visibility', 'visible');
				$('#path3').css('visibility', 'hidden');
				$('#path4').css('visibility', 'hidden');
				$('#path5').css('visibility', 'hidden');
				$('#path6').css('visibility', 'hidden');
				$('#path7').css('visibility', 'hidden');
				break;	
			case 3:
				$('#path0').css('visibility', 'hidden');
				$('#path1').css('visibility', 'hidden');
				$('#path2').css('visibility', 'hidden');
				$('#path3').css('visibility', 'visible');
				$('#path4').css('visibility', 'hidden');
				$('#path5').css('visibility', 'hidden');
				$('#path6').css('visibility', 'hidden');
				$('#path7').css('visibility', 'hidden'); 
				break;
			case 4:
				$('#path0').css('visibility', 'hidden');
				$('#path1').css('visibility', 'hidden');
				$('#path2').css('visibility', 'hidden');
				$('#path3').css('visibility', 'hidden');
				$('#path4').css('visibility', 'visible');
				$('#path5').css('visibility', 'hidden');
				$('#path6').css('visibility', 'hidden');
				$('#path7').css('visibility', 'hidden'); 
				break;	
			case 5:
				$('#path0').css('visibility', 'hidden');
				$('#path1').css('visibility', 'hidden');
				$('#path2').css('visibility', 'hidden');
				$('#path3').css('visibility', 'hidden');
				$('#path4').css('visibility', 'hidden');
				$('#path5').css('visibility', 'visible');
				$('#path6').css('visibility', 'hidden');
				$('#path7').css('visibility', 'hidden'); 
				break;	
			case 6:
				$('#path0').css('visibility', 'hidden');
				$('#path1').css('visibility', 'hidden');
				$('#path2').css('visibility', 'hidden');
				$('#path3').css('visibility', 'hidden');
				$('#path4').css('visibility', 'hidden');
				$('#path5').css('visibility', 'hidden');
				$('#path6').css('visibility', 'visible');
				$('#path7').css('visibility', 'hidden');  
				break;
			case 7:
				$('#path0').css('visibility', 'hidden');
				$('#path1').css('visibility', 'hidden');
				$('#path2').css('visibility', 'hidden');
				$('#path3').css('visibility', 'hidden');
				$('#path4').css('visibility', 'hidden');
				$('#path5').css('visibility', 'hidden');
				$('#path6').css('visibility', 'hidden');
				$('#path7').css('visibility', 'visible'); 
				break;
		} 
		paper.view.update();
		console.log(gatestatus);
	}

	function onFrame(event) {
	} 

	paper.view.update();
	// console.log(project.exportJSON());

});