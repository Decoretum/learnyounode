const http = require('http');

/* 
This problem is the same as the previous problem (HTTP COLLECT) in that  
  you need to use http.get(). However, this time you will be provided with  
  three URLs as the first three command-line arguments.  
   
  You must collect the complete content provided to you by each of the URLs  
  and print it to the console (stdout). You don't need to print out the  
  length, just the data as a String; one line per URL. The catch is that you  
  must print them out in the same order as the URLs are provided to you as  
  command-line arguments. 
  */

const one = process.argv[2];
const two = process.argv[3];
const three = process.argv[4];

http.get(one, (res) => {
    let count = 0;
    let string = "";
    res.setEncoding('utf-8');
    res.on('data', (data) => {
        let arr = data.split('');
        count += arr.length;
        string += data;
    })
    res.on('end', () => {
        console.log(string);
        http.get(two, (res) => {
            let count = 0;
            let string = "";
            res.setEncoding('utf-8');
            res.on('data', (data) => {
                let arr = data.split('');
                count += arr.length;
                string += data;
            })
            res.on('end', () => {
                console.log(string);
                http.get(three, (res) => {
                    let count = 0;
                    let string = "";
                    res.setEncoding('utf-8');
                    res.on('data', (data) => {
                        let arr = data.split('');
                        count += arr.length;
                        string += data;
                    })
                    res.on('end', () => {
                        console.log(string);
                    })
                    
                })
            })
            
        })
    })
    
})
