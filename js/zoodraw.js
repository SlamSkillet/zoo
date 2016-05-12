// var pathData = "M52,117.75h23v-68h32v34h51v-53h36v75h51v35h-77v-31h-37v75H92v-36H46v-30.999";

// var path = new Path(pathData);
// path.strokeColor = 'white';
// path.strokeWidth = 2; 
// path.fullySelected = true; 


var path2 = project.importSVG(document.getElementById('svg'));
// console.log(project.activeLayer.children)
console.log(path2.children[40]);
console.log(path2.children[45]);
console.log(path2.children[49]);

// // gate 1
// path2.children[40].fullySelected = true;

// // gate 2
// path2.children[45].fullySelected = true;

// // gate 3
// path2.children[49].fullySelected = true;

function onFrame(event) {
	path2.children[40].segments[0].point.x += 0.1;
	path2.children[40].segments[0].point.y += 0.1;

	path2.children[45].segments[0].point.x += 0.1;
	path2.children[45].segments[0].point.y += 0.1;

	path2.children[49].segments[0].point.x += 0.1;
	path2.children[49].segments[0].point.y += 0.1;
} 

// function onFrame(event) {
	
// 	// path
// 	path2.children[1].segments[5].point.y += 0.1;
// 	path2.children[1].segments[5].point.x += 0.1;

// 	// circle
// 	path2.children[2].matrix.ty += 0.1;
// 	path2.children[2].matrix.tx += 0.1;

// }

// console.log(project.exportJSON());