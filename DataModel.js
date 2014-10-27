var DM = require("dme/DataModel")
var implementation = require("./implementation/");
var schemas = require("./models");
var Store = require("dme/store/memory");
var fs = require("fs-extra");
var Path = require('path');

var facets = {};

DataModel = new DM();
var dataDirectory = Path.join(__dirname,"data");
fs.mkdirpSync(dataDirectory)

Object.keys(schemas).forEach(function(key) {
	var store = new Store(key,{schema: schemas[key],dataDirectory: dataDirectory});

	DataModel.set(key, schemas[key], store, implementation[key] ? implementation[key] : undefined, facets[key] ? facets[key] : undefined)
})

module.exports = DataModel;