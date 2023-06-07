const http = require('http');
const fs = require('fs');
const { assert } = require('console');

/* Write an HTTP server that serves the same text file for each request it  
  receives.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  
   
  You will be provided with the location of the file to serve as the second  
  command-line argument. You must use the fs.createReadStream() method to  
  stream the file contents to the response.
  */

//https://nodesource.com/blog/understanding-streams-in-nodejs/
//Stremas: https://nodejs.org/api/stream.html#readablepipedestination-options

const server = http.createServer((req, res) => {
    let data = fs.createReadStream(process.argv[3]);
    data.setEncoding('utf-8');
    data.pipe(res);
    data.on('end', () => { //when we end readable stream, we end the writeable stream as well
        res.end();
    })
    

})

server.listen(process.argv[2]);