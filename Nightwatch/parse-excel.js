var fs = require('fs'),
	path = require('path'),
	excel_to_json = require('node-excel-to-json');

var filename = require('path').join(__dirname, '/product_data.xlsx');
if (fs.existsSync(filename)){
	console.log('file exists');
} else {
	console.log('file doesnot exists');
}

excel_to_json(filename, { 
	convert_all_sheet : true, 
	return_type : 'Object'
}, function(err, result){ 
	console.log('err -> ', err); 
	console.log('result -> ', result);
});