var path= require('path');
let fs = require('fs');

let mongoose = require('mongoose');

// <*> This is the only part of this file to be changed:
//connection to the database:
mongoose.connect('mongodb://localhost/sword_builder_database',{useNewUrlParser: true});
//set the location of database manually

//These lines and {useNewUrlParser: true} 
//handle current deprecation issues.
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);


let models_path = path.join(__dirname, './../models');

//This segment doesn't change,
//but is important to take note of
//Multiple model files handling
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js')>=0){
        require(models_path + '/'+file);
    }
});