var fs = require("fs-extra");
var debug = require("debug")("dme-example");
var path = require("path");

var implementations = {};

module.exports = function(){
	console.log("Loading Implementation Files from: ", __dirname);
	fs.readdirSync(__dirname).filter(function(filename){ return filename.match(".js") && (filename != "index.js") }).forEach(function(filename){
		var name = filename.replace(".js","");
		debug("Loading Implementation" + name + " from " + filename);
		implementations[name]=require(path.join(__dirname,name));
	})
	return implementations;
}();
