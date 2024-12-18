//II-Create an HTTP Server and perform operations on it 
//1.Inspect http header
//2.Open file and print it on browser
//3.Read CSV file and print on browser text/plain 
//4.Read pdf file and display on browser 'Content-Type': 'application/pdf'

var http = require('http');
var fs = require('fs');
var util = require('util');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/csv'});
    //1. Inspect HTTP header
    //res.write(util.inspect(req.headers));
    rfs = fs.createReadStream('Book1.csv');

    res.on('error',function(error){
        res.end('File not found');
    })

    rfs.pipe(res);
}).listen(8000);
