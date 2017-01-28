const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//Keep win global, otherwise during garbage collection 
//window will be automatically closed

let win;


function createWindow(){
    win = new BrowserWindow({width:800,height:600,title:"WallApp",backgroundColor:323232});

    // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'renderers/index.html'),
    protocol: 'file:',
    slashes: true
  }));

    win.webContents.openDevTools();

  win.on('closed',()=>{
    win = null;
});

};

app.on('activate',()=>{
    if(win===null)
        createWindow();
})

app.on('ready',createWindow);




app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit();
    }
});