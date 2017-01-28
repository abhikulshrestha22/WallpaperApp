document.getElementById('btnChangeWallpaper').addEventListener("click",function(){
    require('../services/command').abc("node -v",(err,stdout,stderr)=>{
        if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);});


    require('../services/download').downloadImage("https://source.unsplash.com/random");

}
);