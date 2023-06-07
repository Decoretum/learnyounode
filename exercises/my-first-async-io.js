const fs = require('fs')
/* Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument.  */

let b1 = fs.readFile(process.argv[2], 'utf-8', (err, result) => {
    if (!err){
        let arr = result.split('\n');
        console.log(arr.length - 1);
    }
});

