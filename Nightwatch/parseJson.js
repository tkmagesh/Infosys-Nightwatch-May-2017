var fs = require('fs');

module.exports = function(fileName){
	if (fs.existsSync(fileName)){
		var fileContents = fs.readFileSync(fileName, { encoding : 'utf8'});
		return JSON.parse(fileContents);
	}
}