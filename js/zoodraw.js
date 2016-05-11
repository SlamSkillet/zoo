var start = Date.now();

var pathData = "M52,117.75h23v-68h32v34h51v-53h36v75h51v35h-77v-31h-37v75H92v-36H46v-30.999";

var path = new Path(pathData);
path.strokeColor = 'white';
path.strokeWidth = 2;

/* var path = project.importSVG(document.getElementById('svg'));
path.fullySelected = true;
console.log(path.strokeWidth);
console.log(path.segments); */

function onFrame(event) {
	path.segments[0].point.y += 0.1;
}

console.log(Date.now() - start);
console.log(project.exportJSON());