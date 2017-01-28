var https = require('../node_modules/follow-redirects').https;
var fs = require('fs');


module.exports.downloadImage = (url,cb)=>{


var request = https.get(url,function(res){
    if(res.statusCode ===200){
        var file = fs.createWriteStream("file.jpg");
        res.pipe(file);

        file.on('finish',function(){
            file.close();
            //console.log("file is complete & closed now");
            cb("success");
        })
    }
    else{
        //console.log("Cannot fetch the image.");
        cb("error");
    }

    //add timeout to the request 

    request.setTimeout(12000,function(){
        request.abort();
    })
    
});

}