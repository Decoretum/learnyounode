const http = require('http');
/* 
Write an HTTP server that receives only POST requests and converts  
incoming POST body characters to upper-case and returns it to the client.  
   
Your server should listen on the port provided by the first argument to  
your program. 
*/

const server = http.createServer((req, res) => {
    req.on('data', (data) => {
        res.write(data.toString().toUpperCase());
    })
    req.on('end', () => {
        res.end();
    })
})

server.listen(process.argv[2]);

