const fs = require('fs');
const path = require('path');
//third argument of process.argv is directory path
const extension= process.argv[3];
//fourth argument is extension name
const directory = process.argv[2];

fs.readdir(directory, (err, result) => {
    if (!err){ 
        let ext = '.' + extension;
        result.forEach((el)=>{
            if (path.extname(el) === ext){
                console.log(el);
            }
        })
        
    } else {
        return console.log(err);
    }
})