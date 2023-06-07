const directory = process.argv[2];
const extension = process.argv[3]; 
const callback = process.argv[4];

const fs = require('fs');
const path = require('path');

const mine = require('./mymodule');
//console.log(process.argv[2]);
mine(directory,extension, (err,result) => {
    if (!err){
        result.forEach((el)=>{
            console.log(el);
        })
    } else {
        return console.error(err);
    }
});

