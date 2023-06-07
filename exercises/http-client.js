const http = require('http');

http.get(process.argv[2], (res) => {
    res.setEncoding('utf-8');
    res.on('data', (data) => {
        /* data.forEach((datum) => {
            console.log(datum);
        }) */
        console.log(data);
    })
})