
function main() {
	var links = app.activeDocument.links;
	var len = links.length;
	var i;
	var buf = '';
	for(i = 0; i < len; ++i) {
		$.writeln(links[i].filePath);
		buf += links[i].filePath + '\n';
		var newLink = links[i].filePath.replace('links', 'new-links');
		var newLinkFile = new File(newLink);
		links[i].relink(newLinkFile);
	}
	var f = new File('~/Desktop/links.txt');
	f.open('w:');
	if(f.write(buf)) {
		$.writeln('Success!');
	} else {
		$.writeln('fail...');
	}
	f.close();
}

main();

