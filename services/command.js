//this file is used to run command in ubuntu

const exec = require('child_process').exec;



module.exports.abc = function(cmd,callback){
    
    console.log("from func. abc");

    //callback is a function with arguments (err,stdout,stderr)
    exec(cmd,callback);
};