var https = require('../node_modules/follow-redirects').https;
var fs = require('fs');


module.exports.downloadImage = (url)=>{
var file = fs.createWriteStream("file.jpg");

var request = https.get(url,function(res){
    res.pipe(file);
});

}