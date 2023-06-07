const http = require('http');
const net = require('net');

//console.log(process.argv[2]);

const server = net.createServer((socket) => {
    let DateObj = new Date();
    let year = DateObj.getFullYear()
    let month = DateObj.getMonth() + 1;
    let day = DateObj.getDate();
    let hour = DateObj.getHours();
    let minute = DateObj.getMinutes();

    if (month < 10){
        month = '0' + month.toString() 
    }
    if (day < 10){
        day = '0' + day.toString();
    }

    let date = year + '-' + month + '-' + day + " " + hour + ":" + minute;
    socket.write(date + "\n");
    socket.end();
})

server.listen(process.argv[2]);