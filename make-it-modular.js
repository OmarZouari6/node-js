var mymodule = require('./mymodule.js');
var dir = process.argv[2];
var extName = process.argv[3];

mymodule(dir,extName,function(err,data){
	if(err){
		console.log(err);
	}
	data.forEach(function(file){
		console.log(file);
	})
});