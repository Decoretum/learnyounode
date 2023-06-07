const http = require('http');


/* 
1) Collect data across multiple "data" events and append the results  
  together prior to printing the output. Use the "end" event to determine  
  when the stream is finished and you can write the output. 
*/

//number of characters received from server
//complete string of characters
http.get(process.argv[2], (res) => {
    let count = 0;
    let string = "";
    res.setEncoding('utf-8');
    res.on('data', (data) => {
        let arr = data.split('');
        count += arr.length;
        string += data;
    })
    res.on('end', () => {
        console.log(count);
        console.log(string);
    })
    
})