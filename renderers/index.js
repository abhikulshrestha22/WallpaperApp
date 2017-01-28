var command = require('../services/command');
var download = require('../services/download');



document.getElementById('btnChangeWallpaper').addEventListener("click",function(){


// When button is clicked 
// Download the image 
// and change the wallpaper

//callback function when download is completed
    


    //download image
    download.downloadImage("https://source.unsplash.com/random",function(data){

        if(data==="success"){

            command.abc("gsettings set org.gnome.desktop.background picture-uri file:///home/abhishek/Desktop/Projects/wallpaperapp/file.jpg",(err,stdout,stderr)=>{
                if (err) {
                    console.error(`exec error: ${err}`);
                    return;
                    }
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);});

        }
    });

    



    


    

    


}
);