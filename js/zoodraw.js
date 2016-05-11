var start = Date.now();

var path = project.importSVG(document.getElementById('svg'));

path.fullySelected = true;

function onFrame(event) {

	// path.strokeWidth += 0.1;
	//path.segments[0].point.y += 0.1;

}
console.log(Date.now() - start);
console.log(project.exportJSON());