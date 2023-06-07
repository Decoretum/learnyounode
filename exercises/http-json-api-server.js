const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    let path = new URL(req.url, `http:localhost:${process.argv[2]}`);
    if (path.toString().includes('parsetime')){
        let info = path.searchParams.get('iso'); //ISO information in url
        let date = new Date(info);
        let hour = date.getHours(); //correct hour
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let obj = {
            hour: hour,
            minute: minute,
            second: second
        }
        res.writeHead(200, {'Content-Type': 'application/json'}) //good practice
        res.write(JSON.stringify(obj));
        res.end();
    } else {
        let info = path.searchParams.get('iso'); //ISO information in url
        let date = new Date(info);
        let minis = date.getTime();
        let obj = {
            unixtime: minis,

        }
        res.writeHead(200, {'Content-Type': 'application/json'}) //good practice
        res.write(JSON.stringify(obj));
        res.end();
    }
    
})

server.listen(process.argv[2]);